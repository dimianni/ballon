import { PostCard } from '@/components'
import { getCategoryPosts } from '@/services';

export default function ByCategory({ posts }){
    return (
        <main className='container py-12'>
            <section className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="posts lg:col-span-12 col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {posts?.map(post => <PostCard post={post.node} key={post.node.title} />)}
                </div>
            </section>
        </main>
    )
}

export async function getServerSideProps({params}) {
    const posts = (await getCategoryPosts(params.slug)) || [];

    return {
        props: { posts }
    }
}