import { Settings } from '@/types/singletons/settings'

export const settings: Settings = {
  enableBottomBar: false,
  bottomBarMessage: 'Your announcement message here',
  enableBottomBarLink: false,
  bottomBarLinkUrl: '#',
  bottomBarLinkText: 'Learn More',
  bottomBarLinkColor: '000000',
  navbarButtonText: 'Contact',
  navbarButtonLink: '/contact',
  logoText: 'Harsh',
  navbarMenuItems: [
    { _id: '1', title: 'Work', link: '/case-studies' },
    { _id: '2', title: 'Skills', link: '/skills' },
    { _id: '3', title: 'Blog', link: '/blog' },
    // { _id: '3', title: 'Contact', link: '/contact' },
  ],
  footerTagline: 'Building great things.',
  enableSubscribeForm: false,
  subscribeFormTitle: 'Subscribe to my newsletter',
  subscribeFormPlaceholder: 'your@email.com',
  footerQuickLinks: [
    { _id: '1', title: 'Home', link: '/' },
    { _id: '2', title: 'Work', link: '/case-studies' },
    { _id: '3', title: 'Blog', link: '/blog' },
    { _id: '4', title: 'Contact', link: '/contact' },
  ],
  footerSocialLinks: [
    { _id: '1', title: 'GitHub', link: 'https://github.com/harshGitHub03' },
    { _id: '2', title: 'LinkedIn', link: 'https://www.linkedin.com/in/harsh-patel-84baa62b8' },
    // { _id: '3', title: 'Twitter', link: '#' },
  ],
  footerCopyright: `© ${new Date().getFullYear()} Harsh's Portfolio. All rights reserved.`,
  footerLegalLinks: [
    { _id: '1', title: 'Privacy Policy', link: '/privacy' },
    { _id: '2', title: 'Terms', link: '/terms' },
  ],
  enableFootnote: true,
  enableFootnoteLink: true,
  footerFootnoteText: '',
  footerFootnoteLinkText: '',
  footerFootnoteLink: '',
}
