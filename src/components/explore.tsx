import Image from "next/image"

export default function Explore(){
    return(
        <main className="flex flex-col lg:flex-row gap-x-10 justify-center lg:mx-auto items-center h-[1400px] lg:h-[700px] ">
            <div className="div1 flex flex-col h-[450px] w-[400px] space-y-6">
                <div className="cnt1 flex flex-col items-center lg:items-end space-y-0">
                    <Image src={"/explore/coffee/coffee-1.svg"} alt="coffee" height={40} width={40} className="m-4 md:mr-4"/>
                    <h1 className="text-2xl font-bold m-3">Rich Espresso Blends</h1>
                    <p className="p-4 lg:pr-4 text-xs max-w-[320px] lg:text-end">Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.</p>
                </div>
                <div className="cnt2 flex flex-col items-center lg:items-end  space-y-0">
                <Image src={"/explore/coffee/coffee-2.svg"} alt="coffee" height={40} width={40} className="m-4 md:mr-4"/>
                    <h1 className="text-2xl font-bold m-3">Classic Drip Coffee</h1>
                    <p className="p-4 lg:pr-4 text-xs max-w-[320px] lg:text-end">Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.</p>
                </div>
            </div>

            <div className="div2 m-5 mb-16">
                <Image src="/explore/cup.png" alt="coffee" height={220} width={220} />
            </div>

            <div className="div3 flex flex-col h-[450px] w-[400px] space-y-6"> 
                <div className="cnt3 flex flex-col items-center lg:items-start space-y-0">
                <Image src={"/explore/coffee/coffee-3.svg"} alt="coffee" height={40} width={40} className="m-4 md:ml-4"/>
                <h1 className="text-2xl font-bold m-3">Flavorful Latte Varieties</h1>
                <p className="p-4 lg:pl-4 text-xs max-w-[320px]">Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.</p>
                </div>
                <div className="cnt4 flex flex-col items-center lg:items-start space-y-0">
                <Image src={"/explore/coffee/coffee-4.svg"} alt="coffee" height={40} width={40} className="m-4 md:ml-4"/>
                    <h1 className="text-2xl font-bold m-3">Smooth Cold Brews</h1>
                    <p className="p-4 lg:pl-4 text-xs max-w-[320px]">Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.</p>
                </div>
            </div>
        </main>
    )
}