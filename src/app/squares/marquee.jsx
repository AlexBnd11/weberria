const brands = [
  {
    img_link: "/brands/alpine.png",
    website_link: "https://alpine-larochelle.com/",
    alt: "Logo Alpine La Rochelle"
  },
  {
    img_link: "/brands/auto-pas-chere.png",
    website_link: "https://auto-pas-chere.fr/",
    alt: "Logo Auto Pas Cher - Vente de voitures d'occasion"
  },
  {
    img_link: "/brands/groupe_michel.png",
    website_link: "https://www.groupemichel.com/",
    alt: "Logo Groupe Michel"
  },
  {
    img_link: "/brands/hortza.png",
    website_link: "#",
    alt: "Logo Hortza - Cabinet dentaire"
  },
  {
    img_link: "/brands/jade-olleac.png",
    website_link: "https://jadeolleac-psychologue.fr/",
    alt: "Logo Jade Olléac - Psychologue clinicienne"
  },
  {
    img_link: "/brands/mille-et-une-notes.png",
    website_link: "https://www.milleetunenotes.com/",
    alt: "Logo Mille et une Notes - École de musique"
  },
];

export default function Marquee({ className = "" }) {
    return (
    <div className={`row-span-2 col-span-5 p-7 flex flex-col justify-between items-center rounded-4xl bg-[var(--white-bg)] ${className}`}>
        <h2 className="h2 text-3xl hide-on-short max-md:mb-6">Ils nous font confiance</h2>
        <div className="marquee-container">
            <div className="marquee">
            {brands.map((brand) => (
                <a href={brand.website_link} key={brand.img_link} target="_blank" className="hover:scale-105 transition-all duration-250 py-1.5">
                <img src={brand.img_link} alt={brand.alt} className="h-15 w-auto mr-15" />
                </a>
            ))}
            {brands.map((brand) => (
                <a href={brand.website_link} key={brand.img_link + '-2'} target="_blank" className="hover:scale-105 transition-all duration-250">
                <img src={brand.img_link} alt={brand.alt} className="h-15 w-auto mr-15" />
                </a>
            ))}
            </div>
        </div>
    </div>
    );
  }