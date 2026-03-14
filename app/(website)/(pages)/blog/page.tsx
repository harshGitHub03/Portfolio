import { Metadata } from 'next'

import {
  fetchAllPostCategories,
  fetchAllPosts,
  fetchBlogPage
} from '@/lib/fetches'

import BlogArchive from '@/components/pages/blog/blog-archive'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchBlogPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function BlogPage() {

  const [page, posts, categories] = await Promise.all([
    fetchBlogPage(),
    fetchAllPosts(),
    fetchAllPostCategories(),
  ])

  return (
    <BlogArchive
      posts={posts}
      categories={categories}
      heading={page.heading}
    />
  )
}
