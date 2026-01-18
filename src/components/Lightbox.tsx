import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  projects: Array<{ id: number; title: string; category: string; image: string; description: string }>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ isOpen, currentIndex, projects, onClose, onPrev, onNext }: LightboxProps) => {
  const project = projects[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[70vh] object-contain"
            loading="lazy"
            decoding="async"
          />

          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
            <span className="text-primary text-sm font-medium">{project.category}</span>
            <h3 className="font-display text-2xl text-foreground mt-1">{project.title}</h3>
            <p className="text-muted-foreground mt-2">{project.description}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Précédent</span>
          </button>

          <span className="text-muted-foreground">
            {currentIndex + 1} / {projects.length}
          </span>

          <button
            onClick={onNext}
            disabled={currentIndex === projects.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
