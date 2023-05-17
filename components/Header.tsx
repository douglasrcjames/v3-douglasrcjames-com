'use client';
 
import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
//   const [burgerExpanded, setBurgerExpanded] = useState(false);
 
    const pathname = usePathname();
    const root = "/";

    const navLinks = [
        {
            name: "Home",
            href: root,
        },
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

    return (
        <header>
            <nav className="text-center my-5">
                <div>
                    <Image
                        src="/logo512.png"
                        width="100"
                        height="100"
                        alt="Douglas RC James Logo"
                        className="mx-auto"
                    />
                    <h1>LOGO</h1>
                </div>
                <div className="my-2">
                    {
                        navLinks.map((link, l) => {
                            const activeClassName = (
                                (pathname === link.href) || (pathname.startsWith(link.href) && link.href !== root)
                            ) ? 
                            "mx-5 text-blue-500 font-bold"
                            : 
                            "mx-5";

                            return (
                                <span key={l} className={activeClassName}>
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
                