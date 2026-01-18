import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Download, Upload, Shirt, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import OptimizedImage from "@/components/OptimizedImage";
import { textileImages } from "@/data/textileImages";

export default function TextileSimulator() {
  const [product, setProduct] = useState<"tshirt" | "sweat" | "polo" | "cap">("tshirt");
  const [view, setView] = useState<"front" | "back">("front");
  const [productColor, setProductColor] = useState<"white" | "black" | "green" | "red" | "blue">("white");
  const [logo, setLogo] = useState<string>("");
  const [logoSize, setLogoSize] = useState([50]);
  const [logoX, setLogoX] = useState(50);
  const [logoY, setLogoY] = useState(40);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  
  // Text customization
  const [customText, setCustomText] = useState("");
  const [textFont, setTextFont] = useState("Arial");
  const [textSize, setTextSize] = useState([40]);
  const [textColor, setTextColor] = useState("#000000");
  const [textRotation, setTextRotation] = useState([0]);
  const [textX, setTextX] = useState(50);
  const [textY, setTextY] = useState(60);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const products = [
    { id: "tshirt", name: "T-shirt" },
    { id: "sweat", name: "Sweat" },
    { id: "polo", name: "Polo" },
    { id: "cap", name: "Casquette" },
  ];

  const colors = [
    { name: "Blanc", value: "white", hex: "#ffffff" },
    { name: "Noir", value: "black", hex: "#1a1a1a" },
    { name: "Vert", value: "green", hex: "#16a34a" },
    { name: "Rouge", value: "red", hex: "#dc2626" },
    { name: "Bleu", value: "blue", hex: "#2563eb" },
  ];

  const fonts = [
    { name: "Arial", value: "Arial, sans-serif" },
    { name: "Impact", value: "Impact, sans-serif" },
    { name: "Times", value: "Times New Roman, serif" },
    { name: "Courier", value: "Courier New, monospace" },
    { name: "Georgia", value: "Georgia, serif" },
    { name: "Verdana", value: "Verdana, sans-serif" },
  ];

  const textColors = [
    { name: "Noir", value: "#000000" },
    { name: "Blanc", value: "#ffffff" },
    { name: "Rouge", value: "#dc2626" },
    { name: "Bleu", value: "#2563eb" },
    { name: "Vert", value: "#16a34a" },
    { name: "Jaune", value: "#eab308" },
    { name: "Orange", value: "#ea580c" },
    { name: "Rose", value: "#ec4899" },
  ];

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startLogoX = logoX;
    const startLogoY = logoY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = ((moveEvent.clientX - startX) / rect.width) * 100;
      const deltaY = ((moveEvent.clientY - startY) / rect.height) * 100;
      setLogoX(Math.max(0, Math.min(100, startLogoX + deltaX)));
      setLogoY(Math.max(0, Math.min(100, startLogoY + deltaY)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTextDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startTextX = textX;
    const startTextY = textY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = ((moveEvent.clientX - startX) / rect.width) * 100;
      const deltaY = ((moveEvent.clientY - startY) / rect.height) * 100;
      setTextX(Math.max(0, Math.min(100, startTextX + deltaX)));
      setTextY(Math.max(0, Math.min(100, startTextY + deltaY)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const resetLogo = () => {
    setLogo("");
    setLogoSize([50]);
    setLogoX(50);
    setLogoY(40);
  };

  const resetText = () => {
    setCustomText("");
    setTextSize([40]);
    setTextX(50);
    setTextY(60);
    setTextRotation([0]);
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = `papyris-textile-${product}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
    }
  };

  const getProductImage = () => {
    const colorName = colors.find(c => c.value === productColor)?.name || productColor;

    if (product === "tshirt") {
      const images = textileImages.tshirt[view][productColor];
      
      return (
        <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
          <OptimizedImage
            src={images.png}
            srcWebp={images.webp}
            alt={`T-shirt ${colorName} - ${view === "front" ? "avant" : "arrière"}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      );
    }

    if (product === "polo") {
      const images = textileImages.polo[view][productColor];
      
      return (
        <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
          <OptimizedImage
            src={images.png}
            srcWebp={images.webp}
            alt={`Polo ${colorName} - ${view === "front" ? "avant" : "arrière"}`}
            style={{
              width: "95%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      );
    }

    if (product === "cap") {
      const images = textileImages.cap[productColor];
      
      return (
        <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
          <OptimizedImage
            src={images.png}
            srcWebp={images.webp}
            alt={`Casquette ${colorName}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      );
    }
    
    // Sweat
    if (product === "sweat") {
      const images = textileImages.sweat[view][productColor];
      
      return (
        <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
          <OptimizedImage
            src={images.png}
            srcWebp={images.webp}
            alt={`Sweat ${colorName} - ${view === "front" ? "avant" : "arrière"}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
              <Shirt className="inline w-4 h-4 mr-2" />
              Simulateur Textile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl mb-4">
              <span className="text-glow-cyan text-primary">PERSONNALISEZ VOS</span>
              <br />
              <span className="text-foreground">VÊTEMENTS</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualisez votre logo sur différents produits textiles en temps réel
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Preview Area */}
            <div>
              <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
                {product !== "cap" && (
                  <div className="flex justify-center gap-4">
                    <Button
                      variant={view === "front" ? "default" : "outline"}
                      onClick={() => setView("front")}
                    >
                      Vue Avant
                    </Button>
                    <Button
                      variant={view === "back" ? "default" : "outline"}
                      onClick={() => setView("back")}
                    >
                      Vue Arrière
                    </Button>
                  </div>
                )}

                <div
                  ref={canvasRef}
                  className={`relative w-full aspect-square border-2 rounded-lg overflow-hidden flex items-center justify-center transition-all ${
                    isDraggingOver ? "border-primary border-4 bg-primary/5" : "border-border"
                  }`}
                  style={{ backgroundColor: "#d1d5db" }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {/* Product */}
                  <div className="relative flex items-center justify-center">
                    {getProductImage()}
                    
                    {/* Logo */}
                    {logo && (
                      <img
                        src={logo}
                        alt="Logo"
                        className="absolute cursor-move pointer-events-auto select-none"
                        draggable={false}
                        style={{
                          left: `${logoX}%`,
                          top: `${logoY}%`,
                          transform: "translate(-50%, -50%)",
                          width: `${logoSize[0]}%`,
                          maxWidth: "180px",
                        }}
                        onMouseDown={handleLogoDrag}
                      />
                    )}

                    {/* Custom Text */}
                    {customText && (
                      <div
                        className="absolute cursor-move pointer-events-auto select-none"
                        style={{
                          left: `${textX}%`,
                          top: `${textY}%`,
                          transform: `translate(-50%, -50%) rotate(${textRotation[0]}deg)`,
                          fontSize: `${textSize[0]}px`,
                          fontFamily: textFont,
                          color: textColor,
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                          whiteSpace: "nowrap",
                        }}
                        onMouseDown={handleTextDrag}
                      >
                        {customText}
                      </div>
                    )}
                  </div>

                  {!logo && !customText && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center text-muted-foreground">
                        <Upload className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Uploadez votre logo ou ajoutez du texte</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <Button
                  variant="neon-gold"
                  size="lg"
                  className="flex-1"
                  onClick={handleDownload}
                  disabled={!logo && !customText}
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
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border space-y-6">
                <h2 className="font-display text-2xl text-foreground">Configuration</h2>

                {/* Product Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground">Type de produit</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {products.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProduct(p.id as any)}
                        className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          product === p.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground">Couleur du vêtement</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setProductColor(color.value as any)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          productColor === color.value
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div 
                          className="h-10 w-full rounded mb-2" 
                          style={{ 
                            backgroundColor: color.hex,
                            border: color.value === "white" ? "1px solid #e5e7eb" : "none"
                          }}
                        />
                        <div className="text-xs font-medium">{color.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-3">
                  <Label className="text-foreground">Logo</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {logo ? "Changer le logo" : "Uploader un logo"}
                  </Button>
                  {logo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-2"
                      onClick={resetLogo}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Réinitialiser
                    </Button>
                  )}
                </div>

                {/* Logo Size */}
                {logo && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-foreground">Taille du logo</Label>
                      <span className="text-sm text-muted-foreground">{logoSize[0]}%</span>
                    </div>
                    <Slider
                      value={logoSize}
                      onValueChange={setLogoSize}
                      min={20}
                      max={100}
                      step={5}
                      className="py-4"
                    />
                  </div>
                )}

                {/* Custom Text */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <Label className="text-foreground">Texte personnalisé</Label>
                  <Input
                    type="text"
                    placeholder="Entrez votre texte..."
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                  />
                  {customText && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={resetText}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Supprimer le texte
                    </Button>
                  )}
                </div>

                {/* Text Settings */}
                {customText && (
                  <>
                    <div className="space-y-3">
                      <Label className="text-foreground">Police</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {fonts.map((font) => (
                          <button
                            key={font.name}
                            onClick={() => setTextFont(font.value)}
                            className={`p-2 rounded-lg border-2 transition-all text-sm ${
                              textFont === font.value
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{ fontFamily: font.value }}
                          >
                            {font.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground">Couleur du texte</Label>
                      <div className="grid grid-cols-8 gap-2">
                        {textColors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => setTextColor(color.value)}
                            className={`h-10 rounded-lg border-2 transition-all ${
                              textColor === color.value
                                ? "border-primary scale-105"
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{ 
                              backgroundColor: color.value,
                              border: color.value === "#ffffff" ? "2px solid #e5e7eb" : undefined
                            }}
                            title={color.name}
                          >
                            <span className="sr-only">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label className="text-foreground">Taille du texte</Label>
                        <span className="text-sm text-muted-foreground">{textSize[0]}px</span>
                      </div>
                      <Slider
                        value={textSize}
                        onValueChange={setTextSize}
                        min={1}
                        max={100}
                        step={1}
                        className="py-4"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label className="text-foreground">Rotation</Label>
                        <span className="text-sm text-muted-foreground">{textRotation[0]}°</span>
                      </div>
                      <Slider
                        value={textRotation}
                        onValueChange={setTextRotation}
                        min={0}
                        max={360}
                        step={1}
                        className="py-4"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="bg-card/50 rounded-xl p-4 border border-border space-y-3">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Astuce :</strong> Glissez-déposez votre logo ou texte directement sur le vêtement pour le positionner. Vous pouvez combiner logo et texte sur le même produit.
                </p>
                <p className="text-sm text-muted-foreground">
                  ℹ️ <strong>Personnalisation :</strong> Impression ou broderie disponibles - à préciser lors de votre demande de devis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
