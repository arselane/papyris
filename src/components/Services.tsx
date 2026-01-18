import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import OptimizedImage from "@/components/OptimizedImage";

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-neon-gold/30 text-neon-gold text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">CE QUE NOUS</span>{" "}
            <span className="text-glow-gold text-neon-gold">CRÉONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions publicitaires innovantes pour faire briller votre marque
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-neon-gold/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(39_97%_60%/0.2)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16">
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-neon-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link to detail */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-neon-gold hover:text-neon-gold/80 transition-colors text-sm font-medium"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
