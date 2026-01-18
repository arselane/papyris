import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, CreditCard, Clock, Shield, Package, AlertCircle } from "lucide-react";

const TermsOfSale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-neon-gold/30 text-neon-gold text-sm font-medium mb-6">
              Conditions Générales de Vente
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-gold text-neon-gold">CONDITIONS</span>
              <br />
              <span className="text-foreground">GÉNÉRALES DE VENTE</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            {/* Article 1 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">1. Objet et Champ d'Application</h2>
              </div>
              <div className="space-y-4">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) régissent toutes les ventes de produits et 
                  services proposés par Papyris SARL (ci-après "Papyris") à ses clients professionnels et particuliers.
                </p>
                <p>
                  Papyris est spécialisé dans la conception, la fabrication et l'installation de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enseignes lumineuses LED</li>
                  <li>Néon flexible (NeonFlex LED)</li>
                  <li>Autocollants et vinyle adhésif</li>
                  <li>Cadres lumineux (lightbox)</li>
                  <li>Covering véhicule</li>
                  <li>Signalétique intérieure et extérieure</li>
                </ul>
                <p className="mt-4">
                  Toute commande implique l'acceptation sans réserve des présentes CGV.
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-neon-gold" />
                </div>
                <h2 className="font-display text-2xl text-foreground">2. Devis et Commandes</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">2.1. Devis</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les devis sont gratuits et établis sur demande</li>
                    <li>Validité : 30 jours à compter de la date d'émission</li>
                    <li>Les devis détaillent les prestations, quantités, prix et délais</li>
                    <li>Tout devis signé vaut commande ferme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">2.2. Validation de commande</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Le client doit retourner le devis daté, signé et avec la mention "Bon pour accord"</li>
                    <li>Un acompte de 40% est requis à la commande</li>
                    <li>La commande ne devient définitive qu'après réception de l'acompte</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">2.3. Bon à tirer (BAT)</h3>
                  <p>
                    Pour les créations graphiques, un BAT sera soumis au client pour validation. Le client dispose 
                    de 5 jours ouvrés pour formuler ses remarques. Passé ce délai, le BAT est considéré comme validé.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 3 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-neon-pink" />
                </div>
                <h2 className="font-display text-2xl text-foreground">3. Prix et Modalités de Paiement</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">3.1. Prix</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les prix sont exprimés en Dinars Algériens (DA), Hors Taxes</li>
                    <li>TVA applicable : 19% (taux en vigueur)</li>
                    <li>Les prix incluent la fabrication et excluent l'installation sauf mention contraire</li>
                    <li>Frais de déplacement et d'installation facturés en sus selon localisation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">3.2. Modalités de règlement</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Acompte :</strong> 40% à la commande</li>
                    <li><strong className="text-foreground">Solde :</strong> 60% à la livraison ou installation</li>
                    <li>Moyens de paiement acceptés : espèces, virement bancaire, chèque</li>
                    <li>Pour les clients professionnels : paiement à 30 jours sur accord préalable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">3.3. Retard de paiement</h3>
                  <p>
                    Tout retard de paiement entraînera automatiquement l'application de pénalités de retard au taux 
                    légal en vigueur, ainsi qu'une indemnité forfaitaire de 40 DA pour frais de recouvrement.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 4 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">4. Délais de Fabrication et Livraison</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">4.1. Délais indicatifs</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Autocollants simples : 3-5 jours ouvrés</li>
                    <li>NeonFlex sur mesure : 7-10 jours ouvrés</li>
                    <li>Enseignes lumineuses : 10-15 jours ouvrés</li>
                    <li>Cadres lumineux : 5-7 jours ouvrés</li>
                    <li>Projets complexes : délais définis au devis</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    * Délais à compter de la validation du BAT et réception de l'acompte
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">4.2. Installation</h3>
                  <p>
                    Les délais d'installation sont convenus avec le client après la fabrication. 
                    L'installation nécessite un accès facilité au lieu de pose et peut être reportée 
                    en cas d'intempéries pour les installations extérieures.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">4.3. Force majeure</h3>
                  <p>
                    Papyris ne saurait être tenue responsable des retards de livraison dus à des cas de 
                    force majeure (grèves, catastrophes naturelles, ruptures d'approvisionnement, etc.).
                  </p>
                </div>
              </div>
            </section>

            {/* Article 5 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-gold/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-neon-gold" />
                </div>
                <h2 className="font-display text-2xl text-foreground">5. Livraison et Réception</h2>
              </div>
              <div className="space-y-4">
                <p>
                  La livraison s'effectue à l'adresse indiquée par le client. En cas d'installation, 
                  celle-ci est réalisée par nos équipes techniques qualifiées.
                </p>
                <div>
                  <h3 className="text-foreground font-medium mb-2">5.1. Vérification à la réception</h3>
                  <p>
                    Le client est tenu de vérifier l'état de la marchandise à la réception. Toute anomalie 
                    (dommage, manquant) doit être signalée dans les 48 heures suivant la réception.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">5.2. Procès-verbal d'installation</h3>
                  <p>
                    Un procès-verbal d'installation est signé par le client et Papyris attestant de la bonne 
                    exécution des travaux.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 6 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground">6. Garanties</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">6.1. Garantie fabricant</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enseignes LED : 2 ans pièces et main-d'œuvre</li>
                    <li>NeonFlex : 2 ans</li>
                    <li>Autocollants : 5-7 ans (selon type de vinyle)</li>
                    <li>Cadres lumineux : 2 ans</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">6.2. Exclusions de garantie</h3>
                  <p>La garantie ne couvre pas :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les dommages résultant d'une mauvaise utilisation</li>
                    <li>Les modifications effectuées par des tiers</li>
                    <li>L'usure normale</li>
                    <li>Les dommages dus aux intempéries exceptionnelles</li>
                    <li>Le vandalisme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">6.3. Maintenance</h3>
                  <p>
                    Des contrats de maintenance préventive et corrective peuvent être souscrits. 
                    Contactez-nous pour un devis personnalisé.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 7 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">7. Propriété Intellectuelle</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">7.1. Créations graphiques</h3>
                  <p>
                    Les créations graphiques réalisées par Papyris restent sa propriété exclusive. 
                    Le client bénéficie d'un droit d'usage limité à l'utilisation sur le support commandé.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">7.2. Fichiers clients</h3>
                  <p>
                    Le client garantit disposer de tous les droits nécessaires sur les visuels, logos 
                    et textes fournis. Papyris ne saurait être tenue responsable en cas de contrefaçon.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">7.3. Droit d'utilisation marketing</h3>
                  <p>
                    Papyris se réserve le droit d'utiliser les photos des réalisations à des fins 
                    promotionnelles (site web, réseaux sociaux, portfolio) sauf opposition écrite du client.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 8 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-neon-pink" />
                </div>
                <h2 className="font-display text-2xl text-foreground">8. Annulation et Modification</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-medium mb-2">8.1. Annulation par le client</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Avant démarrage fabrication : acompte non remboursable</li>
                    <li>Après démarrage fabrication : 50% du montant total</li>
                    <li>Produit fabriqué non installé : 80% du montant total</li>
                    <li>Produit installé : 100% du montant dû</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">8.2. Modifications en cours de production</h3>
                  <p>
                    Toute modification demandée après validation du BAT entraîne un supplément tarifaire 
                    et un délai supplémentaire.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 9 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">9. Responsabilité</h2>
              <div className="space-y-4">
                <p>
                  La responsabilité de Papyris est limitée au montant de la commande. Papyris ne saurait 
                  être tenue responsable des dommages indirects (perte d'exploitation, manque à gagner, etc.).
                </p>
                <p>
                  Le client s'engage à obtenir les autorisations nécessaires pour l'installation d'enseignes 
                  (mairie, syndic de copropriété, etc.). Papyris décline toute responsabilité en cas de 
                  non-conformité réglementaire.
                </p>
              </div>
            </section>

            {/* Article 10 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">10. Données Personnelles</h2>
              <p>
                Les données personnelles collectées sont traitées conformément à notre{" "}
                <a href="/privacy" className="text-neon-gold hover:underline">
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>

            {/* Article 11 */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-2xl text-foreground mb-4">11. Litiges</h2>
              <div className="space-y-4">
                <p>
                  Les présentes CGV sont régies par le droit algérien. En cas de litige, une solution 
                  amiable sera recherchée avant toute action judiciaire.
                </p>
                <p>
                  À défaut de résolution amiable, les tribunaux d'Alger seront seuls compétents.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-2xl p-8 border border-neon-gold/30">
              <h2 className="font-display text-2xl text-foreground mb-4">Contact</h2>
              <p className="mb-4">
                Pour toute question concernant ces Conditions Générales de Vente :
              </p>
              <div className="space-y-2">
                <p><strong className="text-foreground">Papyris SARL</strong></p>
                <p>PXVX+RFM, Rte de Oued Romane, El Achour, Algérie</p>
                <p><strong className="text-foreground">Email :</strong> contact@papyris.dz</p>
                <p><strong className="text-foreground">Téléphone :</strong> [À compléter]</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfSale;
