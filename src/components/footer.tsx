import Image from "next/image";
import Links from "./links";

export default function Footer() {
    return (
        <main className="h-[350px] lg:h-[400px] bg-primary flex flex-col items-center lg:py-32 pt-8 lg:pt-20">
            <div className="">
                <Image src="/logo.svg" alt="Logo" height={150} width={150} />
            </div>
            <div className="py-10">
                <Links />
            </div>
            <div>
                <p className="lg:pt-10 text-sm">&copy; Copyright 2024- Zenbrew. All rights reserved.</p>
            </div>
        </main>
    );
}
