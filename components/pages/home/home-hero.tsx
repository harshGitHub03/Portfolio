import Image from 'next/image'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

export default function HomeHero({ ...props }: {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}) {

  const { heading, paragraph, image, btnText, btnDestination } = props

  return (
    <section className='pt-8 md:pt-24'>
      <Container>
        <div className='flex flex-col-reverse md:flex-row justify-between'>
          <div className='flex flex-col items-start'>
            <h1 className='w-full max-w-[60rem] -ml-1 md:-ml-2 text-[14vw] lg:text-[10vw] font-light tracking-tighter leading-none'>
              {heading}
            </h1>
            <p className='max-w-lg mt-6 md:mt-8 mb-8 md:mb-12 text-lg md:text-2xl font-light tracking-tight'>
              {paragraph}
            </p>
            <Button
              href={btnDestination}
              variant="default"
              size="default"
            >
              {btnText}
            </Button>
          </div>
          <div>
            <Image
              src={image}
              alt="Image of Brooke"
              width={250}
              height={650}
              className="object-contain mb-10 md:mb-0 "
            />
          </div>
        </div>
      </Container>
    </section>
  )
}