"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();

  return (
    <header className="mt-5 mb-15">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/weberria_logo_long_blanc.png" 
            alt="logo" 
            width={235} 
            height={40}
          />
        </Link>
        <ul className="flex items-center gap-15 font-inter">
            <li><Link href="/" className={`${pathname === "/" ? "text-white" : "text-gray-500"}`}>Accueil</Link></li>
            <li><Link href="/portfolio" className={pathname === "/portfolio" ? "text-white" : "text-gray-500"}>Nos projets</Link></li>
            <li><Link href="/agence-web-la-rochelle" className={pathname === "/agence-web-la-rochelle" ? "text-white" : "text-gray-500"}>À propos</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-5 py-3 rounded-full">
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  );
}