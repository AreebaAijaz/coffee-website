import Image from "next/image"

  const Badge = ({containerStyles}:any)=>{
    return(
        <div className={`relative ${containerStyles}`}>
            <Image src="/badge.svg" alt="" width={100} height={100}/>
        </div>
    )
}

export default Badge;