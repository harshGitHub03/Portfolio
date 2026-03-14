import { Page } from '@/types/documents/page'

export const blogPage: Page = {
  _id: 'blogPage',
  heading: 'Developer Blog',
  metaTitle: 'Developer Blog – Harsh Patel',
  metaDescription:
    'Articles on MERN stack development, Node.js APIs, MongoDB optimization, deployment strategies, and full-stack engineering.',
  metaKeywords:
    'mern stack blog, nodejs development, mongodb tips, full stack developer articles',
  content: [] as any,
}

export const caseStudyPage: Page = {
  _id: 'caseStudyPage',
  heading: 'Projects',
  metaTitle: 'Projects – Harsh Patel MERN Developer',
  metaDescription:
    'Explore case studies of full-stack applications including SaaS platforms, monday.com apps, and MERN stack projects built by Harsh Patel.',
  metaKeywords:
    'mern projects, full stack portfolio, nodejs projects, react projects, software case studies',
  content: [] as any,
}

export const contactPage: Page = {
  _id: 'contactPage',
  heading: 'Let’s Build Something.',
  metaTitle: 'Contact – Harsh Patel MERN Developer',
  metaDescription:
    'Get in touch with Harsh Patel to discuss MERN stack projects, collaboration opportunities, or freelance development work.',
  metaKeywords:
    'contact mern developer, hire nodejs developer, freelance react developer',
  content: [] as any,
}

export const privacyPage: Page = {
  _id: 'privacyPage',
  heading: 'Privacy Policy',
  metaTitle: 'Privacy Policy – Harsh Patel',
  metaDescription: 'Privacy policy for Harsh Patel’s developer portfolio website.',
  metaKeywords: 'privacy policy',
  content: [
    {
      _type: 'block',
      _key: 'p1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'p1s1',
          text:
            'This website may collect basic information such as your name, email address, and message when you submit the contact form. This information is used only for responding to inquiries and is never shared with third parties.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ] as any,
}

export const termsPage: Page = {
  _id: 'termsPage',
  heading: 'Terms of Service',
  metaTitle: 'Terms of Service – Harsh Patel',
  metaDescription: 'Terms of service for Harsh Patel’s portfolio website.',
  metaKeywords: 'terms of service',
  content: [
    {
      _type: 'block',
      _key: 't1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 't1s1',
          text:
            'By using this website, you agree to view the content for informational purposes only. All projects, articles, and resources displayed here represent the work and experience of Harsh Patel as a MERN stack developer.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ] as any,
}