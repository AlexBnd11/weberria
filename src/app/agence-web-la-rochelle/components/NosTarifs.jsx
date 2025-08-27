export default function NosTarifs() {
  return (
    <section className="mt-20">
      <h2 className="h2-offer text-3xl font-bold text-center mb-8">Tarifs de l'agence Weberria</h2>
      <p className="text-center text-white/80 mb-8 max-md:text-sm px-4">
      Découvrez nos tarifs de façon transparente, conçus pour s'adapter à chaque budget sans compromis sur la qualité. Nous proposons une tarification mensuelle pour vous offrir une maîtrise budgétaire simplifiée et une adaptabilité constante de nos services à vos besoins évolutifs.
      </p>
      <div className="rounded-2xl bg-white/10">
        <table className="w-full text-white overflow-hidden text-sm max-md:text-xs">
          <thead>
            <tr>
              <th className="p-4 max-[375px]:p-3 text-left">Prestation</th>
              <th className="p-4 max-[375px]:p-3 text-left">Paiement Unique</th>
              <th className="p-4 max-[375px]:p-3 text-left">Paiement Mensuel</th>
              <th className="p-4 max-[375px]:p-3 text-left max-md:hidden">Détails</th>
            </tr>
          </thead>
          <tbody>
            {/* Création site web */}
            <tr>
              <td colSpan={4} className="p-4 max-[375px]:p-3 font-bold text-white text-lg bg-white/10">Création site web</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Site One-Page</td>
              <td className="p-4 max-[375px]:p-3">990€</td>
              <td className="p-4 max-[375px]:p-3">60 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Idéal pour présenter une activité ou un service principal. Design responsive, formulaire de contact, intégration des réseaux sociaux.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Ajout d'une page</td>
              <td className="p-4 max-[375px]:p-3">100 €/page</td>
              <td className="p-4 max-[375px]:p-3">10 €/mois/page</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Pour étoffer un site existant ou ajouter du contenu spécifique.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Site 10 pages</td>
              <td className="p-4 max-[375px]:p-3">1 800€</td>
              <td className="p-4 max-[375px]:p-3">110 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Site complet pour TPE/PME. Arborescence plus complexe, blog, optimisation technique de base pour le SEO.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Refonte d'un site web existant</td>
              <td className="p-4 max-[375px]:p-3">Sur Devis</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Refonte graphique et/ou technique d'un site existant.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Boutique en ligne</td>
              <td className="p-4 max-[375px]:p-3">À partir de 2 500 €</td>
              <td className="p-4 max-[375px]:p-3">À partir de 150 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Création d'un site e-commerce fonctionnel (jusqu'à 50 produits), paiement sécurisé, gestion de commandes. Le prix peut varier considérablement selon le nombre de produits et de fonctionnalités.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Ajout d'une langue</td>
              <td className="p-4 max-[375px]:p-3">350 €/langue</td>
              <td className="p-4 max-[375px]:p-3">20 €/mois/langue</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Intégration d'une nouvelle langue sur le site (traduction du contenu non incluse).</td>
            </tr>

            {/* Référencement */}
            <tr>
              <td colSpan={4} className="p-4 max-[375px]:p-3 font-bold text-white text-lg bg-white/10">Référencement</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Audit SEO (Technique & Naturel)</td>
              <td className="p-4 max-[375px]:p-3">350€</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Analyse complète de la performance SEO actuelle du site (technique, on-page, off-page), identification des points faibles et proposition de recommandations concrètes.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Optimisation Référencement Naturel</td>
              <td className="p-4 max-[375px]:p-3">400€</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Optimisation régulière du contenu (mots-clés, maillage interne), suivi des positions, rapports mensuels. Ne comprend pas la création de contenu (articles de blog par exemple).</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Optimisation Référencement Local</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3">30-150 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Gestion et optimisation de votre fiche Google My Business, suivi des avis, stratégie de mots-clés locaux. Essentiel pour les entreprises de La Rochelle et Charente-Maritime.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Référencement Payant (SEA)</td>
              <td className="p-4 max-[375px]:p-3">Sur Devis</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Gestion de campagnes Google Ads, Facebook Ads, etc.</td>
            </tr>

            {/* Graphisme & Design */}
            <tr>
              <td colSpan={4} className="p-4 max-[375px]:p-3 font-bold text-white text-lg bg-white/10">Graphisme & Design</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Logo Simple</td>
              <td className="p-4 max-[375px]:p-3">À partir de 200 €</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Création de 2-3 propositions de logo simples, révisions limitées. Idéal pour une première identité visuelle.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Logo Complexe</td>
              <td className="p-4 max-[375px]:p-3">Sur Devis</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Pour les logos nécessitant une recherche plus approfondie, des déclinaisons (print, web, favicons), un travail typographique spécifique ou une charte graphique plus poussée.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Création d'univers graphique</td>
              <td className="p-4 max-[375px]:p-3">Sur Devis</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Charte graphique complète, palette de couleurs, typographie, iconographie, illustrations, déclinaisons pour différents supports.</td>
            </tr>

            {/* Marketing */}
            <tr>
              <td colSpan={4} className="p-4 max-[375px]:p-3 font-bold text-white text-lg bg-white/10">Marketing</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Community Management</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3">200 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">8 posts/semaine sur les plateformes choisies (ex: Facebook, Instagram). Cela inclut la rédaction des posts, la recherche de visuels, la programmation. Ne comprend pas la gestion des campagnes publicitaires.</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Réel par semaine</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3">150 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Création et publication d'un Reel/TikTok par semaine (format court, dynamique, pour booster la visibilité et l'engagement).</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Emailing hebdomadaire</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3">150 €/mois</td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Rédaction et envoi d'une newsletter hebdomadaire. Cela peut inclure des promotions, des actualités, des articles de blog.</td>
            </tr>

            {/* Formation */}
            <tr>
              <td colSpan={4} className="p-4 max-[375px]:p-3 font-bold text-white text-lg bg-white/10">Formation</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">WordPress</td>
              <td className="p-4 max-[375px]:p-3">200€</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Prise en main de WordPress : gestion des pages, articles, médias (demi-journée)</td>
            </tr>
            <tr>
              <td className="p-4 max-[375px]:p-3">Community Management</td>
              <td className="p-4 max-[375px]:p-3">200€</td>
              <td className="p-4 max-[375px]:p-3"></td>
              <td className="p-4 max-[375px]:p-3 max-md:hidden">Stratégies et outils pour gérer les réseaux sociaux d'une entreprise : planification de contenu, engagement, analyse des performances (demi-journée)</td>
            </tr>
          </tbody>
      </table>
      </div>
    </section>
  );
}