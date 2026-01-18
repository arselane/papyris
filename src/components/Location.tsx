import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "PXVX+RFM, Rte de Oued Romane, El Achour, Algérie";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="localisation" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-gold/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-neon-gold/30 text-neon-gold text-sm font-medium mb-4">
            Localisation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">OÙ NOUS</span>{" "}
            <span className="text-glow-gold text-neon-gold">TROUVER</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venez nous rencontrer dans nos locaux à El Achour
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border h-[400px] bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.4!2d2.997!3d36.747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzQ5LjIiTiAywrA1OSc0OS4yIkU!5e0!3m2!1sfr!2sdz!4v1620000000000!5m2!1sfr!2sdz&q=PXVX%2BRFM%2C+Rte+de+Oued+Romane%2C+El+Achour%2C+Alg%C3%A9rie"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation PAPYRIS"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-2xl" />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-neon-gold/10 flex items-center justify-center text-neon-gold flex-shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Notre adresse
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    PXVX+RFM, Rte de Oued Romane<br />
                    El Achour, Algérie
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Navigation className="w-5 h-5 text-neon-gold" />
                  <span>Accessible en voiture et transports en commun</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Navigation className="w-5 h-5 text-neon-gold" />
                  <span>Parking disponible sur place</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Navigation className="w-5 h-5 text-neon-gold" />
                  <span>Zone El Achour, Alger</span>
                </div>
              </div>

              <div className="mt-8">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="neon-gold-filled" size="lg" className="w-full sm:w-auto">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Voir sur Google Maps
                  </Button>
                </a>
              </div>
            </div>

            {/* Hours reminder */}
            <div className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-xl p-6 border border-neon-gold/30">
              <p className="text-foreground font-medium mb-2">Horaires d'ouverture</p>
              <p className="text-muted-foreground">
                Sam-Jeu: 9h00 - 18h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
