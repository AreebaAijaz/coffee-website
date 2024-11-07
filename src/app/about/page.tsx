import Badge from "../../components/badge";
import Image from "next/image";
import Header from "@/components/header";

const data = [
    {
        imgSrc: "/about/photo-1.jpg",
        title: "Our Journey",
        description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
    },
    {
        imgSrc: "/about/photo-2.jpg",
        title: "Our promise",
        description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
    },
    {
        imgSrc: "/about/photo-3.jpg",
        title: "Our Team",
        description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
    },
]

export default function About() {
    return (
        <section className="overflow-hidden bg-primary">
                        <div className="h-24 bg-primary">                 
                   <Header />
            </div>

                {data.map((item, index) => {
                    return (
                               <div key={index} className="flex gap-28 relative px-16">
                                <div className="flex-1 flex flex-col justify-center items-center">
                                    <Badge />
                                    <h2 className="h2 text-white text-4xl">{item.title}</h2>
                                    <p className="w-[280px] text-center lg:max-w-[500px] mb-16 px-8 lg:px-0 text-accent mt-10">{item.description}</p>
                                    <div className="btn flex justify-center items-center text-primary mb-32">See more</div>
                                </div>
                                <div className="flex-1 h-[70vh] w-full relative hidden lg:flex">
                                    <Image
                                        src={item.imgSrc}
                                        className="object-cover"
                                        quality={100}
                                        priority
                                        fill
                                        alt="coffee"
                                    />
                                </div>
                            </div>
                    )
                })}
        </section>
    )
}
