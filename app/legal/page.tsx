import Link from "next/link";

export default function Legal() {
  return (
    <div>
        <h1>LEGAL</h1>
        <p>Legal stuff goes here.</p>
        <ul>
            <li><Link href="/legal/terms/">Terms</Link></li>
            <li><Link href="/legal/privacy/">Privacy</Link></li>
        </ul>
    </div>
  )
}
