import { settings } from './data/settings'
import { homePage } from './data/home-page'
import { blogPage, caseStudyPage, contactPage, privacyPage, termsPage } from './data/pages'
import { posts, postCategories } from './data/posts'
import { caseStudies } from './data/case-studies'
import { skillCategories } from './data/skills'

const LATEST_COUNT = 3

export async function fetchSettings() {
  return settings
}

export async function fetchHomePage() {
  return homePage
}

export async function fetchBlogPage() {
  return blogPage
}

export async function fetchCaseStudyPage() {
  return caseStudyPage
}

export async function fetchContactPage() {
  return contactPage
}

export async function fetchPrivacyPage() {
  return privacyPage
}

export async function fetchTermsPage() {
  return termsPage
}

export async function fetchAllPosts() {
  return posts
}

export async function fetchLatestPosts() {
  return posts.slice(0, LATEST_COUNT)
}

export async function fetchPostBySlug(slug: string) {
  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error(`Post not found: ${slug}`)
  return post
}

export async function fetchAllPostCategories() {
  return postCategories
}

export async function fetchLatestCaseStudies() {
  return caseStudies.slice(0, LATEST_COUNT)
}

export async function fetchAllCaseStudies() {
  return caseStudies
}

export async function fetchCaseStudyBySlug(slug: string) {
  const study = caseStudies.find((c) => c.slug === slug)
  if (!study) throw new Error(`Case study not found: ${slug}`)
  return study
}

export async function fetchSkillCategories() {
  return skillCategories
}
