import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { TwitterShareButton, LinkedinShareButton, RedditShareButton, FacebookShareButton } from 'react-share'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Page } from '../../components/Page'
import { getBlogBySlug, getAllBlogs, markdownToHtml } from '../../utils'
import { getTimeFormatter } from '../../utils/time'
import styles from './blog.module.scss'

export type BlogType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: string
  category: string
  popular: string
  readingTime: string
}

type Props = {
  blog: BlogType
  recents: Array<Record<'title' | 'slug', string>>
}

const Blog = ({ blog, recents }: Props) => {
  const router = useRouter()
  const [t] = useTranslation(['blogs'])

  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  const formatTime = getTimeFormatter().format
  const handleBack = () => {
    router.back()
  }

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Page>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div className={styles.container}>
          <div className={styles.banner}>{t('blog_banner')}</div>
          <div className={styles.back} onClick={handleBack}>
            {t('back')}
          </div>
          <div className={styles.content}>
            <article>
              <Head>
                <title>{blog.title}</title>
                <meta property="og:image" content={blog.coverImage} />
              </Head>

              <div className={styles.meta}>
                <div>
                  <img src="/images/nervos_avatar.svg" />
                  <b>Nervos</b>
                  <span className={styles.separator}>·</span>
                  <time>{formatTime(new Date(blog.date))}</time>
                </div>
                <div>
                  <img src="/images/clock.svg" className={styles.clock} />
                  <span>{blog.readingTime} mins</span>
                </div>
              </div>

              <div className={styles.title}>{blog.title}</div>
              <div className={styles.excerpt}>{blog.excerpt}</div>

              <img src={blog.coverImage} alt="cover" loading="lazy" />

              <div>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
              <img src="/images/article_end.svg" alt="end" className={styles.end} />
            </article>
            <aside>
              <div className={styles.title}>{`${t('recent_posts')}:`}</div>
              <div className={styles.recents}>
                {recents.map(b => (
                  <Link key={b.title} href={`/blogs/${b.slug}`}>
                    {b.title}
                  </Link>
                ))}
              </div>
              <div className={styles.title}>{`${t('category')}:`}</div>
              <div className={styles.category}>
                <div>{blog.category}</div>
              </div>

              <div className={styles.subtitle}>{`${t('share_this_post')}:`}</div>
              <div className={styles.media}>
                <TwitterShareButton title={blog.title} url={`https://nervos.org${router.asPath}`}>
                  <img src="/images/twitter.svg" alt="twitter" loading="lazy" />
                </TwitterShareButton>
                <LinkedinShareButton url={`https://nervos.org${router.asPath}`}>
                  <img src="/images/linkedin.svg" alt="linkedin" loading="lazy" />
                </LinkedinShareButton>
                <RedditShareButton title={blog.title} url={`https://nervos.org${router.asPath}`}>
                  <img src="/images/reddit.svg" alt="reddit" loading="lazy" />
                </RedditShareButton>
                <FacebookShareButton quote={blog.title} url={`https://nervos.org${router.asPath}`}>
                  <img src="/images/facebook.svg" alt="facebook" loading="lazy" />
                </FacebookShareButton>
              </div>
            </aside>
          </div>
        </div>
      )}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = params?.slug?.toString()

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const blog = getBlogBySlug(slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
    'coverImage',
    'category',
    'popular',
    'readingTime',
  ])
  const content = await markdownToHtml(blog.content || '')
  const lng = await serverSideTranslations(locale ?? 'en', ['blogs'])

  const recents = getAllBlogs('all', ['title', 'slug']).slice(0, 3)

  return {
    props: {
      ...lng,
      blog: {
        ...blog,
        content,
      },
      recents,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const blogs = getAllBlogs('all', ['slug'])

  return {
    paths: blogs.map(blog => {
      return {
        params: {
          slug: blog.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Blog
