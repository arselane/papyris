import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { projects, categories } from "@/data/projects";
import Lightbox from "./Lightbox";
import OptimizedImage from "@/components/OptimizedImage";

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (projectId: number) => {
    const index = filteredProjects.findIndex((p) => p.id === projectId);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = () => {
    setCurrentImageIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => Math.min(filteredProjects.length - 1, prev + 1));
  };

  return (
    <section id="realisations" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-gold/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="text-foreground">NOS</span>{" "}
            <span className="text-glow-cyan text-primary">RÉALISATIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection de nos projets les plus récents
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(190_100%_50%/0.4)]"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openLightbox(project.id)}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_hsl(190_100%_50%/0.15)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-primary text-sm font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-primary text-xs font-medium border border-primary/30">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        projects={filteredProjects}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  );
};

export default Portfolio;
