import Image from "next/image";
import Link from "next/link";
import projects_data from "../../projects_data.json";

export default function ProjectPage({ params }) {
  const { slug } = params;
  
  const project = projects_data.find(p => 
    p.name.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') === slug
  );

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 mt-2">
        <h1 className="text-3xl h2-projects mb-6">Projet non trouvé</h1>
        <Link href="/portfolio" className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-[22px] hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] transition-all duration-250">
          Retour au portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-2 p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl h2-projects mb-4">{project.name}</h1>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-[22px] hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] transition-all duration-250 mb-6"
            >
              Visiter le site
            </a>
          )}
        </div>

          {project.decription && (
            <div className="mb-8">
              <h2 className="text-2xl h2-projects mb-4">Description du projet</h2>
              <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                {project.decription}
              </p>
            </div>
          )}

        <div className="mb-8">
          <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-3xl">
            <Image 
              src={`/portfolio/${project.screenshots}`} 
              alt={`Screenshot de ${project.name}`} 
              fill 
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/portfolio" 
            className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-[22px] hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] transition-all duration-250"
          >
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </div>
  );
} 