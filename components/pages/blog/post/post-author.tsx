import Image from 'next/image'
import { type PostAuthor } from '@/types/documents/post'

export default function PostAuthor(props: PostAuthor) {

  const { name, description, image } = props

  return (
    <div className='pt-10 xl:pt-4 pb-8 flex flex-col gap-4 border-t xl:border-t-0'>
      <p className='text-xs font-medium uppercase tracking-widest text-gray-400'>
        Written by
      </p>
      <div className='flex items-center gap-3'>
        <Image
          src={image}
          width={56}
          height={56}
          alt={`Image of ${name}`}
          className='rounded-full shrink-0'
        />
        <div>
          <p className='font-medium text-sm antialiased'>{name}</p>
          <p className='text-sm antialiased text-gray-500 leading-snug mt-0.5'>{description}</p>
        </div>
      </div>
    </div>
  )
}
