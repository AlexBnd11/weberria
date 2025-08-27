import { inter, gabarito } from "./fonts";
import "./globals.css";
import "./hero-gradient.css";
import "./hero-button.css";
import Header from "./components/Header";

export const metadata = {
  title: "Agence Web à La Rochelle | Weberria",
  description: "Weberria, agence web à La Rochelle, aide les entreprises à trouver des clients en ligne. Sites performants, stratégies digitales sur-mesure, accompagnement personnalisé et tarifs adaptés pour développer votre visibilité web.",
  keywords: "agence web, La Rochelle, création site web, référencement, marketing digital, design web, développement web",
  authors: [{ name: "Weberria" }],
  creator: "Weberria",
  publisher: "Weberria",
  robots: "index, follow",
  openGraph: {
    title: "Agence Web à La Rochelle | Weberria",
    description: "Weberria, agence web à La Rochelle, aide les entreprises à trouver des clients en ligne. Sites performants, stratégies digitales sur-mesure.",
    type: "website",
    locale: "fr_FR",
    siteName: "Weberria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Web à La Rochelle | Weberria",
    description: "Weberria, agence web à La Rochelle, aide les entreprises à trouver des clients en ligne.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#b1173d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${gabarito.variable} antialiased w-screen h-screen flex items-center justify-center hero-gradient`}>
        <main className="border
         border-white rounded-4xl w-[94%] h-[88%] p-11 flex flex-col overflow-hidden backdrop-blur-sm
         max-lg:p-7 m-10 max-lg:m-4
         max-sm:p-5 max-sm:m-0 max-sm:rounded-none max-sm:border-none max-sm:overflow-visible max-sm:h-full max-sm:w-full
         ">
          <Header />
          <div className="flex-1 overflow-y-auto" id="main-content">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
