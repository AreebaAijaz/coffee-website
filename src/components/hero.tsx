
import Separator from "./separator";

// }
export default function HeroBanner() {
    return (
        <section className="h-[10vh] sm:justify-center xl:h-screen relative text-white pb-14">
            <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"></div>
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/herovideo.mp4" type="video/mp4" /> {/* Use leading slash */}
            </video>

            <div 
            className="container h-full flex flex-col items-center justify-center z-30 relative">
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 h-full">
                    <h1 className="h1 text-white">
                        <span className="text-accent">Coffee</span> & Joy
                    </h1>
                    <Separator />
                    <p className="lead font-light max-w-[300px] md:max-w-[400px] mb-4">
                    Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
                    </p>
                    <button className="btn">Our Menu</button>
                </div>
            </div>

        </section>
    );
}

