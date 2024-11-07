import Image from "next/image";

export default function Separator({bg="white"}:any){
    const imgSrc = 
     bg === "accent"?
     "/separator-accent.svg" :
     "/separator-white.svg";

    return(
        <div className="relative w-[168px] h-[26px]">
            <Image src={imgSrc} fill alt="bg" />
        </div>
    )
}