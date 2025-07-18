import NextImage from "next/image";
import Link from "next/link";

export default function ProjectsSquare({ className = "" }) {
  return (
    <div className={`flex flex-col justify-between p-7 row-span-5 col-span-4 border border-white rounded-4xl ${className}`}>
      <h2 className="h2-projects text-2xl">Nos dernières réalisations</h2>

      <div className="flex flex-col gap-10 w-full">
        <div className="flex justify-center w-full items-center">
          <Link href="/portfolio/milleetunenotes" className="relative w-[300px] h-[200px] group overflow-hidden rounded-3xl] transition-all duration-250">
            <NextImage 
              src="/portfolio/1001_home.png" 
              alt="Project 1" 
              fill 
              className="rounded-3xl object-cover transition-all duration-300 group-hover:brightness-40" 
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="text-white text-xl font-semibold text-center">1001 Notes</h3>
            </div>
          </Link>
        </div>
        
        <div className="flex justify-center items-center">
          <Link href="/portfolio/alpine" className="relative w-[300px] h-[200px] group overflow-hidden rounded-3xl">
            <NextImage 
              src="/portfolio/alpine_home.png" 
              alt="Project 2" 
              fill 
              className="rounded-3xl object-cover transition-all duration-300 group-hover:brightness-40" 
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="text-white text-xl font-semibold text-center">Alpine La Rochelle</h3>
            </div>
          </Link>
        </div>
      </div>

      <a href="/portfolio" className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-[22px] w-fit hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] hover:font-semibold transition-all duration-250">Découvrez tous nos projets</a>


    </div>
  );
}