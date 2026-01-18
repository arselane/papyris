import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroBg} 
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-neon-gold/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6 shadow-[0_0_15px_hsl(190_100%_50%/0.2)]">
            Votre Vision, Notre Lumière
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-glow-cyan text-primary">ILLUMINEZ</span>
          <br />
          <span className="gradient-text">VOTRE MARQUE</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Spécialistes en signalétique lumineuse, enseignes LED, NeonFlex, autocollants vinyle et cadres lumineux à El Achour, Alger. 
          Nous donnons vie à vos idées avec créativité et excellence depuis plus de 12 ans.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a href="#realisations" className="inline-block">
            <Button variant="neon-gold-filled" size="xl">
              Voir nos réalisations
              <ArrowRight className="ml-2" />
            </Button>
          </a>
          <Link to="/quote" className="inline-block">
            <Button variant="neon-gold" size="xl">
              Demander un devis
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "500+", label: "Projets Réalisés", color: "text-neon-gold text-glow-gold" },
            { value: "12", label: "Années d'Expérience", color: "text-primary text-glow-cyan" },
            { value: "200+", label: "Clients Satisfaits", color: "text-neon-pink text-glow-pink" },
            { value: "100%", label: "Qualité Garantie", color: "text-neon-gold text-glow-gold" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-display text-4xl md:text-5xl mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
