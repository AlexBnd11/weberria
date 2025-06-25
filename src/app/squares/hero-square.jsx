export default function HeroSquare() {
  return (
    <div className="flex flex-col justify-between px-9 py-8 row-span-3 col-span-5 bg-white rounded-[50px]">
      <h1 className="text-5xl font-semibold text-gray-800 leading-tight">Votre Agence Web à La Rochelle</h1>
      <p className="text-md text-gray-600 w-[70%]">Nous vous accompagnons pour tous vos projets web et digitaux. Renforcez votre présence en ligne.</p>
      <a
        href="#"
        className="bg-[#f45d48] text-white px-6 py-3 rounded-full w-fit"
      >
        Contactez-nous
      </a>
    </div>
  );
}