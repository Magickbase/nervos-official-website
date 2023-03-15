import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { BlogType } from './[slug].page'
import Category from '../../components/Category'
import { Page } from '../../components/Page'
import { getAllBlogs } from '../../utils'
import { getTimeFormatter } from '../../utils/time'
import styles from './index.module.scss'

type Props = {
  categories: Array<string>
  blogs: Array<BlogType>
  populars: Array<BlogType>
}

const Index = ({ blogs, populars, categories }: Props) => {
  const [t] = useTranslation(['blog'])
  /* eslint-disable @typescript-eslint/unbound-method */
  const formatTime = getTimeFormatter().format
  const {
    query: { sorted = 'all' },
  } = useRouter()

  return (
    <>
      <Head>
        <title>{t('blog')}</title>
      </Head>
      <Page>
        <div className={styles.container}>
          <div className={styles.banner}>
            <img src="/images/blog_banner_left.svg" alt="blog" loading="lazy" className={styles.left} />
            <img src="/images/blog_banner_left.svg" alt="blog" loading="lazy" className={styles.left} />
            <img src="/images/blog_banner_right.svg" alt="blog" loading="lazy" className={styles.right} />
            <img src="/images/blog_banner_right.svg" alt="blog" loading="lazy" className={styles.right} />
            <img src="/images/blog_banner_icons.svg" alt="blog" loading="lazy" className={styles.icons} />
            {t('blog_banner')}
          </div>

          <div className={styles.popularTitle}>
            <img src="/images/hot.svg" alt="hot" />
            {t('popular_posts')}
          </div>

          <div className={styles.populars}>
            {populars.map(blog => {
              return (
                <Link href={`/blogs/${blog.slug}`} key={blog.title} className={styles.popular}>
                  <div className={styles.introduction}>
                    <div>
                      <div className={styles.title}>{blog.title}</div>
                      <div className={styles.excerpt}>{blog.excerpt}</div>
                    </div>
                    <img src={blog.coverImage} alt="cover" loading="lazy" data-type={blog.category} />
                  </div>
                  <div className={styles.category}>
                    <Category category={blog.category} />
                  </div>
                  <div className={styles.meta}>
                    <div>
                      <img src="/images/nervos_avatar.svg" />
                      <span>Nervos</span>
                      <span className={styles.separator}>·</span>
                      <time>{formatTime(new Date(blog.date))}</time>
                    </div>
                    <div>
                      <img src="/images/clock.svg" className={styles.clock} />
                      <span>4 mins</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className={styles.categories}>
            <div>{t('sort_by')}</div>
            <div className={styles.category} data-selected={sorted === 'all'}>
              {t('all')}
            </div>
            {categories.map(category => (
              <div key={category} className={styles.category} data-selected={sorted === category}>
                {t(category)}
              </div>
            ))}
          </div>

          <select className={styles.categorySelect}>
            <option value="all">{t('all')}</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {t(category)}
              </option>
            ))}
          </select>

          <div className={styles.list}>
            {blogs.map(blog => (
              <Link href={`/blogs/${blog.slug}`} key={blog.title} className={styles.blog}>
                <div className={styles.title}>{blog.title}</div>
                <div className={styles.excerpt}>{blog.excerpt}</div>
                <img src={blog.coverImage} alt="cover" loading="lazy" className={styles.cover} />
                <div className={styles.category}>
                  <Category category={blog.category} />
                </div>
                <div className={styles.meta}>
                  <img src="/images/nervos_avatar.svg" />
                  <span>Nervos</span>
                  <span className={styles.separator}>·</span>
                  <time>{formatTime(new Date(blog.date))}</time>
                  <img src="/images/clock.svg" className={styles.clock} />
                  <span>4 mins</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogs = getAllBlogs(['title', 'date', 'slug', 'coverImage', 'excerpt', 'category', 'popular'])
  const populars = blogs.filter(blog => blog.popular)
  const categories = [...new Set(blogs.map(blog => blog.category))]
  const lng = await serverSideTranslations(locale ?? 'en', ['blog'])

  return {
    props: { ...lng, blogs, populars, categories },
  }
}

export default Index
