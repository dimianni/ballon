import Image from "next/image"
import Link from "next/link"
import CategoryLink from "@/UI/CategoryLink"
import Time from "@/UI/Time"

import time from '../../public/time.svg'



export default function PostCard({ post }) {
    return (
        <article className="w-full bg-grey-500 rounded overflow-hidden">
            <div className="w-full wrapper">
                <div className="w-full img">
                    <Link href={`/post/${post.slug}`} className="w-full">
                        <Image className="w-full" src={post.featuredImage.url} alt={post.title} width={300} height={100} />
                    </Link>
                </div>
                <div className="content p-4 flex flex-col gap-4">
                    <div className="tag-list">
                        <ul className="flex items-center flex-wrap">
                            {
                                post.categories.map(tag => {
                                    return (
                                        <CategoryLink slug={tag.slug} name={tag.name} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link className="text-base" href={`/post/${post.slug}`}>{post.title}</Link>
                    <div className="meta">
                        <div className="date flex justify-start items-center">
                            <Image src={time} alt="time" width={18} height={18} />
                            <Time date={post.createdAt} />
                        </div>
                        <div className="comment-number">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}