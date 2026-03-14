import { CaseStudy } from '@/types/documents/case-study'

export const caseStudies: CaseStudy[] = [
{
  _id: 'case-study-1',
  title: 'BriqLab – Power BI Design & Analytics Platform',
  slug: 'briqlab',
  image: '/images/work/briqlab.png',
  shortDescription:
    'A full-stack platform for data analysts to download Power BI templates, themes, icons, and design assets to build professional dashboards faster.',

  url: 'https://www.briqlab.io',

  overview: [
    {
      _type: 'block',
      _key: 'o1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'o1s1',
          text:
            'BriqLab is a platform built for data analysts and BI developers to create professional Power BI dashboards quickly. The platform provides ready-to-use PBIX templates, JSON themes, color palette generators, and an icon library designed specifically for dashboard design.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'o2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'o2s1',
          text:
            'The goal of the project was to simplify dashboard design by offering a centralized hub of resources including templates, themes, datasets, and learning content. These tools help analysts save hours of formatting and focus on delivering insights faster.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'o3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'o3s1',
          text:
            'As a full-stack developer on this project, I worked on building scalable backend APIs, managing subscription plans, integrating downloads and resource management, and developing responsive UI components for the platform.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ] as any,

  imageGallery: [
    { url: '/images/work/briqlab-1.png', alt: 'BriqLab dashboard templates page' },
    { url: '/images/work/briqlab-3.png', alt: 'BriqLab resource marketplace' },
    { url: '/images/work/briqlab-2.png', alt: 'BriqLab Power BI theme generator' },
  ],

  metaTitle: 'BriqLab – Power BI Dashboard Resource Platform',
  metaDescription:
    'Case study of BriqLab, a platform providing Power BI templates, themes, color palettes, icons, and analytics resources for data analysts.',
  metaKeywords:
    'briqlab, power bi templates, dashboard themes, data analytics platform, power bi resources',
},
 {
  _id: 'case-study-2',
  title: 'DocCreate – Document Automation for monday.com',
  slug: 'project-two',
  image: '/images/work/doccreate-1.png',
  shortDescription:
    'A monday.com marketplace app that automatically generates professional Word and PDF documents from board data using customizable templates and workflow automations.',

  url: 'https://doccreate.io',

  overview: [
    {
      _type: 'block',
      _key: 'q1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'q1s1',
          text:
            'DocCreate is a productivity app built for monday.com that enables teams to automatically generate professional documents such as reports, proposals, invoices, and contracts directly from board data.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'q2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'q2s1',
          text:
            'The application allows users to map monday.com board columns into customizable Word or PDF templates using dynamic placeholders. Documents can be generated instantly or triggered automatically when board data updates, eliminating repetitive manual work.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'q3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'q3s1',
          text:
            'As part of the development process, the platform includes features such as template mapping, image embedding from board columns, automation triggers, and instant document downloads. This helps teams create structured reports, inspection documents, invoices, and proposals efficiently.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ] as any,

  imageGallery: [
    { url: '/images/work/doccreate-1.png', alt: 'DocCreate document template mapping' },
    { url: '/images/work/doccreate-5.png', alt: 'DocCreate generated PDF document example' },
    { url: '/images/work/doccreate-6.png', alt: 'DocCreate monday app interface' },
  ],

  metaTitle: 'DocCreate – Automated Document Generation for monday.com',
  metaDescription:
    'Case study of DocCreate, a monday.com marketplace app that automates document generation using board data and customizable templates.',
  metaKeywords:
    'doccreate monday app, monday.com document automation, pdf generator monday, workflow automation app',
},
{
  _id: 'case-study-3',
  title: 'QR Trax – QR Code Tracking & Analytics for monday.com',
  slug: 'qr-trax',
  image: '/images/work/qrtrax-1.png',
  shortDescription:
    'A monday.com app that enables teams to generate, manage, and track QR codes with real-time analytics and workflow integrations.',

  url: 'https://flowtechapps.com/qrtrax',

  overview: [
    {
      _type: 'block',
      _key: 'r1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'r1s1',
          text:
            'QR Trax is a workflow productivity app built for monday.com that allows teams to generate and manage QR codes directly from their boards. It simplifies asset tracking, field operations, and marketing campaigns by connecting QR scans with monday.com data.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'r2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'r2s1',
          text:
            'The platform enables users to create dynamic QR codes linked to board items, track scan activity, and analyze engagement through detailed analytics dashboards. This helps organizations monitor asset usage, customer interactions, and operational workflows in real time.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'r3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'r3s1',
          text:
            'As part of the development process, the application includes QR generation, scan tracking, reporting dashboards, and automation integrations with monday.com. The system enables teams to automate workflows based on scan activity and manage large volumes of QR-linked resources efficiently.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ] as any,

  imageGallery: [
    { url: '/images/work/qrtrax-1.png', alt: 'QR Trax dashboard and analytics' },
    { url: '/images/work/qrtrax-2.png', alt: 'QR Trax QR code generation interface' },
    { url: '/images/work/qrtrax-3.png', alt: 'QR Trax scan tracking and reports' },
  ],

  metaTitle: 'QR Trax – QR Code Tracking & Analytics for monday.com',
  metaDescription:
    'Case study of QR Trax, a monday.com app for generating, managing, and tracking QR codes with analytics and workflow automation.',
  metaKeywords:
    'qr trax monday app, qr code tracking, qr analytics, monday.com workflow app, qr management platform',
}
]
