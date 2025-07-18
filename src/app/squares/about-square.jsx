export default function AboutSquare({ className = "" }) {
  return (
    <div className={`flex flex-col justify-between p-7 row-span-2 col-span-3 bg-about rounded-4xl ${className}`}>
      <h2 className="h2 text-3xl h2-projects">Qui sommes-nous ?</h2>
    </div>
  );
}