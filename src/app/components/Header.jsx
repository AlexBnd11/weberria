"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="mb-13 mt-4 relative">
                <Link href="/" className="absolute top-0 left-0">
                    <Image 
                        src="/weberria_logo_long_blanc.png" 
                        alt="Logo Weberria - Retour à l'accueil" 
                        width={190} 
                        height={40}
                        unoptimized
                    />
                </Link>
                <ul className="hidden md:flex items-center gap-15 max-lg:gap-8 font-inter flex-1 justify-center text-[15px] max-xl:justify-end">
                    <li><Link href="/" className={`${pathname === "/" ? "text-white font-semibold" : "text-gray-200"} max-lg:text-sm`}>Accueil</Link></li>
                    <li><Link href="/portfolio" className={`${pathname === "/portfolio" ? "text-white font-semibold" : "text-gray-200"} max-lg:text-sm`}>Nos projets</Link></li>
                    <li><Link href="/agence-web-la-rochelle" className={`${pathname === "/agence-web-la-rochelle" ? "text-white font-semibold" : "text-gray-200"} max-lg:text-sm`}>Notre accompagnement</Link></li>
                    <li><Link href="/contact" className={`${pathname === "/contact" ? "text-white font-semibold" : "text-gray-200"} max-lg:text-sm`}>Contact</Link></li>
                </ul>
                <BurgerMenu />
        </header>
    );
}