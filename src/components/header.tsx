import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';

  

import Image from "next/image";
import Link from "next/link";
import Links from "./links";

export default function Header() {
    return(
        <section className="flex justify-between">
            <div className="header h-32 w-full bg-primary pt-2 lg:pt-5 pl-6 lg:pl-14">
                <Image src={"logo.svg"} alt="" height={30} width={100}/>
            </div>
            <div className="menu-icon absolute right-6 pt-2 lg:pt-5">
            <Sheet>
  <SheetTrigger>
    <button className=""><Menu /></button>
    </SheetTrigger>
  <SheetContent className="bg-white">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="flex flex-col uppercase items-center justify-center space-y-10 pt-8 text-[20px] text-primary hover:text-accent">
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="menu">Menu</Link>
            <Link href="contact">Contact</Link>

        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            </div>
        </section>
    )
}
