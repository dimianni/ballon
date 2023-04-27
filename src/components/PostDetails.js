import CategoryLink from "@/UI/CategoryLink";
import { Time } from "@/UI";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

export default function PostDetails({ post }) {

    const sanitizedHtml = DOMPurify.sanitize(post.content.html)

    return (
        <article>
            <div className="header">
                <h1 className="font-bold text-4xl mb-8">{post.title}</h1>
                <div className="meta flex items-center gap-5 flex-wrap mb-7 font-light text-xs">
                    <div className="authors">
                        {
                            post.authors.map(author => {
                                return (
                                    <div key={author.id} className="flex justify-center items-center">
                                        <Image src={author.photo.url} alt={author.name} width={30} height={30} className="rounded-full" />
                                        <p className="ml-2">{author.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="separator">
                        |
                    </span>
                    <Time date={post.publishedAt} />
                </div>
            </div>
            <div className="content rounded bg-grey-500 overflow-hidden">
                <div className="poster">
                    <Image src={post.featuredImage.url} alt={post.title} width={652} height={367} style={{ width: "100%" }} />
                </div>
                <div className="body p-4">
                    <div className="taglist my-5">
                        <ul className="flex items-center flex-wrap">
                            {
                                post.categories.map(category => {
                                    return (
                                        <CategoryLink key={category.name} slug={category.slug} name={category.name} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="post-text" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
                </div>
            </div>
        </article>
    )
}