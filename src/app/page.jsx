import HeroSquare from "./hero-square";
import OfferSquare from "./offer-square";
import ProjectsSquare from "./projects-square";

export default function Home() {
  return (
    <div className="grid grid-cols-9 grid-rows-5 h-full w-full gap-10">
      <HeroSquare />
      <OfferSquare />
      <ProjectsSquare />
    </div>
  );
}
