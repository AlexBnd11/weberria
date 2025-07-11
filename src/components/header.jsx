"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="mb-13 mt-4 relative">
                <Link href="/" className="absolute top-0 left-0">
                    <Image 
                        src="/weberria_logo_long_blanc.png" 
                        alt="logo" 
                        width={190} 
                        height={40}
                    />
                </Link>
                <ul className="flex items-center gap-15 max-lg:gap-8 font-inter flex-1 justify-center max-lg:justify-end max-sm:hidden">
                    <li><Link href="/" className={`${pathname === "/" ? "text-white font-semibold" : "text-gray-300"} max-lg:text-sm`}>Accueil</Link></li>
                    <li><Link href="/portfolio" className={`${pathname === "/portfolio" ? "text-white font-semibold" : "text-gray-300"} max-lg:text-sm`}>Nos projets</Link></li>
                    <li><Link href="/agence-web-la-rochelle" className={`${pathname === "/agence-web-la-rochelle" ? "text-white font-semibold" : "text-gray-300"} max-lg:text-sm`}>À propos</Link></li>
                </ul>
        </header>
    );
}