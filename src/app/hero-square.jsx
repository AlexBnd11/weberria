export default function HeroSquare() {
  return (
    <div className="flex flex-col justify-between p-6 row-span-3 col-span-4 bg-white rounded-4xl">
      <h1 className="text-[2.5rem] font-semibold text-gray-800 leading-tight">Votre Agence Web à La Rochelle</h1>
      <p className="text-sm text-gray-500">Nous vous accompagnons pour tous vos projets web et digitaux. Renforcez votre présence en ligne.</p>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">Contactez-nous</button>
    </div>
  );
}