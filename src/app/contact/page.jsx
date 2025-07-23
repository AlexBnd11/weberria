import { gabarito } from "@/app/fonts";
import NextImage from "next/image";
import Animation from "./components/Animation";
import ContactFormClient from "./ContactFormClient";

export default function Contact() {
    return (
        <Animation className="w-full h-full min-h-[75vh] flex justify-center items-center
        max-md:h-auto max-md:pt-5
        ">
            <div className="flex max-w-6xl w-full h-[96%] mr-2 border-l border-t border-b border-white rounded-[50px] relative
            max-md:flex-col-reverse max-md:h-auto max-md:border-none max-md:mr-0
            ">
                <div className="w-1/3 flex items-center z-0 px-10
                max-md:w-full max-md:flex-col max-md:px-0
                ">
                    <div className="flex flex-col h-full gap-10 pb-10 justify-center relative text-white
                    max-md:pb-0 max-md:pt-10
                    ">
                        <div className={`flex flex-col max-md:items-center`}>
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Notre engagement</p>
                            <p className="font-light text-sm max-[325px]:text-[13px]">Pour tous vos projets web & communication</p>
                            <p className="text-sm font-bold mt-3">Devis gratuit</p>
                        </div>
                        <div className="flex flex-col max-md:items-center">
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Une question ? </p>
                            <p className="font-light text-sm">Nous sommes à votre écoute.</p>
                            <a href="mailto:contact@weberria.fr" className="text-sm font-bold mt-3">contact@weberria.fr</a>
                        </div>
                        <div className={`flex flex-col max-md:items-center`}>
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Notre téléphone</p>
                            <p className="font-light text-sm">Du lundi au vendredi de 9h à 18h</p>
                            <a href="tel:+33613075346" className="text-sm font-bold mt-3">+33 6 13 07 53 46</a>
                        </div>
                        <div className="absolute bottom-10 left-0
                        max-md:relative max-md:mt-10 flex flex-col items-center
                        ">
                            <NextImage src="/linkedin_logo.svg" alt="LinkedIn" width={32} height={32} unoptimized />
                        </div>
                    </div>
                </div>
                <div className="w-2/3 bg-white rounded-[50px] flex flex-col justify-between items-center shadow-lg transform scale-[104%] mr-[7px] z-10 p-12
                max-md:w-full max-md:scale-100
                max-lg:p-9
                ">
                    <div className="flex flex-col gap-3">
                        <h1 className={`${gabarito.className} h1 text-4xl text-balance max-md:text-3xl`}>Ensemble, trouvons vos futurs clients en ligne.</h1>
                        <p className="text-[14px] text-gray-900 pb-7">Quelques mots sur vous, votre projet et vos objectifs ?</p>
                    </div>
                    <ContactFormClient />
                </div>
            </div>
        </Animation>
    );
}