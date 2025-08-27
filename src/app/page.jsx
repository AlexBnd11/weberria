import HeroSquare from "./squares/hero-square";
import OfferSquare from "./squares/offer-square";
import ProjectsSquare from "./squares/projects-square"; 
import AboutSquare from "./squares/about-square";
import Marquee from "./squares/marquee";
import Image from "next/image";
import ClientHomeGrid from "./components/ClientHomeGrid";

export const metadata = {
  title: "Agence Web à La Rochelle | Weberria - Création Sites Web Sur-Mesure",
  description: "Weberria, agence web à La Rochelle, crée des sites web performants et sur-mesure. Développement web, design, référencement et marketing digital pour votre entreprise.",
  openGraph: {
    title: "Agence Web à La Rochelle | Weberria - Création Sites Web Sur-Mesure",
    description: "Weberria, agence web à La Rochelle, crée des sites web performants et sur-mesure.",
  },
};

export default function Home() {
  return (
    <ClientHomeGrid>
      <HeroSquare />
      <OfferSquare />
      <ProjectsSquare />
      <Image 
        src="/weberria_logo_w_blanc.png" 
        alt="Logo Weberria - Agence web La Rochelle" 
        width={80} 
        height={80} 
        className="row-span-1 col-span-3 self-center justify-self-center"
        unoptimized
      />
      <AboutSquare />
      <Marquee />
    </ClientHomeGrid>
  );
}
