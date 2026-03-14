import Image from 'next/image';
import Container from '@/components/global/container';
import { CaseStudy } from '@/types/documents/case-study';
import PortableTextEditor from '@/components/portable-text';

export default function CaseStudyOverview({ caseStudy }: {
  caseStudy: CaseStudy
}) {
  return (
    <section>
      <Container>
        <Image 
          src={caseStudy.image}
          width={2000}
          height={600}
          alt={caseStudy.title}
          className='h-[400px] md:h-[600px] object-cover rounded-xl'
        />
        <div className='flex-col justify-center relative max-w-3xl mx-auto mt-14 md:mt-24 md:mb-28'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-xs uppercase tracking-widest text-muted-foreground font-medium'>Overview</span>
            <div className='flex-1 h-px bg-border' />
          </div>
          <h2 className='mb-6 text-3xl md:text-4xl font-light tracking-tight'>
            Project Overview
          </h2>
          <PortableTextEditor
            data={caseStudy.overview}
          />
        </div>
      </Container>
    </section>
  )
}