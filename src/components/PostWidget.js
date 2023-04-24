import Link from "next/link"
import { useEffect, useState } from "react"
import moment from "moment"


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
        <div>
            <h2>Latest News</h2>
            <div>
                <ul>
                    {
                        relatedPosts.map(post => {
                            return (
                                <li key={post.id}>
                                    <article>
                                        <Link href='/'>
                                            <time>
                                                <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                                            </time>
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