import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/types/documents/case-study'
import { FiArrowUpRight } from 'react-icons/fi'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {

  const { title, slug, image, shortDescription } = caseStudy

  return (
    <article className='w-full relative rounded-xl cursor-pointer overflow-hidden group aspect-[3/4]'>
      <Link href={`/case-studies/${slug}`} className="block w-full h-full">
        <Image
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={title}
          className='object-cover transition duration-700 group-hover:scale-[1.05]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-80' />
        <div className='absolute bottom-0 left-0 right-0 p-5 md:p-6'>
          <p className='text-white/70 text-sm mb-3 max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-500 ease-in-out line-clamp-2'>
            {shortDescription}
          </p>
          <div className='flex items-center justify-between gap-4'>
            <h3 className='text-white text-base md:text-lg font-light tracking-tight leading-snug'>
              {title}
            </h3>
            <span className='flex-shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white'>
              <FiArrowUpRight
                size={16}
                className='text-white transition-colors duration-300 group-hover:text-black group-hover:rotate-0 rotate-0'
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
