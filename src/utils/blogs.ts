import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const blogsDirectory = join(process.cwd(), '_blogs')

export const getBlogSlugs = () => {
  return fs.readdirSync(blogsDirectory)
}

export const getBlogBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(blogsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      /* eslint-disable @typescript-eslint/no-unsafe-assignment */
      items[field] = data[field]
    }
  })

  return items
}

export const getAllBlogs = (fields: string[] = []) => {
  const slugs = getBlogSlugs()
  const blogs = slugs
    .map(slug => getBlogBySlug(slug, fields))
    .sort((blog1, blog2) => {
      if (blog1?.date && blog2?.date) {
        return blog1?.date > blog2?.date ? -1 : 1
      }
      return 0
    })
  return blogs
}
