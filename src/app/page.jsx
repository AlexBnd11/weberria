import HeroSquare from "./squares/hero-square";
import OfferSquare from "./squares/offer-square";
import ProjectsSquare from "./squares/projects-square"; 
import AboutSquare from "./squares/about-square";
import Marquee from "./squares/marquee";
import Image from "next/image";
import ClientHomeGrid from "./components/ClientHomeGrid";

export default function Home() {
  return (
    <ClientHomeGrid>
      <HeroSquare />
      <OfferSquare />
      <ProjectsSquare />
      <Image 
        src="/weberria_logo_w_blanc.png" 
        alt="logo" 
        width={80} 
        height={80} 
        className="row-span-1 col-span-3 self-center justify-self-center"
      />
      <AboutSquare />
      <Marquee />
    </ClientHomeGrid>
  );
}
