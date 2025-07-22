export default function OfferSquare({ className = "" }) {
  return (
    <div className={`flex flex-col justify-between p-7 row-span-2 col-span-3 bg-offer rounded-4xl ${className}`}>
      <h2 className="h2-offer text-[1.5vw] max-xl:text-[18px] max-lg:text-[16px] max-md:text-2xl">Votre site web sur mesure à partir de <span className="font-semibold">60</span>€ /mois.</h2>
      <a href="/about" 
        className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-[22px] w-fit hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] hover:font-semibold transition-all duration-250
        max-xl:text-sm
        max-lg:text-[12px] max-lg:px-3 max-lg:py-1
        ">
        En savoir plus
      </a>
    </div>
  );
}