import projects_data from "../projects_data.json";
import ClientImageCard from "./components/ClientImageCard";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-2">
      <h1 className="text-3xl h2-projects mb-6">Découvrez nos créations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 w-full">
        {projects_data.map((project) => (
          <ClientImageCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}