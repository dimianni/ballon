import Image from "next/image"
import Link from "next/link"
import CategoryLink from "@/UI/CategoryLink"

export default function FeaturedPost({post}){
    return (
        <article className="w-full">
            <div className="w-full wrapper relative">
                <div className="w-full img">
                    <Link href={`/post/${post.slug}`} className="w-full">
                        <Image className="w-full" src={post.featuredImage.url} alt={post.title} width={300} height={100} />
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 bg-grey-500 content px-4 py-8 flex flex-col gap-4">
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
                    <Link className="text-4xl" href={`/post/${post.slug}`}>{post.title}</Link>
                </div>
            </div>
        </article>
    )
}