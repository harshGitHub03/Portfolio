import PostContent from './post-content';
import { type Post } from '@/types/documents/post';
import Container from '@/components/global/container';
import PostTableOfContents from './post-table-of-contents';
import PostHeader from '@/components/pages/blog/post/post-header';
import PostAuthor from '@/components/pages/blog/post/post-author';
import RelatedPosts from '@/components/pages/blog/post/related-posts';
import ScrollProgress from '@/components/shared/scroll-progress';

export default function Post({ post }: { post: Post }) {

  const { title, author, content, image, category, readTime, relatedPosts } = post

  return (
    <div className='z-[200] relative h-full bg-[#F6F6F1]'>
      <ScrollProgress />
      <Container>
        <div className='flex flex-col xl:flex-row gap-10 relative'>
          <div className='mt-10 flex-[2.2] min-w-0'>
            <PostHeader
              image={image}
              category={category.title}
              readTime={readTime}
              title={title}
              content={post.content}
            />
            <PostContent
              content={content}
            />
          </div>
          <aside className='xl:w-72 xl:shrink-0 xl:sticky xl:self-start top-10 xl:mt-12 max-h-[calc(100vh-2.5rem)] xl:border-l flex flex-col xl:pl-8 xl:pt-4 overflow-y-auto'>
            <PostAuthor
              name={author.name}
              description={author.description}
              image={author.image}
            />
            {/* <div className='hidden xl:block mt-6 border-t pt-4'>
              <PostTableOfContents content={post.content} />
            </div> */}
          </aside>
        </div>
      </Container>
      <RelatedPosts
        posts={relatedPosts}
      />
    </div>
  )
}