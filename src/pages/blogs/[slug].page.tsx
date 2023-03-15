import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getBlogBySlug, getAllBlogs, markdownToHtml } from '../../utils'

export type BlogType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: string
  category: string
  popular: string
}

type Props = {
  blog: BlogType
  moreBlogs: BlogType[]
  preview?: boolean
}

const Blog = ({ blog }: Props) => {
  const router = useRouter()
  const title = `${blog.title}`
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={blog.coverImage} />
            </Head>
            <div>{blog.title}</div>
            <img src={blog.coverImage} />
            <time>{blog.date}</time>
            <div>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </article>
        </>
      )}
    </div>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const blog = getBlogBySlug(params.slug, ['title', 'date', 'slug', 'content', 'coverImage', 'category', 'popular'])
  const content = await markdownToHtml(blog.content || '')

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  }
}

export const getStaticPaths = () => {
  const blogs = getAllBlogs(['slug'])

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
