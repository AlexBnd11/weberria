"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScreenshotImage({ project }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null; // Ne rend rien si l'image a une erreur
  }

  return (
    <div className="mb-12">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl">
        <Image 
          src={`/portfolio/screenshots/${project.screenshots}`} 
          alt={`Screenshot de ${project.name}`} 
          width={1200}
          height={800}
          className="w-full h-auto rounded-3xl"
          unoptimized
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );
}
