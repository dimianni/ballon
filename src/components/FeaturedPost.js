import Image from "next/image"
import Link from "next/link"
import CategoryLink from "@/UI/CategoryLink"

export default function FeaturedPost({post}){
    return (
        <article className="w-full">
            <div className="w-full wrapper relative">
                <div className="relative w-full img">
                    <div className="hero-img-shader"></div>
                    <Link href={`/post/${post.slug}`} className="block w-auto h-screen md:w-full md:h-auto">
                        <Image className="hero-img h-full w-auto md:w-full md:h-auto object-cover" src={post.featuredImage.url} alt={post.title} width={1200} height={400} />
                    </Link>
                </div>
                <div className="absolute z-10 bottom-0 left-0 content px-4 py-8 flex flex-col gap-4">
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
                    <Link className="text-xl md:text-4xl" href={`/post/${post.slug}`}>{post.title}</Link>
                </div>
            </div>
        </article>
    )
}