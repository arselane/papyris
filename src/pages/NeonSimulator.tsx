import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Download, Sparkles } from "lucide-react";

const NeonSimulator = () => {
  const [text, setText] = useState("PAPYRIS");
  const [color, setColor] = useState("cyan");
  const [fontSize, setFontSize] = useState([80]);
  const [font, setFont] = useState("display");

  const colors = [
    { name: "Cyan", value: "cyan", hex: "hsl(190, 100%, 50%)", glow: "0 0 20px hsl(190, 100%, 50%), 0 0 40px hsl(190, 100%, 50%), 0 0 60px hsl(190, 100%, 50%)" },
    { name: "Or", value: "gold", hex: "hsl(39, 97%, 60%)", glow: "0 0 20px hsl(39, 97%, 60%), 0 0 40px hsl(39, 97%, 60%), 0 0 60px hsl(39, 97%, 60%)" },
    { name: "Rose", value: "pink", hex: "hsl(320, 100%, 60%)", glow: "0 0 20px hsl(320, 100%, 60%), 0 0 40px hsl(320, 100%, 60%), 0 0 60px hsl(320, 100%, 60%)" },
    { name: "Rouge", value: "red", hex: "hsl(0, 100%, 60%)", glow: "0 0 20px hsl(0, 100%, 60%), 0 0 40px hsl(0, 100%, 60%), 0 0 60px hsl(0, 100%, 60%)" },
    { name: "Vert", value: "green", hex: "hsl(140, 100%, 50%)", glow: "0 0 20px hsl(140, 100%, 50%), 0 0 40px hsl(140, 100%, 50%), 0 0 60px hsl(140, 100%, 50%)" },
    { name: "Violet", value: "purple", hex: "hsl(280, 100%, 60%)", glow: "0 0 20px hsl(280, 100%, 60%), 0 0 40px hsl(280, 100%, 60%), 0 0 60px hsl(280, 100%, 60%)" },
    { name: "Bleu", value: "blue", hex: "hsl(220, 100%, 60%)", glow: "0 0 20px hsl(220, 100%, 60%), 0 0 40px hsl(220, 100%, 60%), 0 0 60px hsl(220, 100%, 60%)" },
  ];

  const fonts = [
    { name: "Display (Recommandé)", value: "display" },
    { name: "Script", value: "script" },
    { name: "Modern", value: "modern" },
    { name: "Bold", value: "bold" },
  ];

  const currentColor = colors.find(c => c.value === color) || colors[0];

  const getFontFamily = () => {
    switch (font) {
      case "display":
        return "var(--font-display)";
      case "script":
        return "cursive";
      case "modern":
        return "system-ui, sans-serif";
      case "bold":
        return "Impact, sans-serif";
      default:
        return "var(--font-display)";
    }
  };

  const handleDownload = () => {
    // Logique simple de téléchargement (peut être améliorée)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 1200;
    canvas.height = 400;
    
    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Text
    ctx.font = `${fontSize[0]}px ${font}`;
    ctx.fillStyle = currentColor.hex;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Download
    const link = document.createElement('a');
    link.download = 'neon-preview.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Simulateur Interactif
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-cyan text-primary">CRÉEZ VOTRE</span>
              <br />
              <span className="text-foreground">NÉON PERSONNALISÉ</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualisez votre enseigne néon en temps réel et demandez un devis instantané
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Preview Area */}
            <div className="order-2 lg:order-1">
              <div className="bg-black rounded-2xl border border-border p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                {/* Background effect */}
                <div 
                  className="absolute inset-0 opacity-20 blur-[100px]"
                  style={{ backgroundColor: currentColor.hex }}
                />
                
                {/* Neon Tube Effect with Multiple Layers */}
                <div className="relative z-10 w-full px-4" style={{ display: "grid", placeItems: "center" }}>
                  <div style={{ gridArea: "1/1", display: "grid", placeItems: "center", width: "100%", maxWidth: "100%" }}>
                    {/* Outer glow - halo lumineux large */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: currentColor.hex,
                        opacity: 0.3,
                        filter: "blur(30px)",
                        textShadow: `0 0 50px ${currentColor.hex}, 
                                     0 0 100px ${currentColor.hex}`,
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Medium glow */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: currentColor.hex,
                        opacity: 0.5,
                        filter: "blur(15px)",
                        textShadow: `0 0 30px ${currentColor.hex}`,
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Tube base - fond sombre du tube */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: "rgba(0, 0, 0, 0.8)",
                        WebkitTextStroke: `8px rgba(0, 0, 0, 0.5)`,
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Tube glass effect - verre transparent */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: "transparent",
                        WebkitTextStroke: `4px ${currentColor.hex}`,
                        opacity: 0.6,
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Tube highlight - reflet supérieur */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: "transparent",
                        WebkitTextStroke: `2px rgba(255, 255, 255, 0.8)`,
                        opacity: 0.4,
                        filter: "blur(1px)",
                        transform: "translateY(-2px)",
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Inner light - lumière interne forte */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: currentColor.hex,
                        filter: "blur(5px)",
                        opacity: 0.9,
                        textShadow: `0 0 10px ${currentColor.hex}, 
                                     0 0 20px ${currentColor.hex}`,
                      }}
                    >
                      {text || "Votre texte"}
                    </p>
                    
                    {/* Core light - cœur très lumineux */}
                    <p
                      style={{
                        gridArea: "1/1",
                        fontFamily: getFontFamily(),
                        fontSize: `${fontSize[0]}px`,
                        fontWeight: "900",
                        letterSpacing: font === "display" ? "0.1em" : "0.05em",
                        lineHeight: 1.2,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        maxWidth: "100%",
                        textAlign: "center",
                        color: "#ffffff",
                        filter: "blur(2px)",
                        opacity: 0.8,
                        textShadow: `0 0 5px #ffffff`,
                      }}
                      className="animate-pulse-glow"
                    >
                      {text || "Votre texte"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <Button 
                  variant="neon-gold" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger
                </Button>
                <a href="/quote" className="flex-1">
                  <Button variant="neon-gold-filled" size="lg" className="w-full">
                    Demander un devis
                  </Button>
                </a>
              </div>
            </div>

            {/* Controls */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border space-y-6">
                <h2 className="font-display text-2xl text-foreground">
                  Personnalisation
                </h2>

                {/* Text Input */}
                <div className="space-y-2">
                  <Label htmlFor="text" className="text-foreground">
                    Votre texte
                  </Label>
                  <Input
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Entrez votre texte"
                    className="bg-background text-lg"
                    maxLength={30}
                  />
                  <p className="text-muted-foreground text-xs">
                    {text.length}/30 caractères
                  </p>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground">Couleur du néon</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setColor(c.value)}
                        className={`relative h-16 rounded-lg border-2 transition-all ${
                          color === c.value
                            ? "border-white scale-105"
                            : "border-border hover:border-white/50"
                        }`}
                        style={{ backgroundColor: c.hex }}
                      >
                        {color === c.value && (
                          <div className="absolute inset-0 rounded-lg" style={{ boxShadow: c.glow }} />
                        )}
                        <span className="absolute bottom-1 left-0 right-0 text-xs text-white font-medium text-center drop-shadow-lg">
                          {c.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground">Style de police</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {fonts.map((f) => (
                      <button
                        key={f.value}
                        onClick={() => setFont(f.value)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          font === f.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        <span className="text-foreground font-medium text-sm">
                          {f.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Slider */}
                <div className="space-y-3">
                  <Label className="text-foreground">
                    Taille du texte: {fontSize[0]}px
                  </Label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    min={40}
                    max={120}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-r from-neon-gold/10 to-neon-cyan/10 rounded-xl p-6 border border-neon-gold/30">
                <h3 className="text-foreground font-medium mb-2">
                  💡 Informations utiles
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Personnalisation totale des couleurs</li>
                  <li>• Fabrication sur-mesure</li>
                  <li>• Installation professionnelle incluse</li>
                  <li>• Garantie 2 ans</li>
                  <li>• Devis gratuit sous 24h</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-16">
            <h2 className="font-display text-2xl text-foreground text-center mb-8">
              Exemples populaires
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { text: "OPEN", color: "cyan" },
                { text: "CAFÉ", color: "gold" },
                { text: "LOVE", color: "pink" },
                { text: "BAR", color: "red" },
              ].map((example, index) => {
                const exampleColor = colors.find(c => c.value === example.color);
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setText(example.text);
                      setColor(example.color);
                    }}
                    className="bg-black rounded-lg p-6 border border-border hover:border-primary/50 transition-all relative overflow-hidden"
                  >
                    <div className="relative">
                      {/* Outer glow */}
                      <p
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "32px",
                          fontWeight: "900",
                          color: exampleColor?.hex,
                          opacity: 0.3,
                          filter: "blur(15px)",
                          fontFamily: getFontFamily(),
                        }}
                      >
                        {example.text}
                      </p>
                      {/* Tube */}
                      <p
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "32px",
                          fontWeight: "900",
                          color: "transparent",
                          WebkitTextStroke: `3px ${exampleColor?.hex}`,
                          opacity: 0.6,
                          fontFamily: getFontFamily(),
                        }}
                      >
                        {example.text}
                      </p>
                      {/* Highlight */}
                      <p
                        style={{
                          position: "absolute",
                          top: "calc(50% - 1px)",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "32px",
                          fontWeight: "900",
                          color: "transparent",
                          WebkitTextStroke: `1px rgba(255, 255, 255, 0.6)`,
                          opacity: 0.4,
                          filter: "blur(1px)",
                          fontFamily: getFontFamily(),
                        }}
                      >
                        {example.text}
                      </p>
                      {/* Inner light */}
                      <p
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "32px",
                          fontWeight: "900",
                          color: exampleColor?.hex,
                          opacity: 0.8,
                          filter: "blur(3px)",
                          fontFamily: getFontFamily(),
                        }}
                      >
                        {example.text}
                      </p>
                      {/* Core */}
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: "900",
                          color: "#ffffff",
                          filter: "blur(1px)",
                          opacity: 0.7,
                          fontFamily: getFontFamily(),
                        }}
                        className="animate-pulse-glow relative"
                      >
                        {example.text}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NeonSimulator;
