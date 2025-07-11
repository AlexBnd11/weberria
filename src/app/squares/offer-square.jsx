export default function OfferSquare() {
  return (
    <div className="flex flex-col justify-between p-7 row-span-2 col-span-3 bg-offer rounded-4xl">
      <h2 className="h2-offer text-3xl">Votre site web sur mesure à partir de <span className="font-semibold">990</span>€.</h2>
      <a href="/about" className="bg-transparent border-2 border-white text-white px-5 py-2 rounded-[22px] w-fit hover:bg-[var(--white-bg)] hover:text-[var(--text-primary)] hover:font-semibold transition-all duration-250">En savoir plus</a>
    </div>
  );
}