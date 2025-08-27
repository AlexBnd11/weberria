import NextImage from "next/image";
import Link from "next/link";
import { gabarito } from "@/app/fonts";
import NosEngagements from "./components/NosEngagements";
import NosServices from "./components/NosServices";
import NosTarifs from "./components/NosTarifs";

export const metadata = {
  title: "Accompagnement Web Sur-Mesure | Weberria Agence La Rochelle",
  description: "Weberria accompagne votre entreprise dans sa transformation digitale. Services web personnalisés : conception, identité visuelle, marketing digital. Agence La Rochelle.",
  openGraph: {
    title: "Accompagnement Web Sur-Mesure | Weberria Agence La Rochelle",
    description: "Weberria accompagne votre entreprise dans sa transformation digitale. Services web personnalisés.",
  },
};

export default function AgenceWebLaRochelle() {
  return (
    <>
    <div className="flex gap-10 items-stretch">
      <h1 className="sr-only">Notre accompagnement</h1>
      <div className="flex gap-10 max-lg:flex-col">
        <NosServices />
        <NosEngagements />
      </div>
    </div>
        <NosTarifs />
    </>
  );
}