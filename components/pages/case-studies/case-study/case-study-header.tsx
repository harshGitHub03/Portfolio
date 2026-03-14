import Tag from '@/components/shared/tag'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'
import { CaseStudy } from '@/types/documents/case-study'

export default function CaseStudyHeader({ caseStudy }: {
  caseStudy: CaseStudy
}) {

  const { title, shortDescription: description, url } = caseStudy

  return (
    <header className='mt-16 mb-16 md:mt-24 md:mb-20'>
      <Container>
        <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-10 md:gap-20'>
          <div className='flex-col items-start max-w-2xl'>
            <Tag text="Case Study" />
            <h1 className='mt-6 text-4xl md:text-6xl font-light tracking-tight leading-tight'>
              {title}
            </h1>
            <p className='mt-5 text-muted-foreground leading-7 text-base md:text-lg'>
              {description}
            </p>
          </div>
          <Button
            href={`${url}`}
            variant="outline"
            size="large"
          >
            View Project
          </Button>
        </div>
      </Container>
    </header>
  )
}