import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/shared/tag'
import PostTableOfContents from './post-table-of-contents'
import type { PortableTextBlock } from '@portabletext/types'
import { IoArrowBack } from 'react-icons/io5'

export default function PostHeader({ ...props }: {
  image: string
  category: string
  readTime: number
  title: string
  content: PortableTextBlock
}) {

  const { image, category, readTime, title, content } = props

  return (
    <header className='pb-4'>
      <Link
        href='/blog'
        className='inline-flex items-center gap-1.5 mb-6 text-sm text-gray-500 hover:text-black transition-colors'
      >
        <IoArrowBack size={14} />
        Back to blog
      </Link>
      <div className='overflow-hidden rounded-lg md:rounded-xl'>
        <Image
          src={image}
          width={2000}
          height={600}
          alt='Thumbnail Image'
          className='w-full h-[250px] md:h-[420px] object-cover'
        />
      </div>
      <div className='xl:px-5 mt-8 mb-6'>
        <div className='flex items-center gap-3'>
          <Tag text={category} />
          <span className='text-sm font-light tracking-wide text-gray-500'>
            {readTime} Minute Read
          </span>
        </div>
        <h1 className='mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter leading-tight'>
          {title}
        </h1>
      </div>
      <div className='xl:px-5'>
        <hr />
      </div>
      <div className='xl:hidden'>
        <PostTableOfContents content={content} />
      </div>
    </header>
  )
}
