import { Metadata } from "next";

import {
  fetchHomePage,
  fetchLatestCaseStudies,
  fetchLatestPosts
} from '@/lib/fetches'

import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchHomePage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function Home() {

  const [page, caseStudies, posts] = await Promise.all([
    fetchHomePage(),
    fetchLatestCaseStudies(),
    fetchLatestPosts(),
  ])

  return (
    <>
      <HomeHero
        heading={page.heading}
        paragraph={page.paragraph}
        image={page.image}
        btnText={page.btnText}
        btnDestination={page.btnDestination}
      />
      <HomeCaseStudies caseStudies={caseStudies} />
      <HomeLatestPosts posts={posts} />
    </>
  )
}
