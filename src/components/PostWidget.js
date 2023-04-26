import Link from "next/link"
import { useEffect, useState } from "react"
import Time from "@/UI/Time"


export default function PostWidget({ slug, categories }) {

    const [relatedPosts, setRelatedPosts] = useState([])

    // PostWidget is a component (not a page), so cannot use getStaticProps
    const getRecentPosts = async () => {
        let response = await fetch('api/recentposts')
        let { data } = await response.json()
        setRelatedPosts(data)
    }

    const getSimilarPosts = async () => {
        let response = await fetch('../api/similarposts', {
            method: "POST",
            body: JSON.stringify({slug: slug, categories: categories}),
            headers: { "Content-Type": "application/json" }
        })
        let {data} = await response.json()
        // console.log(data);
        setRelatedPosts(data)
    }

    useEffect(() => {
        if(!slug){
            getRecentPosts()
        } else {
            getSimilarPosts()
        }
    }, [slug])

    return (
        <div className="bg-grey-500 p-4 rounded">
            <h2 className="text-2xl font-semibold">{!slug ? "Latest News" : "Similar News"}</h2>
            <div>
                <ul>
                    {
                        relatedPosts.map(post => {
                            return (
                                <li key={post.id} className="border-b border-grey-900 py-4 last:border-none">
                                    <article>
                                        <Link href='/'>
                                            <Time date={post.createdAt} />
                                            <h3>{post.title}</h3>
                                        </Link>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}