import Image from 'next/image'

export default function PortableTextImage({ data }: {
  data: string
}) {

  return (
    <Image
      src={data}
      width={800}
      height={800}
      className='my-10 block mx-auto w-full rounded-xl'
      alt=""
    />
  )
}
