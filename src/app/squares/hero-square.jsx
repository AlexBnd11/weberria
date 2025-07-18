export default function HeroSquare({ className = "" }) {
  return (
    <div className={`
    flex flex-col justify-between px-9 py-8 row-span-3 col-span-5 bg-[var(--white-bg)] rounded-[50px] relative ${className}
    max-md:max-md:rounded-4xl
    max-sm:px-6 max-sm:py-6
    `}>
      <h1 className="text-[3vw] max-lg:text-2xl font-gabarito">Votre Agence Web à La Rochelle</h1>
      <p className="text-md text-slate-800 w-[70%] pb-4 max-lg:w-full max-lg:text-sm">Nous vous accompagnons pour tous vos projets web et digitaux. Renforcez votre présence en ligne.</p>
      <a href="/contact" className="hero-button">
        Contactez-nous
      </a>
    </div>
  );
}