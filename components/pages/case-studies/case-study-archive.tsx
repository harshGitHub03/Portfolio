import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/types/documents/case-study'
import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'
import { FiArrowUpRight } from 'react-icons/fi'

function FeaturedCaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { title, slug, image, shortDescription } = caseStudy
  return (
    <article className='w-full relative rounded-xl overflow-hidden group cursor-pointer aspect-[16/7]'>
      <Link href={`/case-studies/${slug}`} className="block w-full h-full">
        <Image
          src={image}
          fill
          priority
          sizes="100vw"
          alt={title}
          className='object-cover transition duration-700 group-hover:scale-[1.03]'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent' />
        <div className='absolute inset-0 flex flex-col justify-end p-8 md:p-12 max-w-2xl'>
          <span className='text-white/50 text-xs uppercase tracking-widest mb-3 font-medium'>Featured Project</span>
          <h3 className='text-white text-3xl md:text-5xl font-light tracking-tight leading-tight mb-3'>
            {title}
          </h3>
          <p className='text-white/70 text-sm md:text-base leading-relaxed mb-6 line-clamp-2'>
            {shortDescription}
          </p>
          <div className='flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors'>
            View Project
            <FiArrowUpRight size={16} className='transition-transform duration-300 group-hover:rotate-45' />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function CaseStudyArchive({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {
  const [featured, ...rest] = caseStudies

  return (
    <section className='mt-8 mb-6 md:my-16'>
      <Container>
        {featured && (
          <div className='mb-6'>
            <FeaturedCaseStudyCard caseStudy={featured} />
          </div>
        )}
        {rest.length > 0 && (
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {rest.map(caseStudy => (
              <li key={caseStudy._id}>
                <CaseStudyCard caseStudy={caseStudy} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
