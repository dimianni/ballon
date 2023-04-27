import { PostCard, PostWidget, Hero } from '@/components'
import { getPosts } from '@/services'
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <main>
      <Head>
        <title>TFB | Football News</title> 
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The latest football news, live scores, results, rumours, transfers, fixtures, tables and player profiles from around the world, including UEFA Champions League." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TFB | Football News" />
        <meta property="og:site_name" content="TFB | Football News" />
        <meta property="og:image" content="/thefootballblog.png" />
        <meta property="og:description"
          content="The latest football news, live scores, results, rumours, transfers, fixtures, tables and player profiles from around the world, including UEFA Champions League." />
        
        {/* To be set */}
        <meta name="keywords" content="" />

      </Head>
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