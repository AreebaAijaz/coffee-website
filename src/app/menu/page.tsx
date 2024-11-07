import Separator from "../../components/separator";
import Image from "next/image";

const menu = [
  {
    imgSrc: "/menu/coffee-1.png",
    name: "Espresso",
    price: 3.5,
    description: "Rich and bold coffee shot",
  },
  {
    imgSrc: "/menu/coffee-2.png",
    name: "Latte",
    price: 4.0,
    description: "Creamy espresso with steamed milk",
  },
  {
    imgSrc: "/menu/coffee-3.png",
    name: "Cappuccino",
    price: 4.5,
    description: "Espresso with frothy milk foam",
  },
  {
    imgSrc: "/menu/coffee-4.png",
    name: "Americano",
    price: 3.0,
    description: "Espresso diluted with hot water",
  },
  {
    imgSrc: "/menu/coffee-5.png",
    name: "Mocha",
    price: 4.75,
    description: "Chocolate-infused espresso delight",
  },
  {
    imgSrc: "/menu/coffee-3.png",
    name: "Flat White",
    price: 4.25,
    description: "Silky espresso with microfoam",
  },
  {
    imgSrc: "/menu/coffee-1.png",
    name: "Cold Brew",
    price: 3.75,
    description: "Smooth and refreshing iced coffee",
  },
  {
    imgSrc: "/menu/coffee-5.png",
    name: "Affogato",
    price: 5.0,
    description: "Ice cream topped with espresso",
  },
  {
    imgSrc: "/menu/coffee-4.png",
    name: "Macchiato",
    price: 3.25,
    description: "Espresso with a dash of milk",
  },
  {
    imgSrc: "/menu/coffee-2.png",
    name: "Irish Coffee",
    price: 5.5,
    description: "Classic coffee with Irish cream",
  },
];

export default function Menu() {
  return (
    <section className="container mx-auto text-center">
    <main className="h-full mb-28">
        <h2 className="h2">Our Menu</h2>
        <div className=" flex justify-center">
          <Separator bg="accent" />
        </div>
        <p className="max-w-[300px] md:max-w-[450px] mx-auto">
          &quot;Discover our handpicked selection of coffee, crafted to perfection
          for every taste. Indulge in rich flavors and cozy moments with every
          cup.&quot;
        </p>
      <div className="my-4 mx-4 lg:mx-20 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 md:pl-10 lg:pl-0 md:gap-y-4 lg:gap-y-8">
        {menu.map((item, index) => {
          return (
            <main key={index}>
              <div className="flex gap-x-3">
                <div className="h-10 w-10 md:h-16 md:w-16 relative">
                  <Image
                    src={item.imgSrc}
                    fill
                    alt="coffee"
                    priority
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between gap-4 items-baseline">
                    <p className="uppercase  font-primary font-semibold text-primary text-[22px]">
                      {item.name}
                    </p>
                    <div className="flex-1 border-b border-dashed border-primary"></div>
                    <p className="leading-relaxed font-semibold font-primary text-[30px] text-primary">
                      {item.price}
                    </p>
                  </div>
                  <p className="text-xs lg:text-sm">{item.description}</p>
                </div>
              </div>
            </main>
          );
        })}
      </div>
      <div className="flex justify-center mb-6">
        <button className="btn">View more</button>
      </div>
    </main>
    </section>
  );
}



