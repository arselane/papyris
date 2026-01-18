import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour votre devis.",
    });

    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neon-gold/10 rounded-full blur-[200px] -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[200px] -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-neon-gold/30 text-neon-gold text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">PARLONS DE VOTRE</span>{" "}
            <span className="text-glow-gold text-neon-gold">PROJET</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+213 6 00 00 00 00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Type de projet
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="enseigne">Enseigne lumineuse</option>
                  <option value="neonflex">NeonFlex</option>
                  <option value="autocollants">Autocollants</option>
                  <option value="cadres">Cadres lumineux</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <Button variant="neon-gold-filled" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-neon-gold/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-gold/10 flex items-center justify-center text-neon-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Rte de Oued Romane<br />
                    El Achour, Algérie
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-neon-cyan/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">
                    +213 1 23 45 67 89<br />
                    +213 6 12 34 56 78
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-neon-pink/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    contact@papyris.com<br />
                    devis@papyris.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-neon-gold/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-gold/10 flex items-center justify-center text-neon-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: 10h00 - 14h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
