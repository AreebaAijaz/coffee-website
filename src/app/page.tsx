
"use client";
import Explore from "../components/explore";
import HeroBanner from "../components/hero";
import Menu from "./menu/page";
import Testimonials from "../components/testimonial";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Explore />
      <Menu />
      <Testimonials />
    </div>
  );
}
