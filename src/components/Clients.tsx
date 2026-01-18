import { Star } from "lucide-react";

const clients = [
  { name: "RESTO GOURMET", industry: "Restauration" },
  { name: "BOUTAE", industry: "Mode & Luxe" },
  { name: "AUTO SPORT", industry: "Automobile" },
  { name: "BEAUTY LAB", industry: "Beauté" },
  { name: "CAFÉ ROYAL", industry: "Restauration" },
  { name: "TECH STORE", industry: "Technologie" },
  { name: "PHARMA PLUS", industry: "Santé" },
  { name: "GYM ELITE", industry: "Sport" },
];

const testimonials = [
  {
    name: "Marie Laurent",
    company: "Boutique Élégance",
    content: "Équipe professionnelle et créative. Notre enseigne lumineuse attire tous les regards ! Un travail impeccable du devis à la pose.",
    rating: 5,
  },
  {
    name: "Thomas Dubois",
    company: "Restaurant La Table",
    content: "Le néonflex qu'ils ont créé pour notre restaurant est exactement ce que nous voulions. Qualité exceptionnelle et service client au top.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    company: "Auto Prestige",
    content: "Covering véhicule parfait pour notre flotte. Les autocollants sont d'une qualité remarquable et tiennent parfaitement dans le temps.",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <section id="temoignages" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-cyan/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-accent/30 text-accent text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">ILS NOUS FONT</span>{" "}
            <span className="gradient-text">CONFIANCE</span>
          </h2>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-neon-gold/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(39_97%_60%/0.15)]"
            >
              <span className="font-display text-sm text-muted-foreground group-hover:text-neon-gold transition-colors text-center">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground/60 mt-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(320_100%_60%/0.15)]"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-gold text-neon-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan via-neon-gold to-neon-pink flex items-center justify-center text-foreground font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
