import { getPostDetails } from "@/services"
import { PostWidget, PostDetails, Comments, CommentsForm } from "@/components"
import Head from "next/head";

export default function Post({ post }) {
    console.log(post);
    return (
        <main className='container py-12'>
            <Head>
                <title>TFB | { post.title }</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`TFB | ${ post.title }`} />
                <meta property="og:site_name" content="TFB | Football News" />
                <meta property="og:image" content={post.featuredImage.url} />
                <meta property="og:description" content={post.excerpt} />

                {/* To be set */}
                <meta name="keywords" content="" />

            </Head>
            <section className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="posts lg:col-span-8 col-span-1 grid grid-cols-1 gap-8">
                    <PostDetails post={post} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
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