"use client"
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { IoListOutline } from 'react-icons/io5'

interface PostTableOfContentsProps {
  content: PortableTextBlock
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-5% 0px -85% 0px' }
    )

    document.querySelectorAll('h2[id], h3[id], h4[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}

export default function PostTableOfContents({ content }: PostTableOfContentsProps) {
  const activeId = useActiveSection()

  const components: PortableTextComponents = {
    block: ({ value }) => {
      const isActive = value._key === activeId
      switch (value.style) {
        case 'h2':
          return (
            <li className={cn(
              'mt-2.5 text-sm border-b border-b-[#ebebe6] pb-2.5 list-none transition-colors duration-150',
              isActive ? 'font-semibold text-black' : 'text-gray-500 hover:text-black'
            )}>
              <a href={`#${value._key}`}>{value.children[0].text}</a>
            </li>
          )
        case 'h3':
          return (
            <li className={cn(
              'ml-3 mt-2.5 text-sm border-b border-b-[#efefea] pb-2.5 list-none transition-colors duration-150',
              isActive ? 'font-medium text-black' : 'text-gray-400 hover:text-black'
            )}>
              <a href={`#${value._key}`}>{value.children[0].text}</a>
            </li>
          )
        case 'h4':
          return (
            <li className={cn(
              'ml-6 mt-2.5 text-sm border-b border-b-[#efefea] pb-2.5 list-none transition-colors duration-150',
              isActive ? 'font-medium text-black' : 'text-gray-400 hover:text-black'
            )}>
              <a href={`#${value._key}`}>{value.children[0].text}</a>
            </li>
          )
        default:
          return null
      }
    },
  }

  return (
    <div>
      <div className='py-3 px-5 flex items-center justify-between gap-2.5 border-b bg-[#f0f0eb]'>
        <span className='text-sm font-medium'>Table of Contents</span>
        <IoListOutline size={18} />
      </div>
      <div className='px-4 py-1'>
        <PortableText value={content} components={components} />
      </div>
    </div>
  )
}
