import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload } from "lucide-react";

const QuoteRequest = () => {
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { value: "enseignes", label: "Enseignes Lumineuses LED" },
    { value: "neonflex", label: "NeonFlex LED" },
    { value: "autocollants", label: "Autocollants / Vinyle" },
    { value: "cadres-lumineux", label: "Cadres Lumineux" },
    { value: "covering", label: "Covering Véhicule" },
    { value: "signaletique", label: "Signalétique Complète" },
    { value: "autre", label: "Autre / Projet sur mesure" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-3xl p-12 border border-neon-gold/30 text-center">
              <div className="w-20 h-20 rounded-full bg-neon-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-neon-gold" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4">
                Demande envoyée avec succès !
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Merci pour votre demande de devis. Notre équipe va l'étudier et vous 
                recontactera dans les plus brefs délais (sous 24-48h).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="neon-gold-filled" size="lg">
                    Retour à l'accueil
                  </Button>
                </Link>
                <a href="/#realisations">
                  <Button variant="neon-gold" size="lg">
                    Voir nos réalisations
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-neon-gold/30 text-neon-gold text-sm font-medium mb-6">
              Devis Gratuit
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-gold text-neon-gold">DEMANDEZ VOTRE</span>
              <br />
              <span className="text-foreground">DEVIS GRATUIT</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Décrivez-nous votre projet et recevez une estimation détaillée sous 24-48h
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Type de Service */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <h2 className="font-display text-2xl text-foreground mb-4">
                1. Votre Projet
              </h2>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">
                  Type de service <span className="text-neon-gold">*</span>
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService} required>
                  <SelectTrigger id="service" className="bg-background">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">
                  Description du projet <span className="text-neon-gold">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre projet en détail : utilisation prévue, dimensions souhaitées, couleurs, emplacement (intérieur/extérieur), etc."
                  className="bg-background min-h-[120px]"
                  required
                />
              </div>

              {/* Champs conditionnels selon le service */}
              {selectedService && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {(selectedService === "enseignes" || selectedService === "cadres-lumineux" || selectedService === "neonflex") && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="dimensions" className="text-foreground">
                          Dimensions approximatives
                        </Label>
                        <Input
                          id="dimensions"
                          placeholder="Ex: 2m x 1m"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-foreground">
                          Emplacement
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Intérieur / Extérieur" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="interieur">Intérieur</SelectItem>
                            <SelectItem value="exterieur">Extérieur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                  
                  {(selectedService === "autocollants" || selectedService === "covering") && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="surface" className="text-foreground">
                          Surface à couvrir
                        </Label>
                        <Input
                          id="surface"
                          placeholder="Ex: 10m²"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="support" className="text-foreground">
                          Type de support
                        </Label>
                        <Input
                          id="support"
                          placeholder="Ex: Vitrine, Véhicule, Mur"
                          className="bg-background"
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-foreground">
                      Quantité
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="1"
                      min="1"
                      defaultValue="1"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline" className="text-foreground">
                      Délai souhaité
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (moins de 7 jours)</SelectItem>
                        <SelectItem value="normal">Normal (2-3 semaines)</SelectItem>
                        <SelectItem value="flexible">Flexible (plus d'1 mois)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Upload fichiers */}
              <div className="space-y-2">
                <Label htmlFor="files" className="text-foreground">
                  Fichiers / Visuels
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-neon-gold/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm mb-1">
                    Glissez vos fichiers ici ou cliquez pour parcourir
                  </p>
                  <p className="text-muted-foreground text-xs">
                    PNG, JPG, PDF, AI - Max 10MB
                  </p>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.ai"
                    className="hidden"
                  />
                </div>
                <p className="text-muted-foreground text-xs">
                  Logo, design, photos de référence, etc.
                </p>
              </div>
            </div>

            {/* Informations Client */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <h2 className="font-display text-2xl text-foreground mb-4">
                2. Vos Coordonnées
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">
                    Prénom <span className="text-neon-gold">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Votre prénom"
                    className="bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">
                    Nom <span className="text-neon-gold">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Votre nom"
                    className="bg-background"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-neon-gold">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Téléphone <span className="text-neon-gold">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+213 XXX XXX XXX"
                    className="bg-background"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">
                  Entreprise (optionnel)
                </Label>
                <Input
                  id="company"
                  placeholder="Nom de votre entreprise"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground">
                  Adresse / Ville <span className="text-neon-gold">*</span>
                </Label>
                <Input
                  id="address"
                  placeholder="Alger, Oran, Constantine..."
                  className="bg-background"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-foreground">
                  Budget estimé (optionnel)
                </Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Sélectionnez une fourchette" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-50k">Moins de 50 000 DA</SelectItem>
                    <SelectItem value="50k-100k">50 000 - 100 000 DA</SelectItem>
                    <SelectItem value="100k-200k">100 000 - 200 000 DA</SelectItem>
                    <SelectItem value="200k-500k">200 000 - 500 000 DA</SelectItem>
                    <SelectItem value="more-500k">Plus de 500 000 DA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button type="submit" variant="neon-gold-filled" size="lg" className="text-lg">
                Envoyer ma demande
              </Button>
              <Link to="/">
                <Button type="button" variant="neon-gold" size="lg" className="text-lg w-full sm:w-auto">
                  Annuler
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground text-sm text-center">
              En soumettant ce formulaire, vous acceptez notre{" "}
              <a href="/privacy" className="text-neon-gold hover:underline">
                politique de confidentialité
              </a>
              . Nous nous engageons à répondre sous 24-48h.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuoteRequest;
