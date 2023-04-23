import moment from "moment"
import Image from "next/image"
import Link from "next/link"

import time from '../../public/time.svg'

export default function PostCard({ post }) {
    return (
        <article className="w-full bg-grey-500 rounded overflow-hidden">
            <div className="w-full wrapper">
                <div className="w-full img">
                    <a href="/" className="w-full">
                        <Image className="w-full" src={post.featuredImage.url} alt={post.title} width={300} height={100} />
                    </a>
                </div>
                <div className="content p-4 flex flex-col gap-4">
                    <div className="tag-list">
                        <ul className="flex items-center flex-wrap">
                            {
                                post.categories.map(tag => {
                                    return (
                                        <li key={tag.slug} className="border-solid border border-white rounded-sm mr-2">
                                            <Link className="py-1 px-2 text-sm" href={`/category/${tag.slug}`}>{tag.name}</Link>
                                        </li> 
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link className="text-base" href={`/post/${post.slug}`}>{post.title}</Link>
                    <div className="meta">
                        <time className="date flex justify-start items-center">
                            <Image src={time} alt="time" width={18} height={18} />
                            <span className="ml-1 text-sm font-light">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                        </time>
                        <div className="comment-number">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}