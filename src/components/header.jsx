"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Header() {
    const pathname = usePathname();

  return (
    <header>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/weberria_logo_long_blanc.png" alt="logo" width={280} height={40} />
        </Link>
        <ul className="flex items-center gap-15 font-inter">
            <li><Link href="/" className={pathname === "/" ? "text-white" : "text-gray-500"}>Accueil</Link></li>
            <li><Link href="/portfolio" className={pathname === "/portfolio" ? "text-white" : "text-gray-500"}>Nos projets</Link></li>
            <li><Link href="/agence-web-la-rochelle" className={pathname === "/agence-web-la-rochelle" ? "text-white" : "text-gray-500"}>À propos</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  );
}