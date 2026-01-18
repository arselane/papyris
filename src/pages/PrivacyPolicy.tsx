import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
              Confidentialité
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-cyan text-primary">POLITIQUE DE</span>
              <br />
              <span className="text-foreground">CONFIDENTIALITÉ</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            {/* Introduction */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">Introduction</h2>
              </div>
              <p>
                Papyris SARL s'engage à protéger la confidentialité des données personnelles de ses utilisateurs 
                et clients. Cette politique de confidentialité explique comment nous collectons, utilisons, 
                partageons et protégeons vos informations personnelles conformément à la loi n° 18-07 du 10 juin 2018 
                relative à la protection des personnes physiques dans le traitement des données à caractère personnel.
              </p>
            </section>

            {/* Données collectées */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-neon-gold" />
                </div>
                <h2 className="font-display text-2xl text-foreground">1. Données collectées</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">1.1. Données fournies directement</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Informations sur votre entreprise (nom, secteur d'activité)</li>
                    <li>Détails des projets et besoins spécifiques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">1.2. Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Données de navigation (cookies)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Utilisation */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-neon-pink" />
                </div>
                <h2 className="font-display text-2xl text-foreground">2. Utilisation des données</h2>
              </div>
              <div className="space-y-3">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Traiter vos demandes de devis et commandes</li>
                  <li>Vous contacter concernant vos projets</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
                  <li>Assurer le suivi de la relation client</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </section>

            {/* Partage */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">3. Partage des données</h2>
              <div className="space-y-4">
                <p>
                  Nous ne vendons, ne louons ni ne divulguons vos données personnelles à des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Avec nos prestataires de services (hébergement, paiement, livraison) sous accord de confidentialité</li>
                  <li>Si requis par la loi ou une autorité judiciaire</li>
                  <li>Pour protéger nos droits et propriété</li>
                </ul>
              </div>
            </section>

            {/* Sécurité */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">4. Sécurité des données</h2>
              </div>
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. 
                Ces mesures incluent le cryptage, les pare-feu, les contrôles d'accès et la formation du personnel.
              </p>
            </section>

            {/* Conservation */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">5. Conservation des données</h2>
              <p>
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables. 
                Les données relatives aux clients sont conservées pendant la durée de la relation commerciale 
                et jusqu'à 3 ans après la fin de celle-ci.
              </p>
            </section>

            {/* Droits */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">6. Vos droits</h2>
              <div className="space-y-4">
                <p>Conformément à la législation en vigueur, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                  <li><strong className="text-foreground">Droit à l'effacement :</strong> Supprimer vos données dans certaines conditions</li>
                  <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <span className="text-neon-gold">contact@papyris.dz</span>
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">7. Cookies</h2>
              <div className="space-y-4">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies 
                  sont de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre 
                  navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
                <p>
                  Types de cookies utilisés :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies essentiels (fonctionnement du site)</li>
                  <li>Cookies analytiques (analyse du trafic)</li>
                  <li>Cookies de préférence (mémorisation de vos choix)</li>
                </ul>
              </div>
            </section>

            {/* Modifications */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">8. Modifications de la politique</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous 
                encourageons à consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-2xl p-8 border border-neon-gold/30">
              <h2 className="font-display text-2xl text-foreground mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos 
                données personnelles, contactez-nous :
              </p>
              <div className="mt-4 space-y-2">
                <p><strong className="text-foreground">Email :</strong> contact@papyris.dz</p>
                <p><strong className="text-foreground">Adresse :</strong> PXVX+RFM, Rte de Oued Romane, El Achour, Algérie</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
