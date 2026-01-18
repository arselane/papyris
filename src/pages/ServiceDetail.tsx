import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, getServiceById } from "@/data/services";
import OptimizedImage from "@/components/OptimizedImage";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Service non trouvé</h1>
          <Link to="/">
            <Button variant="neon">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex(s => s.id === serviceId);
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <Link to="/#services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour aux services
          </Link>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            {service.longDescription}
          </p>
          
          <div className="mt-8">
            <span className="text-2xl font-display text-primary">{service.priceRange}</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border">
            <OptimizedImage
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="py-16 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]" />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-3xl text-foreground mb-6">
                Avantages
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-display text-3xl text-foreground mb-6">
                Applications
              </h2>
              <ul className="space-y-4">
                {service.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground text-center mb-12">
            Caractéristiques clés
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink mx-auto mb-4 flex items-center justify-center">
                  <Check className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-display text-xl text-foreground">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-neon-cyan/20 via-neon-pink/20 to-neon-purple/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Intéressé par ce service ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour obtenir un devis gratuit et personnalisé pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="neon-filled" size="xl">
                  Demander un devis gratuit
                </Button>
              </Link>
              {service.simulatorUrl && (
                <Link to={service.simulatorUrl}>
                  <Button variant="neon-gold" size="xl">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Essayer le simulateur
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-border">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link
                to={`/services/${prevService.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevService.shortTitle}</span>
              </Link>
            ) : (
              <div />
            )}
            
            <Link
              to="/#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tous les services
            </Link>
            
            {nextService ? (
              <Link
                to={`/services/${nextService.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="hidden sm:inline">{nextService.shortTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
