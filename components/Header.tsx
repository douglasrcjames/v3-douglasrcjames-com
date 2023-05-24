'use client';
 
import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '../app/styles/header.css'

export default function Header() {
//   const [burgerExpanded, setBurgerExpanded] = useState(false);
 
    const pathname = usePathname();
    const root = "/";

    const navLinks = [
        {
            name: "Work",
            href: `${root}work`,
        },
        {
            name: "Music",
            href: `${root}music`,
        },
        {
            name: "Dashboard",
            href: `${root}dashboard`,
        },
    ];
    console.log("pathname: " + pathname);

    return (
        <header>
            <nav>
                    {/* <Image
                        src="/logo512.png"
                        width="100"
                        height="100"
                        alt="Douglas RC James Logo"
                    /> */}
                    
                <Link href="/" className={pathname === "/" ? "nav-link-active" : "nav-link"}>
                    Douglas R.C. James
                </Link>
                <div className="float-right text-right">
                    {
                        navLinks.map((link, l) => {
                            let linkClass = "";
                            if ((pathname === link.href) || (pathname.startsWith(link.href) && link.href !== root)) {
                                linkClass = "nav-link mx-2";
                            } else {
                                linkClass = "nav-link-active mx-2";
                            }

                            return (
                                <span key={l} className={linkClass}>
                                    <Link href={link.href}>{link.name}</Link>
                                </span>
                            )
                        })
                    }
                </div>
            </nav>
        </header>
    );
}
                