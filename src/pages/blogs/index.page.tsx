import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Pagination from 'src/components/Pagination'
import type { BlogType } from './[slug].page'
import Category from '../../components/Category'
import { Page } from '../../components/Page'
import { getTimeFormatter } from '../../utils'
import { getAllBlogs, getCategoriesFromBlogs } from '../../utils/blogs'
import styles from './index.module.scss'

type Props = {
  categories: Array<string>
  blogs: Array<BlogType>
  populars: Array<BlogType>
  pageCount: number
}

const PAGE_SIZE = 24

const Index = ({ blogs, populars, categories, pageCount }: Props) => {
  const [t] = useTranslation(['blogs'])
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  const formatTime = getTimeFormatter().format
  const {
    query: { sort_by = 'all' },
    push,
  } = useRouter()

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(`/blogs?sort_by=${e.currentTarget.value.toString()}`).catch((e: Error) => console.error(e.message))
  }

  return (
    <>
      <Head>
        <title>{t('blogs')}</title>
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
                      <span>{blog.readingTime} mins</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className={styles.categories}>
            <div>{t('sort_by')}</div>
            {categories.map(category => (
              <Link
                key={category}
                href={`/blogs?sort_by=${category}`}
                className={styles.category}
                data-selected={sort_by === category}
              >
                {t(category)}
              </Link>
            ))}
          </div>

          <select className={styles.categorySelect} onChange={handleSortChange}>
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
                  <span>{blog.readingTime} mins</span>
                </div>
              </Link>
            ))}
          </div>
          <Pagination pageCount={pageCount} />
        </div>
      </Page>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const pageNo = +(query.page ?? '1')
  const sortBy = typeof query.sort_by === 'string' ? query.sort_by : 'all'

  const blogs = getAllBlogs(sortBy, [
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'category',
    'popular',
    'readingTime',
  ])
  const populars = blogs.filter(blog => blog.category?.includes('popular'))
  const categories = getCategoriesFromBlogs(blogs)
  const pageCount = Math.ceil(blogs.length / PAGE_SIZE)
  const lng = await serverSideTranslations(locale ?? 'en', ['blogs'])

  return {
    props: {
      ...lng,
      blogs: blogs.slice(PAGE_SIZE * (pageNo - 1), PAGE_SIZE * pageNo),
      populars,
      categories: ['all', ...categories, 'newest post', 'oldest post'],
      pageCount,
    },
  }
}

export default Index
