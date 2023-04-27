import Image from "next/image"
import Link from "next/link"
import {CategoryLink, Time} from "@/UI"

// https://www.svgrepo.com/svg/501501/clock
import time from '../../public/time.svg'
// https://www.svgrepo.com/svg/501513/comment
import comment from '../../public/comment.svg'

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
                    <div className="meta text-xs font-light flex justify-start items-center">
                        <div className="date flex justify-start items-center mr-6">
                            <Image className="mr-2" src={time} alt="time" width={18} height={18} />
                            <Time date={post.createdAt} />
                        </div>
                        <div className="comment-number flex justify-start items-center">
                            <Image className="mr-2" src={comment} alt="Comments" width={18} height={18} />
                            <p>{post.comments ? post.comments.length : 0}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}