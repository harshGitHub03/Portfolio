"use client"
import Link from 'next/link';
import Container from '@/components/global/container';
import { CaseStudy } from "@/types/documents/case-study";
import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudyCard from '@/components/shared/case-study-card';
import { FiArrowUpRight } from 'react-icons/fi';

export default function HomeCaseStudies({ caseStudies }: {
  caseStudies: CaseStudy[]
}) {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <section className="relative mt-12 md:mt-20 mb-6 md:mb-12 pt-20 md:pt-44 overflow-x-hidden">
      <motion.div
        className='-left-[640px] top-0 absolute text-[3.8rem] md:text-[8rem] tracking-tighter font-extralight whitespace-nowrap text-foreground/10 select-none pointer-events-none'
        style={{ x }}
      >
        {([...Array(6)].map(() => 'MongoDB ✦ Express ✦ React ✦ Node ✦ ')).join("")}
      </motion.div>
      <Container>
        <div className='flex items-end justify-between mb-8 md:mb-12 mt-10'>
          <h2 className='text-2xl md:text-4xl font-light tracking-tight'>Selected Work</h2>
          <Link
            href="/case-studies"
            className='group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            View all
            <FiArrowUpRight size={14} className='transition-transform duration-300 group-hover:rotate-45' />
          </Link>
        </div>
        <ul className='grid lg:grid-cols-3 gap-6 md:gap-8 w-full'>
          {caseStudies?.map((item) => (
            <li key={item._id}>
              <CaseStudyCard caseStudy={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}