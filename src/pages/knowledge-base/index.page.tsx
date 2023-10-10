import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Pagination from 'src/components/Pagination'
import ExpandedAuthors from 'src/components/KnowledgeBase/ExpandedAuthorList'
import { SyntheticEvent, useState } from 'react'
import Category from '../../components/Category'
import { Page } from '../../components/Page'
import { getTimeFormatter } from '../../utils'
import { Blog, getAllBlogs, getCategoriesFromBlogs } from '../../utils/blogs'
import styles from './index.module.scss'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

type Props = {
  categories: Array<string>
  posts: Array<Blog>
  populars: Array<Blog>
  pageCount: number
}

type BlogType = 'popular' | 'list'

const PAGE_SIZE = 24

const patchCover = (src: string) => {
  if (!src.startsWith('/')) {
    return src
  }
  /*
   * This is a patch to point cover thumbnail to the one generated on the article page
   * It returns 404 if the article page has not been visited and the thumbnail has not been generated
   */
  return `/_next/image?url=${encodeURIComponent(src)}&w=384&q=75`
}

const handleCoverNotFound = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget
  const { src } = img.dataset

  if (!src || !src.startsWith('/')) {
    return
  }

  /*
   * This is a patch to point thumbnail to raw image on github
   * https://github.com/Magickbase/nervos-official-website/issues/297#issuecomment-1682495769
   */
  const RAW_GITHUB_URL = 'https://raw.githubusercontent.com/NervosEducationHub/EducationHubArticles/main'
  if (img.src.startsWith(RAW_GITHUB_URL)) {
    return
  }
  const rawImageUrl = `${RAW_GITHUB_URL}${src.replace('/education_hub_articles', '')}`
  img.src = rawImageUrl
}

const Index = ({ posts, populars, categories, pageCount }: Props) => {
  const [postsToExpandAuthorList, setPostsToExpandAuthorList] = useState<string[]>([])
  const getBlogKey = (post: Blog, type: BlogType) => `${type}-${post.slug}`
  const shouldExpandAuthorList = (post: Blog, type: BlogType) =>
    postsToExpandAuthorList.findIndex(item => item === getBlogKey(post, type)) !== -1
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

  const {
    query: { sort_by = 'all' },
    push,
  } = useRouter()

  // only one post has expanded author list at most
  const handleBlogAuthorClicked = (post: Blog, type: BlogType, e: SyntheticEvent) => {
    e.preventDefault()
    const oldValue = shouldExpandAuthorList(post, type)
    if (oldValue) {
      setPostsToExpandAuthorList([])
    } else {
      setPostsToExpandAuthorList([getBlogKey(post, type)])
    }
  }
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(`/knowledge-base?sort_by=${e.currentTarget.value.toString()}`).catch((e: Error) => console.error(e.message))
  }

  const BlogMeta = ({ post, type }: { post: Blog; type: BlogType }) => {
    return (
      <div className={styles.meta} onClick={e => handleBlogAuthorClicked(post, type, e)}>
        <ExpandedAuthors post={post} isShow={shouldExpandAuthorList(post, type)} />
        <div className={styles.metaItem}>
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
          <span>
            {post.authors[0]?.name ?? ''}
            {post.authors.length > 1 ? ' etc.' : ''}
          </span>
          <span className={styles.separator}>·</span>
          <time>{formatTime(new Date(post.date))}</time>
        </div>
        {post.readingTime && (
          <div className={styles.metaItem}>
            <img src="/images/clock.svg" className={styles.clock} />
            <span>{post.readingTime} mins</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{`Nervos Network | ${t('knowledge_base')}`}</title>
      </Head>
      <Page>
        <div className={styles.banner}>
          <EmbellishedLeft width={906} height={527} className={styles.left} />
          <EmbellishedRight width={906} height={521} className={styles.right} />

          <img src="/images/blog_banner_icons.svg" alt="blog" loading="lazy" className={styles.icons} />
          <span>{t('knowledge_base_banner')}</span>
        </div>
        <div className={styles.container}>
          <div className={styles.popularTitle}>
            <img src="/images/hot.svg" alt="hot" />
            {t('popular_posts')}
          </div>

          <div className={styles.populars}>
            {populars.map(post => {
              return (
                <Link
                  href={post.link || `/knowledge-base/${post.slug}`}
                  key={post.title}
                  className={styles.popular}
                  target={post.link ? '_blank' : '_self'}
                >
                  <div className={styles.introduction}>
                    <div>
                      <div className={styles.title}>{post.title}</div>
                      <div className={styles.excerpt}>{post.excerpt}</div>
                    </div>
                    {post.coverImage && (
                      <img
                        className={styles.coverImage}
                        src={patchCover(post.coverImage.src)}
                        width={post.coverImage.width}
                        height={post.coverImage.height}
                        alt="cover"
                        data-type={post.category?.split(',')[0]?.toLowerCase()}
                        loading="lazy"
                        data-src={post.coverImage.src}
                        onError={handleCoverNotFound}
                      />
                    )}
                  </div>
                  {post.category && (
                    <div className={styles.category}>
                      <Category category={post.category} />
                    </div>
                  )}
                  <BlogMeta post={post} type="popular" />
                </Link>
              )
            })}
          </div>

          <div className={styles.categoriesContainer}>
            <div className={styles.label}>{t('sort_by')}</div>
            <div className={styles.categories}>
              {categories.map(category => (
                <Link
                  key={category}
                  href={`/knowledge-base?sort_by=${encodeURIComponent(category)}`}
                  className={styles.category}
                  data-selected={sort_by === category}
                  data-type={category.toLowerCase()}
                >
                  {t(category)}
                </Link>
              ))}
            </div>
          </div>

          <select className={styles.categorySelect} onChange={handleSortChange} value={sort_by}>
            {categories.map(category => (
              <option key={category} value={category}>
                {t(category)}
              </option>
            ))}
          </select>

          <div className={styles.list}>
            {posts.map(post => (
              <Link
                href={post.link || `/knowledge-base/${post.slug}`}
                key={post.title}
                className={styles.blog}
                target={post.link ? '_blank' : '_self'}
              >
                <div className={styles.title}>{post.title}</div>
                <div className={styles.excerpt}>{post.excerpt}</div>
                {post.coverImage && (
                  <img
                    className={styles.cover}
                    src={patchCover(post.coverImage.src)}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                    alt="cover"
                    loading="lazy"
                    data-src={post.coverImage.src}
                    onError={handleCoverNotFound}
                  />
                )}
                {post.category && (
                  <div className={styles.category}>
                    <Category category={post.category} />
                  </div>
                )}
                <div className={styles.meta} onClick={e => handleBlogAuthorClicked(post, 'list', e)}>
                  <ExpandedAuthors post={post} isShow={shouldExpandAuthorList(post, 'list')} />
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
                  <span>
                    {post.authors[0]?.name ?? ''}
                    {post.authors.length > 1 ? ' etc.' : ''}
                  </span>
                  <span className={styles.separator}>·</span>
                  <time>{formatTime(new Date(post.date))}</time>
                  {post.readingTime && (
                    <>
                      <img src="/images/clock.svg" className={styles.clock} />
                      <span>{post.readingTime} mins</span>
                    </>
                  )}
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
  const pageNo = Number(query.page ?? '1')
  const sortBy = typeof query.sort_by === 'string' ? query.sort_by : 'all'

  const posts = await getAllBlogs(sortBy, locale ?? 'en')
  const populars = posts.filter(post => post.category?.toLowerCase().includes('popular'))
  const categories = getCategoriesFromBlogs(posts)
  const pageCount = Math.ceil(posts.length / PAGE_SIZE)
  const lng = await serverSideTranslations(locale ?? 'en', ['common', 'knowledge-base'])

  const props: Props = {
    ...lng,
    posts: posts.slice(PAGE_SIZE * (pageNo - 1), PAGE_SIZE * pageNo),
    populars,
    categories: ['all', ...categories, 'newest post', 'oldest post'],
    pageCount,
  }

  return { props }
}

export default Index
