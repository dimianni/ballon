import Link from "next/link";

export default function CategoryLink({slug, name}){
    return (
        <li key={slug} className="border-solid border border-white rounded-sm mr-2">
            <Link className="py-1 px-2 text-sm" href={`/category/${slug}`}>{name}</Link>
        </li> 
    )
}