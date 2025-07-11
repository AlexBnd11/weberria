import Image from "next/image";
import Link from "next/link";
import projects_data from "../projects_data.json";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-2">
      <h1 className="text-3xl h2-projects mb-6">Découvrez nos créations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 w-full">
        {projects_data.map((project) => (
          <Link 
            key={project.name} 
            href={`/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="relative w-full aspect-[16/10] max-w-[400px] mx-auto group overflow-hidden rounded-3xl"
          >
            <Image 
              src={`/portfolio/${project.cover}`} 
              alt={project.name} 
              fill 
              className="rounded-3xl object-cover transition-all duration-300 group-hover:brightness-40" 
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h2 className="text-white text-xl font-semibold text-center">{project.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}