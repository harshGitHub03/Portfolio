import { Post, PostCategory } from '@/types/documents/post'

export const postCategories: PostCategory[] = [
  { title: 'Design', slug: 'design' },
  { title: 'Development', slug: 'development' },
  { title: 'Business', slug: 'business' },
]

export const posts: Post[] = [
  {
    _id: 'post-1',
    slug: 'building-scalable-rest-apis-node-express',
    title: 'Building Scalable REST APIs with Node.js and Express',
    image: '/images/blog/post-1.png',
    readTime: 5,
    author: {
      name: 'Harsh Patel',
      description: 'MERN Stack Developer',
      image: '/images/profile.jpg',
    },
    content: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b1s1',
            text:
              'REST APIs are the backbone of modern web applications. When building scalable applications with Node.js and Express, it is important to structure APIs in a way that is maintainable, secure, and performant. A good API design ensures that your application can grow without becoming difficult to manage.',
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b2s1',
            text:
              'One important practice is organizing routes and controllers properly. Keeping business logic separated from routing logic makes the codebase easier to maintain. Middleware also plays a critical role in handling authentication, validation, and logging before requests reach the core application logic.',
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b3s1',
            text:
              'Error handling and proper response structure are equally important. A well-structured API should return consistent responses, meaningful error messages, and appropriate HTTP status codes. By implementing these best practices, developers can build APIs that are reliable, scalable, and easy for frontend applications to integrate with.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ] as any,
    category: { title: 'Development', slug: 'development' },
    relatedPosts: [],
    metaTitle: 'Building Scalable REST APIs with Node.js and Express',
    metaDescription:
      'Learn how to build scalable REST APIs using Node.js and Express with best practices for architecture, middleware, and error handling.',
    metaKeywords: 'nodejs api, express js tutorial, rest api development',
  },

  {
    _id: 'post-2',
    slug: 'deploying-mern-app-vps-nginx',
    title: 'Deploying a MERN Stack Application on VPS with Nginx',
    image: '/images/blog/post-2.png',
    readTime: 6,
    author: {
      name: 'Harsh Patel',
      description: 'MERN Stack Developer',
      image: '/images/profile.jpg',
    },
    content: [
      {
        _type: 'block',
        _key: 'c1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c1s1',
            text:
              'Deploying a MERN stack application to a production server is an important step in delivering a real-world product. A typical production setup includes a VPS server, Node.js for running the backend, and Nginx as a reverse proxy to handle incoming traffic efficiently.',
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'c2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c2s1',
            text:
              'The deployment process usually starts with setting up a Linux VPS, installing Node.js, MongoDB, and a process manager like PM2. The backend server is then configured to run continuously while handling API requests. On the frontend side, React or Next.js applications are built and served through the server environment.',
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'c3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c3s1',
            text:
              'Nginx acts as a reverse proxy and allows developers to manage domains, SSL certificates, and traffic routing efficiently. By configuring Nginx correctly, applications become more secure and performant. This setup is commonly used in production environments for scalable MERN stack deployments.',
            marks: [],
          },
        ],
        markDefs: [],
      },
    ] as any,
    category: { title: 'Deployment', slug: 'deployment' },
    relatedPosts: [],
    metaTitle: 'Deploying a MERN Stack Application on VPS with Nginx',
    metaDescription:
      'Learn how to deploy a MERN stack application on a VPS server using Node.js, PM2, and Nginx for production environments.',
    metaKeywords: 'mern deployment, nodejs vps deployment, nginx reverse proxy, deploy react node app',
  },
]