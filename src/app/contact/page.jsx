import { gabarito } from "@/app/fonts";
import NextImage from "next/image";

export default function Contact() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex max-w-6xl w-full h-[96%] mr-2 border-l border-t border-b border-white rounded-[50px] relative">
                <div className="w-1/3 flex items-center z-0 pl-10">
                    <div className="flex flex-col h-full gap-10 pb-10 justify-center relative text-white">
                        <div className={`flex flex-col`}>
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Notre engagement</p>
                            <p className="font-light text-sm mt-0.5">Pour tous vos projets web & communication</p>
                            <p className="text-sm font-bold mt-2">Devis gratuit</p>
                        </div>
                        <div className="flex flex-col">
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Une question ? </p>
                            <p className="font-light text-sm mt-0.5">Nous sommes à votre écoute.</p>
                            <a href="mailto:contact@weberria.fr" className="text-sm font-bold mt-2">contact@weberria.fr</a>
                        </div>
                        <div className={`flex flex-col`}>
                            <p className={`${gabarito.className} tracking-wide text-lg font-semibold`}>Notre téléphone</p>
                            <p className="font-light text-sm mt-0.5">Du lundi au vendredi de 9h à 18h</p>
                            <a href="tel:+33613075346" className="text-sm font-bold mt-2">+33 6 13 07 53 46</a>
                        </div>
                        <div className="absolute bottom-10 left-0">
                            <NextImage src="/linkedin_logo.svg" alt="LinkedIn" width={32} height={32} />
                        </div>
                    </div>
                </div>
                <div className="w-2/3 bg-white rounded-[50px] flex flex-col justify-between items-center shadow-lg transform scale-[104%] mr-[7px] z-10 p-15">
                    <div className="flex flex-col gap-3">
                        <h1 className={`${gabarito.className} h1 text-4xl text-balance`}>Envie de renforcer votre présence en ligne ? Faisons équipe.</h1>
                        <p className="text-[14px] text-gray-900">Quelques mots sur vous, votre projet et vos objectifs ?</p>
                    </div>
                    <form className="flex flex-col gap-4.5 w-full">
                        <div>
                            <input
                                type="text"
                                className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 focus:outline-none placeholder-gray-700"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 focus:outline-none placeholder-gray-700"
                                placeholder="Votre email"
                            />
                        </div>
                        <div>
                            <textarea
                                className="w-full text-sm border-b-1 border-gray-900 text-gray-900 py-2 px-1 mt-2 focus:outline-none placeholder-gray-700 resize-none"
                                placeholder="Dites-nous ce que vous avez en tête..."
                                rows={3}
                            />
                        </div>
                        <button
                            type="submit"
                            className="hero-button mt-6"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}