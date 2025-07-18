import projects_data from "../../projects_data.json";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const project = projects_data.find(p => 
    p.name.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') === slug
  );

  if (!project) {
    return {
      title: "Projet non trouvé - Weberria",
      description: "Le projet demandé n'a pas été trouvé.",
    };
  }

  return {
    title: `${project.name} - Portfolio Weberria`,
    description: project.decription || `Découvrez le projet "${project.name}" réalisé par Weberria, agence web à La Rochelle.`,
    openGraph: {
      title: `${project.name} - Portfolio Weberria`,
      description: project.decription || `Découvrez le projet "${project.name}" réalisé par Weberria.`,
      images: [`/portfolio/${project.screenshots}`],
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
} 