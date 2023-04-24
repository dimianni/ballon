import { getPostDetails, getPosts } from "@/services"
import PostDetails from "@/components/PostDetails"
import { PostWidget } from "@/components"


export default function Post({ post }) {
    return (
        <main className='container py-12'>
            <section className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="posts lg:col-span-8 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <PostDetails post={post} />
                </div>
                <aside className="side-menu lg:col-span-4 col-span-1">
                    <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                </aside>
            </section>
        </main>
    )
}

export async function getServerSideProps(pageInfo) {

    const data = await getPostDetails(pageInfo.params.slug)
    return {
        props: {
            post: data
        }
    }
}

// If using getStaticProps
// define a list of paths to be statically generated
// export async function getStaticPaths() {
//     const posts = await getPosts()

//     return {
//         // [ { params: { slug: 'xavi-barca' } }, ...]
//         paths: posts.map(post => {
//             const slug = post.node.slug
//             return {
//                 // slug --> "slug: 'juventus-points-back'"
//                 params: { slug }
//             }
//         }),
//         fallback: true
//     }
// }