import Tag from './tag'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types/documents/post'
import AnimatedUnderline from './animated-underline'

export default function BlogCard({ post }: {
  post: Post
}) {

  const { slug, image, category, readTime, title, metaDescription } = post

  return (
    <article className='h-full'>
      <Link
        href={`/blog/${slug}`}
        className='relative h-full flex flex-col gap-5 items-start pb-8 border-b cursor-pointer group'
      >
        <div className='w-full overflow-hidden rounded-lg'>
          <Image
            src={image}
            width={600}
            height={400}
            sizes="(max-width: 640px) 320px, (max-width: 1280px) 584px, (max-width: 1600px) 712px"
            className='w-full h-auto bg-black transition duration-500 group-hover:scale-105'
            alt={`${title} Thumbnail Image`}
          />
        </div>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <Tag text={category.title} />
            <span className='ml-3 text-sm tracking-tight text-gray-600'>
              {readTime} Minute Read
            </span>
          </div>
          <h3 className='text-xl md:text-[1.6rem] font-normal tracking-tight leading-snug'>
            {title}
          </h3>
          {metaDescription && (
            <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
              {metaDescription}
            </p>
          )}
        </div>
        <AnimatedUnderline className='-bottom-0'/>
      </Link>
    </article>
  )
}
