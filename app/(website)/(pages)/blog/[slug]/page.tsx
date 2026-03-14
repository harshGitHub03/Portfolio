import { Metadata } from "next";
import { fetchPostBySlug, fetchAllPosts } from '@/lib/fetches'
import Post from "@/components/pages/blog/post/post";

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {

  const post = await fetchPostBySlug(params.slug)

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
  }
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: PostPageProps) {

  const post = await fetchPostBySlug(params.slug)

  return (
    <Post post={post} />
  )
}
