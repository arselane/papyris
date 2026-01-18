import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Animated Logo or Loader */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-pink animate-spin" 
               style={{ 
                 maskImage: "radial-gradient(circle, transparent 45%, black 45%)",
                 WebkitMaskImage: "radial-gradient(circle, transparent 45%, black 45%)"
               }} 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-foreground">
            Chargement<span className="animate-pulse">...</span>
          </h3>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-neon-gold animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-neon-pink animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
