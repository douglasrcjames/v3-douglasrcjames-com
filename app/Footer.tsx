'use client';

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="sticky top-[100vh] text-center my-5">
            <Link href="/legal/terms">Terms</Link>
            &nbsp;|&nbsp;
            <Link href="/legal/privacy">Privacy</Link>
        </footer>
    )
}