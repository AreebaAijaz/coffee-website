import Link from "next/link";

export default function Links() {
    return (
        <div>
           <ul className="uppercase flex flex-col md:flex-row gap-x-16 gap-y-4 text-gray-200 hover:text-accent">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
            </ul>
        </div>
    );
}
