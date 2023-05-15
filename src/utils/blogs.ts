/* this module is only available on server side */
import fs from 'fs'
import { join, relative } from 'path'
import matter from 'gray-matter'
import sizeOf from 'image-size'
import { omitNullValue, pick } from '.'

const blogsRootDirectory = join(process.cwd(), 'public', 'education_hub_articles')

export interface Blog {
  slug: string
  content: string
  title: string
  date: string
  readingTime: string
  authors: { name: string; avatar?: string }[]
  coverImage?: {
    src: string
    width?: number
    height?: number
  }
  excerpt?: string
  category?: string
  link?: string
}

export const getBlogSlugs = (dirPath = blogsRootDirectory, slugs: string[] = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      slugs = getBlogSlugs(fullPath, slugs)
    } else if (file === 'index.md') {
      slugs.push(relative(blogsRootDirectory, dirPath))
    }
  })

  return slugs
}

export function getBlogBySlug(slug: string, prefLang?: string): Blog
export function getBlogBySlug<F extends (keyof Blog)[]>(
  slug: string,
  prefLang: string | undefined,
  fields: F,
): Pick<Blog, F[number]>
export function getBlogBySlug<F extends (keyof Blog)[]>(
  slug: string,
  prefLang = 'en',
  fields?: F,
): Blog | Pick<Blog, F[number]> {
  const nameSuffix = prefLang === 'en' ? '' : `_${prefLang}`
  let fullPath = join(blogsRootDirectory, slug, `index${nameSuffix}.md`)
  if (!fs.existsSync(fullPath)) {
    fullPath = join(blogsRootDirectory, slug, 'index.md')
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  let coverImageURL = typeof data.coverImage === 'string' ? data.coverImage : undefined
  if (coverImageURL != null) {
    const isExternalLink = /^(https?:)?\/\//.test(coverImageURL)
    if (!isExternalLink) {
      coverImageURL = `/education_hub_articles/${slug}/${coverImageURL}`
    }
  }
  const coverImage =
    coverImageURL != null
      ? {
          src: coverImageURL,
          ...sizeOf(join(process.cwd(), 'public', coverImageURL)),
        }
      : undefined

  const date = typeof data.date === 'string' ? data.date : fs.statSync(fullPath).birthtime.toISOString()
  const readingTime = Math.round(content.length / 1300).toString()

  const authorNames: string[] = Array.isArray(data.author)
    ? data.author.filter((author): author is string => typeof author === 'string')
    : typeof data.author === 'string'
    ? [data.author]
    : ['Nervos']

  const authors = authorNames.map(name => {
    if (name.toLowerCase() === 'nervos') return { name, avatar: '/images/nervos_avatar.svg' }
    if (name.startsWith('github:')) {
      name = name.substring('github:'.length)
      return { name, avatar: `https://avatars.githubusercontent.com/${name}` }
    }

    return { name }
  })

  const title = getStringValue(data.title)
  const excerpt = getStringValue(data.excerpt)
  const category = getStringValue(data.category)
  const link = getStringValue(data.link)

  const blog = omitNullValue({
    slug,
    title: title ?? slug,
    content,
    date,
    coverImage,
    readingTime,
    authors,
    excerpt,
    category,
    link,
  })

  return fields == null ? blog : pick(blog, fields)
}

export function getAllBlogs<F extends (keyof Blog)[]>(sortBy = 'all', prefLang = 'en', fields?: F) {
  const slugs = getBlogSlugs()
  const blogs = slugs
    .map(slug =>
      fields == null ? getBlogBySlug(slug, prefLang) : getBlogBySlug(slug, prefLang, [...fields, 'date', 'category']),
    )
    .sort((blog1, blog2) => {
      switch (sortBy) {
        case 'oldest post': {
          if (blog1?.date && blog2?.date) {
            return blog1?.date > blog2?.date ? 1 : -1
          }
          break
        }
        case 'newest post':
        case 'all': {
          if (blog1?.date && blog2?.date) {
            return blog1?.date > blog2?.date ? -1 : 1
          }
        }
        default: {
          if (blog1?.category?.startsWith(sortBy) && !blog2?.category?.startsWith(sortBy)) {
            return -1
          } else if (!blog1?.category?.startsWith(sortBy) && blog2?.category?.startsWith(sortBy)) {
            return 1
          } else if (blog1?.date && blog2?.date) {
            return blog1?.date > blog2?.date ? -1 : 1
          }
        }
      }
      return 0
    })
  return blogs
}

export const getCategoriesFromBlogs = (blogs: Pick<Blog, 'category'>[]) =>
  [...new Set(blogs.map(blog => blog.category?.split(',') ?? []).flat())]
    .filter(v => v)
    .map(v => v.toLowerCase())
    .sort()

function getStringValue(data: unknown): string | undefined {
  return typeof data === 'string' ? data : undefined
}
