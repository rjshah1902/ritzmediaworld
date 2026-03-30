import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-black text-white p-4 flex gap-6">
            <Link href="/home">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact-us">Contact</Link>
        </div>
    );
}
