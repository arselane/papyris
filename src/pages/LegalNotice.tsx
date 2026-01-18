import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
              Mentions Légales
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-cyan text-primary">MENTIONS</span>
              <br />
              <span className="text-foreground">LÉGALES</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            {/* Identification */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-neon-gold" />
                </div>
                <h2 className="font-display text-2xl text-foreground">1. Identification de l'entreprise</h2>
              </div>
              <div className="space-y-3">
                <p><strong className="text-foreground">Raison sociale :</strong> Papyris SARL</p>
                <p><strong className="text-foreground">Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</p>
                <p><strong className="text-foreground">Capital social :</strong> [À compléter] DA</p>
                <p><strong className="text-foreground">Numéro RC :</strong> [À compléter]</p>
                <p><strong className="text-foreground">NIF :</strong> [À compléter]</p>
                <p><strong className="text-foreground">Directeur de publication :</strong> [À compléter]</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">2. Coordonnées</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neon-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Siège social :</p>
                    <p>PXVX+RFM, Rte de Oued Romane<br />El Achour, Algérie</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neon-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Téléphone :</p>
                    <p>[À compléter]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neon-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email :</p>
                    <p>contact@papyris.dz</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hébergement */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">3. Hébergement du site</h2>
              <div className="space-y-3">
                <p><strong className="text-foreground">Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p><strong className="text-foreground">Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p><strong className="text-foreground">Contact :</strong> [Contact de l'hébergeur]</p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">4. Propriété intellectuelle</h2>
              <div className="space-y-4">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes) est la propriété 
                  exclusive de Papyris SARL ou de ses partenaires. Toute reproduction, distribution, modification, 
                  adaptation, retransmission ou publication de ces différents éléments est strictement interdite 
                  sans l'accord exprès par écrit de Papyris SARL.
                </p>
                <p>
                  La marque Papyris ainsi que son logo sont des marques déposées. Toute reproduction non autorisée 
                  de ces marques, logos et signes distinctifs constitue une contrefaçon passible de sanctions pénales.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">5. Limitation de responsabilité</h2>
              <div className="space-y-4">
                <p>
                  Papyris SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                  sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité 
                  des informations mises à disposition sur ce site.
                </p>
                <p>
                  Papyris SARL ne peut être tenue responsable des dommages directs ou indirects résultant 
                  de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes 
                  de données ou les intrusions virales.
                </p>
              </div>
            </section>

            {/* Protection des données */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">6. Protection des données personnelles</h2>
              <div className="space-y-4">
                <p>
                  Conformément à la loi n° 18-07 du 10 juin 2018 relative à la protection des personnes 
                  physiques dans le traitement des données à caractère personnel, vous disposez d'un droit 
                  d'accès, de rectification et de suppression des données vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, vous pouvez nous contacter à l'adresse : contact@papyris.dz
                </p>
                <p>
                  Pour plus d'informations, consultez notre{" "}
                  <a href="/privacy" className="text-neon-gold hover:underline">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">7. Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément 
                à notre politique de cookies.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit algérien. Tout litige relatif à 
                l'utilisation du site est soumis à la compétence exclusive des tribunaux algériens.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalNotice;
