"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientImageCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`w-full aspect-[16/10] max-w-[350px] mx-auto transition-all duration-400 ease-out ${
      imageLoaded 
        ? 'scale-100 opacity-100' 
        : 'scale-130 opacity-0'
    }`}>
      <Link 
        href={`/portfolio/${project.name.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\s+/g, '-')}`}
        className="relative w-full h-full group overflow-hidden rounded-3xl block"
      >
        <Image 
          src={`/portfolio/${project.cover}`} 
          alt={project.name} 
          fill 
          className="rounded-3xl object-cover transition-all duration-300 group-hover:brightness-40 brightness-98" 
          onLoad={() => setImageLoaded(true)}
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h2 className="text-white text-xl font-semibold text-center">{project.name}</h2>
        </div>
      </Link>
    </div>
  );
} 