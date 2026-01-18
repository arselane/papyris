import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/papyris_logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <span className="font-display text-2xl gradient-text">
                Papyris
              </span>
              <img src={logo} alt="Papyris Logo" className="h-20 w-20 -ml-5" />
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              Votre partenaire pour tous vos projets de signalétique lumineuse et publicitaire.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-neon-gold hover:bg-neon-gold/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">SERVICES</h4>
            <ul className="space-y-2">
                {[
                  { name: "Enseignes Lumineuses", slug: "enseignes" },
                  { name: "NeonFlex LED", slug: "neonflex" },
                  { name: "Autocollants", slug: "autocollants" },
                  { name: "Cadres Lumineux", slug: "cadres-lumineux" }
                ].map((item) => (
                  <li key={item.slug}>
                    <a href={`/services/${item.slug}`} className="text-muted-foreground hover:text-neon-gold transition-colors text-sm">
                      {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">ENTREPRISE</h4>
            <ul className="space-y-2">
                {[
                  { name: "À Propos", link: "/about" },
                  { name: "Réalisations", link: "/#realisations" },
                  { name: "Témoignages", link: "/#temoignages" },
                  { name: "Contact", link: "/#contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-muted-foreground hover:text-neon-gold transition-colors text-sm">
                      {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">LÉGAL</h4>
            <ul className="space-y-2">
                {[
                  { name: "Mentions Légales", link: "/legal" },
                  { name: "CGV", link: "/terms" },
                  { name: "Politique de Confidentialité", link: "/privacy" }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-muted-foreground hover:text-neon-gold transition-colors text-sm">
                      {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neon Line */}
        <div className="neon-line mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {(() => {
              const y = new Date().getFullYear();
              return `© Papyris ${y}. Tous droits réservés.`;
            })()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
