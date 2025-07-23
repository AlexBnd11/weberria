"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Bouton burger */}
      {!open && (
        <button
          className="md:hidden fixed top-7 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 rounded-full shadow-lg"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 rounded-full`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 rounded-full`}></span>
          <span className={`block w-6 h-0.5 bg-white rounded-full`}></span>
        </button>
      )}

      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        >
          <nav
            className={
              "fixed top-0 right-0 w-64 h-full bg-black shadow-2xl rounded-l-2xl flex flex-col items-start p-8 gap-6 transform transition-transform duration-300 " +
              (open ? "translate-x-0" : "translate-x-full")
            }
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 text-white text-2xl"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <Link href="/" className={`w-full py-2 px-3 rounded-xl text-lg ${pathname === "/" ? "bg-white text-[var(--text-primary)] font-semibold" : "text-white"}`} onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/portfolio" className={`w-full py-2 px-3 rounded-xl text-lg ${pathname === "/portfolio" ? "bg-white text-[var(--text-primary)] font-semibold" : "text-white"}`} onClick={() => setOpen(false)}>Nos projets</Link>
            <Link href="/agence-web-la-rochelle" className={`w-full py-2 px-3 rounded-xl text-lg ${pathname === "/agence-web-la-rochelle" ? "bg-white text-[var(--text-primary)] font-semibold" : "text-white"}`} onClick={() => setOpen(false)}>Notre accompagnement</Link>
            <Link href="/contact" className={`w-full py-2 px-3 rounded-xl text-lg ${pathname === "/contact" ? "bg-white text-[var(--text-primary)] font-semibold" : "text-white"}`} onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
}