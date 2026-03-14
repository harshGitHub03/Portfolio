"use client"
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/shared/tag'
import { useState } from 'react'
import BlogCard from '@/components/shared/blog-card'
import Container from '@/components/global/container'
import BlogArchiveFilter from './blog-archive-filter'
import { Post, PostCategory } from '@/types/documents/post'

export default function BlogArchive({ posts, categories, heading }: {
  posts: Post[]
  heading: string
  categories: PostCategory[]
}) {

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

  function handleFilterPosts(slug: string) {
    if (slug === 'all') return setFilteredPosts(posts);
    setFilteredPosts(posts.filter(post => post.category.slug === slug));
  }

  return (
    <>
      <header className='pt-8 md:pt-10'>
        <Container className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className='-ml-1 text-3xl md:text-5xl font-light leading-none'>
              {heading}
            </h1>
            <p className='mt-2 text-sm text-gray-500'>
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </p>
          </div>
          {/* <BlogArchiveFilter
            categories={categories}
            handleFilterPosts={handleFilterPosts}
          /> */}
        </Container>
      </header>
      <section>
        <Container>
          {filteredPosts.length > 0 ?
            <Posts posts={filteredPosts} />
            :
            <NoPosts />
          }
        </Container>
      </section>
    </>
  )
}

function Posts({ posts }: {
  posts: Post[]
}) {
  const [featured, ...rest] = posts

  return (
    <div className='mt-10 pt-10 mb-8 md:mb-28 border-t border-t-[#efeff1] space-y-12'>
      <FeaturedBlogCard post={featured} />
      {rest.length > 0 && (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {rest.map((post) => (
            <li key={post._id}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function FeaturedBlogCard({ post }: { post: Post }) {
  const { slug, image, category, readTime, title, metaDescription } = post

  return (
    <article>
      <Link
        href={`/blog/${slug}`}
        className='group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pb-12 border-b border-b-[#efeff1] cursor-pointer'
      >
        <div className='overflow-hidden rounded-xl'>
          <Image
            src={image}
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className='w-full h-[260px] md:h-[360px] object-cover transition duration-500 group-hover:scale-105'
            alt={`${title} Thumbnail Image`}
          />
        </div>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <Tag text={category.title} />
            <span className='text-sm tracking-tight text-gray-500'>
              {readTime} Minute Read
            </span>
          </div>
          <h2 className='text-2xl md:text-4xl font-normal tracking-tight leading-snug'>
            {title}
          </h2>
          {metaDescription && (
            <p className='text-sm md:text-base text-gray-500 leading-relaxed line-clamp-3'>
              {metaDescription}
            </p>
          )}
          <span className='inline-block text-sm font-medium underline underline-offset-4 decoration-gray-400 group-hover:decoration-black transition-colors'>
            Read article
          </span>
        </div>
      </Link>
    </article>
  )
}

function NoPosts() {
  return (
    <div className='flex flex-col items-center mt-10 pt-[4.4rem] text-center mb-12 md:mb-20 border-t border-t-[#efeff1]'>
      <span className='text-xl'>
        No Posts Found
      </span>
    </div>
  )
}
