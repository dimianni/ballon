import Image from "next/image";
import Link from "next/link";

import logo from '../../public/tfb_logo.svg'

export default function Header(){
    return (
        <header className="sticky top-0 left-0 right-0 bottom-0 z-50 bg-black py-3 border-solid border-b-4 border-pink-500">
            <div className="container">
                <nav className="w-full flex justify-center items-center">
                    <Link href="/">
                        <Image src={logo} alt="TheFootballBlog logo" width={80} height={20} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}