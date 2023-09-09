import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), 'pages', 'blog')

export const getPostBySlug = slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data, content } = matter(fileContent)

 return data
}
