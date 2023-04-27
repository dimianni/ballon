import Link from "next/link"
import { useEffect, useState } from "react"
import { Time } from "@/UI"

export default function PostWidget({ slug, categories }) {

    const [relatedPosts, setRelatedPosts] = useState([])

    const getPostsComments = async () => {
        let response = await fetch('api/postscomments')
        let { data } = await response.json()

        // Sorting posts by the number of comments (DESC)
        data.sort((a, b) => b.comments.length - a.comments.length)

        // Getting first five elements of the array
        let topFive = data.slice(0, 5)

        setRelatedPosts(topFive)
    }

    const getSimilarPosts = async () => {
        let response = await fetch('../api/similarposts', {
            method: "POST",
            body: JSON.stringify({ slug: slug, categories: categories }),
            headers: { "Content-Type": "application/json" }
        })
        let { data } = await response.json()
        setRelatedPosts(data)
    }

    useEffect(() => {
        if (!slug) {
            getPostsComments()
        } else {
            getSimilarPosts()
        }
    }, [slug])

    return (
        <div className="bg-grey-500 p-4 rounded">
            <h2 className="text-2xl font-semibold">{!slug ? "Popular News" : "Similar News"}</h2>
            <div>
                <ul>
                    {
                        relatedPosts.map(post => {
                            return (
                                <li key={post.id} className="border-b border-grey-900 py-4 last:border-none">
                                    <article>
                                        <Link href={`/post/${post.slug}`}>
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