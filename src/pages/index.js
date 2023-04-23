import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '@/components'
import { getPosts } from '@/services'

export default function Home({ posts }) {

  console.log(posts);
  return (
    <main>
      {posts?.map(post => <PostCard post={post.node} key={post.node.title} />)}
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}