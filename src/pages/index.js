import { PostCard, PostWidget, Categories } from '@/components'
import Hero from '@/components/Hero';
import { getPosts } from '@/services'

export default function Home({ posts }) {
  return (
    <main>
      <Hero />
      <div className="container">
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="posts lg:col-span-8 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts?.map(post => <PostCard post={post.node} key={post.node.title} />)}
          </div>
          <aside className="side-menu lg:col-span-4 col-span-1">
            <PostWidget />
          </aside>
        </section>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}