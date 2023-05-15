import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { TwitterShareButton, LinkedinShareButton, RedditShareButton, FacebookShareButton } from 'react-share'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ReactMarkdown from 'react-markdown'
import { HeadingProps } from 'react-markdown/lib/ast-to-react'
import { Page } from '../../components/Page'
import { getTimeFormatter } from '../../utils'
import { getBlogBySlug, getAllBlogs, getCategoriesFromBlogs, Blog } from '../../utils/blogs'
import styles from './knowledgeBase.module.scss'
import { TOCContextProvider, TOCItem } from '../../components/TableOfContents'
import { StyledTOC } from './StyledTOC'

type Props = {
  post: Blog
  recents: Array<Record<'title' | 'slug', string>>
  categories: Array<string>
}

const Post = ({ post, recents, categories }: Props) => {
  const router = useRouter()
  const [t] = useTranslation(['knowledge-base'])

  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  const formatTime = (date: Date) => {
    try {
      return getTimeFormatter().format(date)
    } catch (e) {
      console.error(`failed to format date: ${date.toString()}`)
      return ''
    }
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <TOCContextProvider>
      <Head>{post.title ? <title>{`Nervos Network | ${post.title}`}</title> : null}</Head>
      <Page>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.banner}>{t('knowledge_base_banner')}</div>
              <Link href="/knowledge-base" className={styles.back}>
                {t('back')}
              </Link>
            </div>
            <div className={styles.content}>
              <article>
                <Head>
                  <title>{post.title}</title>
                  <meta property="og:image" content={post.coverImage?.src} />
                </Head>

                <div className={styles.meta}>
                  <div>
                    <div className={styles.avatars}>
                      {[...post.authors]
                        // Here, with flex-direction: row-reverse, the preceding
                        // elements can cover the succeeding elements.
                        .reverse()
                        .map(({ name, avatar }) =>
                          avatar ? (
                            <img key={name} className={styles.avatar} src={avatar} />
                          ) : (
                            <div key={name} className={styles.avatar}>
                              {name[0]?.toUpperCase()}
                            </div>
                          ),
                        )}
                    </div>
                    <b>
                      {post.authors[0]?.name ?? ''}
                      {post.authors.length > 1 ? ' etc.' : ''}
                    </b>
                    <span className={styles.separator}>·</span>
                    <time>{formatTime(new Date(post.date))}</time>
                  </div>
                  <div>
                    <img src="/images/clock.svg" className={styles.clock} />
                    <span>{post.readingTime} mins</span>
                  </div>
                </div>

                <TOCItem id="post_title" className={styles.title} titleInTOC={post.title}>
                  {post.title}
                </TOCItem>
                <div className={styles.excerpt}>{post.excerpt}</div>

                {post.coverImage && (
                  <Image
                    src={post.coverImage.src}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                    alt="cover"
                  />
                )}

                <div>
                  <ReactMarkdown
                    components={{
                      h1: wrapHeadingWithTOCItem('h1'),
                      h2: wrapHeadingWithTOCItem('h2'),
                      h3: wrapHeadingWithTOCItem('h3'),
                      h4: wrapHeadingWithTOCItem('h4'),
                      h5: wrapHeadingWithTOCItem('h5'),
                      h6: wrapHeadingWithTOCItem('h6'),
                      img: props => {
                        if (props.src == null) return null

                        const isExternalLink = /^(https?:)?\/\//.test(props.src)
                        return (
                          <Image
                            src={isExternalLink ? props.src : `/education_hub_articles/${post.slug}/${props.src ?? ''}`}
                            alt={props.alt ?? ''}
                            // TODO: nextjs requires these two properties to solve the
                            // problem of loading, theoretically here is indeed able to
                            // know the width and height of the image in advance, but the
                            // implementation of the more troublesome, first temporarily do not deal with.
                            width={1920}
                            height={1080}
                          />
                        )
                      },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
                <img src="/images/article_end.svg" alt="end" className={styles.end} />
              </article>
              <aside>
                <StyledTOC />
                <div className={styles.title}>{`${t('recent_posts')}:`}</div>
                <div className={styles.recents}>
                  {recents.map(b => (
                    <Link key={b.title} href={`/knowledge-base/${b.slug}`}>
                      {b.title}
                    </Link>
                  ))}
                </div>
                <div className={styles.title}>{`${t('categories')}:`}</div>
                <div className={styles.category}>
                  {categories.map(c => (
                    <Link key={c} href={`/blogs?sort_by=${encodeURIComponent(c)}`}>
                      {t(c)}
                    </Link>
                  ))}
                </div>

                <div className={styles.subtitle}>{`${t('share_this_post')}:`}</div>
                <div className={styles.media}>
                  <TwitterShareButton title={post.title} url={`https://nervos.org${router.asPath}`}>
                    <img src="/images/twitter.svg" alt="twitter" loading="lazy" />
                  </TwitterShareButton>
                  <LinkedinShareButton url={`https://nervos.org${router.asPath}`}>
                    <img src="/images/linkedin.svg" alt="linkedin" loading="lazy" />
                  </LinkedinShareButton>
                  <RedditShareButton title={post.title} url={`https://nervos.org${router.asPath}`}>
                    <img src="/images/reddit.svg" alt="reddit" loading="lazy" />
                  </RedditShareButton>
                  <FacebookShareButton quote={post.title} url={`https://nervos.org${router.asPath}`}>
                    <img src="/images/facebook.svg" alt="facebook" loading="lazy" />
                  </FacebookShareButton>
                </div>
              </aside>
            </div>
          </div>
        )}
      </Page>
    </TOCContextProvider>
  )
}

function wrapHeadingWithTOCItem(HeadingTag: string) {
  return function tagWithTOCItem(props: HeadingProps) {
    const content = props.children[0]
    if (typeof content !== 'string') return <HeadingTag {...props} />

    return (
      <TOCItem id={content} titleInTOC={content}>
        <HeadingTag {...props} />
      </TOCItem>
    )
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = params?.slug?.toString()

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const post = getBlogBySlug(slug, locale ?? 'en')

  const lng = await serverSideTranslations(locale ?? 'en', ['common', 'knowledge-base'])

  const blogs = getAllBlogs('all', locale ?? 'en', ['title', 'slug', 'category'])
  const categories = getCategoriesFromBlogs(blogs)
  const recents = blogs.slice(0, 3)

  const props: Props = {
    ...lng,
    post,
    recents,
    categories,
  }

  return { props }
}

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const posts = getAllBlogs('all', 'en', ['slug'])

  const pageParams = posts.map(post => ({ slug: post.slug }))

  return {
    paths: (locales ?? ['en']).map(locale => pageParams.map(params => ({ params, locale }))).flat(),
    fallback: false,
  }
}

export default Post
