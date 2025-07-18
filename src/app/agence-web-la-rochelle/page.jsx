import NextImage from "next/image";
import Link from "next/link";
import { gabarito } from "@/app/fonts";


export default function AgenceWebLaRochelle() {
  return (
    <div className="flex h-full w-full gap-10">
      <h1 className="sr-only">Notre accompagnement</h1>
      <section className="w-2/3">
        <h2 className="h2-offer text-2xl font-bold mb-6 text-center">Nos services</h2>
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-4xl p-7 flex gap-5 items-center">
            <NextImage 
            src="/about_logos/conception_logo.svg" 
            alt="Conception de sites sur mesure" 
            width={100} 
            height={100}
            />
            <div className="flex flex-col gap-2">
              <h3 className={`${gabarito.className} text-lg font-semibold`}>Conception de sites sur mesure</h3>
              <p className="text-sm">Votre vision est notre priorité. Ensemble, nous échangeons et ajustons chaque détail des maquettes visuelles, garantissant ainsi un projet de site web totalement unique et à votre image. Oubliez les templates, ici le sur-mesure est notre signature.</p>
            </div>
          </div>
          <div className="bg-white rounded-4xl p-7 flex gap-5 items-center">
            <NextImage 
            src="/about_logos/conception_logo.svg" 
            alt="Identité visuelle" 
            width={100} 
            height={100}
            />
            <div className="flex flex-col gap-2">
              <h3 className={`${gabarito.className} text-lg font-semibold`}>Identité visuelle</h3>
              <p className="text-sm">À partir de vos besoins et directives établis dans le cahier des charges, nous concevons un univers graphique distinctif et mémorable qui reflète l'essence même de votre marque. Si vous possédez déjà votre logo, nous assurons sa déclinaison harmonieuse sur l'ensemble de votre projet.</p>
            </div>
          </div>
          <div className="bg-white rounded-4xl p-7 flex gap-5 items-center">
            <NextImage 
            src="/about_logos/conception_logo.svg" 
            alt="Marketing numérique" 
            width={100} 
            height={100} 
            />
            <div className="flex flex-col gap-2">
              <h3 className={`${gabarito.className} text-lg font-semibold`}>Marketing numérique</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Pour une présence digitale complète et performante, nous vous offrons un accompagnement stratégique sur mesure, incluant selon vos besoins :</li>
                <li>Référencement (SEO et SEA) : Optimisation pour les moteurs de recherche et campagnes publicitaires ciblées.</li>
                <li>Community Management : Animation et engagement de vos communautés en ligne.</li>
                <li>Newsletter : Création de campagnes email pour fidéliser et informer.</li>
                <li>Création de contenu : Production de textes, visuels et vidéos pertinents pour votre audience. En savoir plus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-1/3 flex flex-col gap-5 h-full border border-white rounded-4xl p-7">
        <h2 className="h2-offer text-2xl font-bold">Nos engagements</h2>
        <ul className="flex flex-col h-full justify-around text-white text-[15px] list-disc list-inside">
          <li>Mise en place d'un espace d'administration intuitif et sécurisé (CMS) pour une gestion facile de vos contenus et de vos besoins de modifications.</li>
          <li>Hébergement sur serveurs ultra-sécurisés 24h/24, 7j/7, avec sauvegardes quotidiennes de votre site web et de sa base de données</li>
          <li>Mises à jour techniques régulières et maintenance entièrement prises en charge, garantissant la performance et la sécurité de votre projet.</li>
          <li>Formation complète et adaptée à l'utilisation de votre nouveau site, ainsi qu'un accompagnement à la mise à jour de vos contenus</li>
          <li>Devis et consultation initiale offerts : Discutons de votre projet pour définir la stratégie la plus adaptée à vos ambitions.</li>
        </ul>
      </section>
    </div>
  );
}