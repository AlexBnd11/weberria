import NextImage from "next/image";
import { gabarito } from "@/app/fonts";

export default function NosServices() {
    return (
        <section className="w-2/3 flex flex-col gap-5 max-lg:w-full">
        <h2 className="h2-offer text-2xl font-bold mb-6 text-center sr-only">Nos services</h2>
        <div className="flex flex-col gap-5 max-lg:gap-8">
          <div className="bg-white rounded-4xl p-5 flex gap-5 items-center max-lg:flex-col max-lg:p-8">
            <NextImage 
            src="/about_logos/conception_logo.svg" 
            alt="Conception de sites sur mesure" 
            width={100} 
            height={100}
            className="p-3"
            />
            <div className="flex flex-col gap-3">
              <h3 className={`${gabarito.className} text-xl font-semibold`}>Conception de sites sur mesure</h3>
              <p className="text-sm">Votre vision est notre priorité. Ensemble, nous échangeons et ajustons chaque détail des maquettes visuelles, garantissant ainsi un projet de site web totalement unique et à votre image. Oubliez les templates, ici le sur-mesure est notre signature.</p>
            </div>
          </div>
          <div className="bg-white rounded-4xl p-5 flex gap-5 items-center max-lg:flex-col max-lg:p-8">
            <NextImage 
            src="/about_logos/identite_logo.svg" 
            alt="Identité visuelle" 
            width={100} 
            height={100}
            className="p-3"
            />
            <div className="flex flex-col gap-3">
              <h3 className={`${gabarito.className} text-xl font-semibold`}>Identité visuelle</h3>
              <p className="text-sm">À partir de vos besoins et directives établis dans le cahier des charges, nous concevons un univers graphique distinctif et mémorable qui reflète l'essence même de votre marque. Si vous possédez déjà votre logo, nous assurons sa déclinaison harmonieuse sur l'ensemble de votre projet.</p>
            </div>
          </div>
          <div className="bg-white rounded-4xl p-5 flex gap-5 items-center max-lg:flex-col max-lg:p-8">
            <NextImage 
            src="/about_logos/marketing_logo.svg" 
            alt="Marketing numérique" 
            width={100} 
            height={100} 
            className="p-3"
            />
            <div className="flex flex-col gap-3">
              <h3 className={`${gabarito.className} text-xl font-semibold`}>Marketing numérique</h3>
              <ul className="text-sm list-disc list-inside flex flex-col gap-1">
                <li>Pour une présence digitale complète et performante, nous vous offrons un accompagnement stratégique sur mesure, incluant selon vos besoins :</li>
                <li>Référencement (SEO et SEA) : Optimisation pour les moteurs de recherche et campagnes publicitaires ciblées.</li>
                <li>Community Management : Animation et engagement de vos communautés en ligne.</li>
                <li>Newsletter : Création de campagnes email pour fidéliser et informer.</li>
                <li>Création de contenu : Production de textes, visuels et vidéos pertinents pour votre audience. En savoir plus</li>
              </ul>
            </div>
          </div>
        </div>
        <a href="/contact" className="text-white text-center w-full">
        <div className="bg-about rounded-4xl p-3 gap-5 text-center mt-2 hover:translate-y-[-3px] transition-all duration-250">
            Nous contacter
        </div>
        </a>
      </section>
    )
}