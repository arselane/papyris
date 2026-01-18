import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont vos délais de fabrication ?",
    answer:
      "Les délais varient selon le type de projet. Pour les autocollants et stickers, comptez 3-5 jours ouvrés. Pour les enseignes lumineuses et NeonFlex, prévoyez 2-3 semaines. Les projets complexes nécessitant une conception sur mesure peuvent prendre jusqu'à 4 semaines. Nous proposons également un service express pour les urgences.",
  },
  {
    question: "Proposez-vous l'installation ?",
    answer:
      "Oui, nous assurons l'installation complète de tous nos produits par nos équipes professionnelles. Le service d'installation est inclus pour les enseignes lumineuses et les cadres lumineux. Pour les autocollants et covering véhicule, l'installation peut être réalisée par nos soins ou par vous-même selon votre préférence.",
  },
  {
    question: "Quelle est la durée de vie de vos produits ?",
    answer:
      "Nos produits sont conçus pour durer. Les autocollants en vinyle premium résistent 5 à 7 ans en extérieur. Les LED de nos enseignes et NeonFlex ont une durée de vie de plus de 50 000 heures, soit environ 15 ans d'utilisation normale. Tous nos produits sont garantis 2 ans minimum.",
  },
  {
    question: "Pouvez-vous créer des designs personnalisés ?",
    answer:
      "Absolument ! Nous disposons d'une équipe de designers qui peut créer des designs sur mesure selon vos besoins. Vous pouvez également nous fournir vos propres fichiers (AI, PSD, PDF vectoriel). Un accompagnement créatif est inclus dans chaque projet pour garantir un résultat optimal.",
  },
  {
    question: "Quelles zones géographiques desservez-vous ?",
    answer:
      "Nous intervenons principalement en Île-de-France pour les installations. Pour les produits ne nécessitant pas d'installation (autocollants, petits cadres), nous livrons dans toute la France métropolitaine. Des déplacements en province sont possibles pour les projets d'envergure.",
  },
  {
    question: "Comment fonctionne le processus de devis ?",
    answer:
      "C'est simple : contactez-nous via le formulaire ou par téléphone avec les détails de votre projet. Nous vous envoyons un devis détaillé sous 24-48h. Après validation, nous planifions la fabrication et l'installation. Un acompte de 50% est demandé à la commande, le solde à la livraison.",
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer:
      "Oui, nous proposons des contrats de maintenance annuels pour les enseignes lumineuses et NeonFlex. Ces contrats incluent des visites préventives, le remplacement des LED défectueuses et une intervention rapide en cas de panne. C'est la garantie d'une enseigne toujours fonctionnelle.",
  },
  {
    question: "Vos enseignes sont-elles conformes aux réglementations ?",
    answer:
      "Toutes nos enseignes sont conformes aux normes en vigueur (NF EN 50107, extinction nocturne, etc.). Nous pouvons également vous accompagner dans les démarches administratives pour l'obtention des autorisations nécessaires auprès de votre mairie.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neon-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-neon-pink/30 text-neon-pink text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">QUESTIONS</span>{" "}
            <span className="text-glow-pink text-neon-pink">FRÉQUENTES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services et notre façon de travailler
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
