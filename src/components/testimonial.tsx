import { IoMdQuote } from "react-icons/io";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="container mx-auto mb-8 h-full flex flex-col justify-center items-center gap-y-3 text-primary">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
          src="/women.jpg"
          alt="girl"
          layout="fill"
          className="object-cover"
        />
      </div>

      <IoMdQuote className="text-4xl" />
      <p className="max-w-[250px] md:max-w-[350px] text-center rounded-full">
        The coffee here is absolutely amazing! The baristas are skilled and the
        atmosphere is perfect for both work and relaxation.
      </p>
      <p className="font-bold text-xl">Alice Johnson</p>
      <p className="font-thin text-sm">Graphic Designer</p>
    </section>
  );
}
