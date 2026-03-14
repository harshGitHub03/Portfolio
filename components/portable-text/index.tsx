"use client"
import { cn } from '@/utils/cn';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from './components';
import type { PortableTextBlock } from '@portabletext/types'

interface PortableTextEditorProps {
  data: PortableTextBlock
}

export default function PortableTextEditor({ data }: PortableTextEditorProps) {
  return (
    <div className={cn(
      'prose max-w-full tracking-tight prose-pre:overflow-x-auto',
      'prose-p:text-[0.9375rem] prose-p:leading-relaxed prose-li:text-[0.9375rem]',
      'prose-img:mt-14 prose-img:rounded-xl',
      'prose-a:text-[#0E788A] prose-a:decoration-[#0E788A]/40 prose-a:underline-offset-2',
      'prose-blockquote:border-l-[#0E788A]',
      'prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-headings:antialiased prose-headings:mt-10 prose-headings:mb-3',
    )}>
      <PortableText 
        value={data} 
        components={portableTextComponents}
      />
    </div>
  )
}