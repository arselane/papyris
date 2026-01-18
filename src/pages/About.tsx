import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Users, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
              À Propos de Papyris
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="text-glow-cyan text-primary">VOTRE PARTENAIRE</span>
              <br />
              <span className="text-foreground">EN SIGNALÉTIQUE</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Depuis plus de 12 ans, nous illuminons les marques et transformons les espaces 
              avec des solutions de signalétique lumineuse innovantes et sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl mb-6">
                <span className="text-foreground">Notre</span>{" "}
                <span className="text-glow-gold text-neon-gold">Histoire</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fondée en 2014 à El Achour, Papyris est née de la passion de créer 
                  des solutions visuelles qui marquent les esprits. Ce qui a commencé 
                  comme un petit atelier de signalétique est devenu l'un des leaders 
                  régionaux en enseignes lumineuses et publicité.
                </p>
                <p>
                  Notre expertise s'étend des enseignes LED haute luminosité aux 
                  autocollants personnalisés, en passant par le NeonFlex et les cadres 
                  lumineux. Chaque projet est une opportunité de repousser les limites 
                  de la créativité.
                </p>
                <p>
                  Aujourd'hui, avec plus de 500 projets réalisés et 200 clients 
                  satisfaits, nous continuons à innover et à offrir des solutions 
                  qui font briller nos clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-gold/20 to-neon-cyan/20 flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="font-display text-6xl text-neon-gold text-glow-gold mb-4">12+</div>
                  <div className="text-foreground text-xl font-medium">Années d'Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              <span className="text-foreground">Nos</span>{" "}
              <span className="text-glow-cyan text-primary">Valeurs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Qualité irréprochable dans chaque projet",
                color: "text-neon-gold"
              },
              {
                icon: Users,
                title: "Proximité",
                description: "À l'écoute de vos besoins",
                color: "text-primary"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Technologies de pointe",
                color: "text-neon-pink"
              },
              {
                icon: Target,
                title: "Engagement",
                description: "Respect des délais et budgets",
                color: "text-neon-gold"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${value.color}`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projets Réalisés", color: "text-neon-gold text-glow-gold" },
              { value: "12", label: "Années d'Expérience", color: "text-primary text-glow-cyan" },
              { value: "200+", label: "Clients Satisfaits", color: "text-neon-pink text-glow-pink" },
              { value: "100%", label: "Qualité Garantie", color: "text-neon-gold text-glow-gold" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`font-display text-5xl md:text-6xl mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-3xl p-12 border border-neon-gold/30 text-center">
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              <span className="text-foreground">Prêt à</span>{" "}
              <span className="text-glow-gold text-neon-gold">Illuminer</span>{" "}
              <span className="text-foreground">votre marque ?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button variant="neon-gold-filled" size="lg">
                  Demander un devis
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="/#realisations">
                <Button variant="neon-gold" size="lg">
                  Voir nos réalisations
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
