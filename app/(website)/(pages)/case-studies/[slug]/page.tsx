import { Metadata } from "next";
import { fetchCaseStudyBySlug, fetchAllCaseStudies } from '@/lib/fetches'
import CaseStudy from '@/components/pages/case-studies/case-study/case-study'

interface CaseStudyPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {

  const caseStudy = await fetchCaseStudyBySlug(params.slug)

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    keywords: caseStudy.metaKeywords,
  }
}

export async function generateStaticParams() {
  const caseStudies = await fetchAllCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {

  const caseStudy = await fetchCaseStudyBySlug(params.slug)

  return (
    <CaseStudy caseStudy={caseStudy} />
  )
}
