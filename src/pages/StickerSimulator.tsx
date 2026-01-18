import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Download, Upload, Plus, Trash2 } from "lucide-react";

interface Sticker {
  id: string;
  image: string;
  x: number;
  y: number;
  widthCm: number;
  heightCm: number;
  rotation: number;
}

export default function StickerSimulator() {
  const [mode, setMode] = useState<"wallpaper" | "multiple">("wallpaper");
  
  // Wall dimensions in meters
  const [wallWidth, setWallWidth] = useState(3);
  const [wallHeight, setWallHeight] = useState(2.5);
  
  // Wallpaper mode
  const [wallpaperImage, setWallpaperImage] = useState<string>("");
  const [wallpaperWidthCm, setWallpaperWidthCm] = useState(200);
  const [wallpaperHeightCm, setWallpaperHeightCm] = useState(150);
  const [wallpaperOpacity, setWallpaperOpacity] = useState([90]);
  const [wallpaperRepeat, setWallpaperRepeat] = useState(false);
  const [wallpaperX, setWallpaperX] = useState(50); // Position X in %
  const [wallpaperY, setWallpaperY] = useState(50); // Position Y in %
  
  // Multiple stickers mode
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  
  // Drag and drop states
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const wallTextures = [
    { name: "Blanc", color: "#f5f5f5", image: "linear-gradient(90deg, #f5f5f5 0%, #ffffff 100%)" },
    { name: "Beige", color: "#f5e6d3", image: "linear-gradient(90deg, #f5e6d3 0%, #faf0e6 100%)" },
    { name: "Gris", color: "#e0e0e0", image: "linear-gradient(90deg, #e0e0e0 0%, #eeeeee 100%)" },
    { name: "Bleu", color: "#e3f2fd", image: "linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)" },
  ];
  const [wallTexture, setWallTexture] = useState(wallTextures[0]);

  // Calculate display size as percentage based on real dimensions
  const calculateDisplayWidth = (widthCm: number) => {
    const wallWidthCm = wallWidth * 100; // Convert m to cm
    return (widthCm / wallWidthCm) * 100; // Return as percentage
  };

  const calculateDisplayHeight = (heightCm: number) => {
    const wallHeightCm = wallHeight * 100;
    return (heightCm / wallHeightCm) * 100;
  };

  const handleWallpaperUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setWallpaperImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Drag and drop handlers
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

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    if (mode === "wallpaper") {
      // For wallpaper mode, take the first file
      const file = files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setWallpaperImage(event.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else {
      // For multiple mode, add all image files
      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const newSticker: Sticker = {
              id: Math.random().toString(36).substr(2, 9),
              image: event.target?.result as string,
              x: 50,
              y: 50,
              widthCm: 30,
              heightCm: 30,
              rotation: 0,
            };
            setStickers((prev) => [...prev, newSticker]);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  const resetWallpaper = () => {
    setWallpaperImage("");
    setWallpaperWidthCm(200);
    setWallpaperHeightCm(150);
    setWallpaperOpacity([90]);
    setWallpaperRepeat(false);
    setWallpaperX(50);
    setWallpaperY(50);
  };

  const handleMultipleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newSticker: Sticker = {
            id: Date.now().toString() + Math.random(),
            image: event.target?.result as string,
            x: Math.random() * 50 + 25,
            y: Math.random() * 50 + 25,
            widthCm: 50,
            heightCm: 50,
            rotation: 0,
          };
          setStickers((prev) => [...prev, newSticker]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleStickerDrag = (id: string, e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const sticker = stickers.find(s => s.id === id);
    if (!sticker) return;

    const startStickerX = sticker.x;
    const startStickerY = sticker.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = ((moveEvent.clientX - startX) / rect.width) * 100;
      const deltaY = ((moveEvent.clientY - startY) / rect.height) * 100;
      
      setStickers((prev) =>
        prev.map((s) =>
          s.id === id
            ? { ...s, x: Math.max(0, Math.min(95, startStickerX + deltaX)), y: Math.max(0, Math.min(95, startStickerY + deltaY)) }
            : s
        )
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const updateSelectedSticker = (updates: Partial<Sticker>) => {
    if (!selectedSticker) return;
    setStickers((prev) =>
      prev.map((s) => (s.id === selectedSticker ? { ...s, ...updates } : s))
    );
  };

  const deleteSticker = (id: string) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
    if (selectedSticker === id) setSelectedSticker(null);
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    
    try {
      // Capture the canvas element
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2, // Higher quality
        logging: false,
        useCORS: true, // Allow cross-origin images
      });
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `papyris-stickers-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Erreur lors du téléchargement. Veuillez réessayer.');
    }
  };

  const selectedStickerData = stickers.find(s => s.id === selectedSticker);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Simulateur d'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-pink">
              Autocollants Muraux
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualisez vos autocollants sur un mur avant de commander
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div
              ref={canvasRef}
              className={`relative w-full aspect-video border-2 rounded-lg overflow-hidden shadow-lg transition-all ${
                isDraggingOver ? "border-primary border-4 bg-primary/5" : "border-border"
              }`}
              style={{ 
                background: wallTexture.image,
                backgroundSize: "cover"
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Wallpaper Mode */}
              {mode === "wallpaper" && wallpaperImage && (
                wallpaperRepeat ? (
                  // Repeat mode - tile the pattern with drag and drop
                  <div
                    className="absolute inset-0 cursor-move"
                    style={{
                      opacity: wallpaperOpacity[0] / 100,
                      backgroundImage: `url(${wallpaperImage})`,
                      backgroundSize: `${calculateDisplayWidth(wallpaperWidthCm)}% ${calculateDisplayHeight(wallpaperHeightCm)}%`,
                      backgroundRepeat: "repeat",
                      backgroundPosition: `${wallpaperX}% ${wallpaperY}%`,
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      if (!canvasRef.current) return;
                      
                      const canvas = canvasRef.current;
                      const rect = canvas.getBoundingClientRect();
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWallpaperX = wallpaperX;
                      const startWallpaperY = wallpaperY;

                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const deltaX = ((moveEvent.clientX - startX) / rect.width) * 100;
                        const deltaY = ((moveEvent.clientY - startY) / rect.height) * 100;
                        setWallpaperX(startWallpaperX + deltaX);
                        setWallpaperY(startWallpaperY + deltaY);
                      };

                      const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove);
                        document.removeEventListener("mouseup", handleMouseUp);
                      };

                      document.addEventListener("mousemove", handleMouseMove);
                      document.addEventListener("mouseup", handleMouseUp);
                    }}
                  />
                ) : (
                  // Single mode - one positionable sticker
                  <div
                    className="absolute cursor-move"
                    style={{
                      opacity: wallpaperOpacity[0] / 100,
                      left: `${wallpaperX}%`,
                      top: `${wallpaperY}%`,
                      transform: "translate(-50%, -50%)",
                      width: `${calculateDisplayWidth(wallpaperWidthCm)}%`,
                      height: `${calculateDisplayHeight(wallpaperHeightCm)}%`,
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      if (!canvasRef.current) return;
                      
                      const canvas = canvasRef.current;
                      const rect = canvas.getBoundingClientRect();
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWallpaperX = wallpaperX;
                      const startWallpaperY = wallpaperY;

                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const deltaX = ((moveEvent.clientX - startX) / rect.width) * 100;
                        const deltaY = ((moveEvent.clientY - startY) / rect.height) * 100;
                        setWallpaperX(Math.max(0, Math.min(100, startWallpaperX + deltaX)));
                        setWallpaperY(Math.max(0, Math.min(100, startWallpaperY + deltaY)));
                      };

                      const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove);
                        document.removeEventListener("mouseup", handleMouseUp);
                      };

                      document.addEventListener("mousemove", handleMouseMove);
                      document.addEventListener("mouseup", handleMouseUp);
                    }}
                  >
                    <img
                      src={wallpaperImage}
                      alt="Wallpaper preview"
                      className="w-full h-full object-contain pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                )
              )}

              {/* Multiple Stickers Mode */}
              {mode === "multiple" && stickers.map((sticker) => {
                const displayWidth = calculateDisplayWidth(sticker.widthCm);
                const displayHeight = calculateDisplayHeight(sticker.heightCm);
                
                return (
                  <div
                    key={sticker.id}
                    className={`absolute cursor-move transition-all ${
                      selectedSticker === sticker.id ? "ring-4 ring-primary" : ""
                    }`}
                    style={{
                      left: `${sticker.x}%`,
                      top: `${sticker.y}%`,
                      width: `${displayWidth}%`,
                      height: `${displayHeight}%`,
                      transform: `rotate(${sticker.rotation}deg)`,
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSelectedSticker(sticker.id);
                      handleStickerDrag(sticker.id, e);
                    }}
                    onClick={() => setSelectedSticker(sticker.id)}
                  >
                    <img
                      src={sticker.image}
                      alt="Sticker"
                      className="w-full h-full object-contain pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                );
              })}

              {/* Empty State */}
              {mode === "wallpaper" && !wallpaperImage && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Upload className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Uploadez votre design de papier peint</p>
                  </div>
                </div>
              )}

              {mode === "multiple" && stickers.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Plus className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Ajoutez vos stickers</p>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
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
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border space-y-6">
              <h2 className="font-display text-2xl text-foreground">
                Configuration
              </h2>

              {/* Wall Dimensions */}
              <div className="space-y-3 pb-4 border-b border-border">
                <Label className="text-foreground">Dimensions du mur</Label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Largeur (m)</Label>
                    <Input
                      type="number"
                      value={wallWidth}
                      onChange={(e) => setWallWidth(Math.max(0.5, Number(e.target.value)))}
                      min="0.5"
                      max="10"
                      step="0.1"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Hauteur (m)</Label>
                    <Input
                      type="number"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(Math.max(0.5, Number(e.target.value)))}
                      min="0.5"
                      max="5"
                      step="0.1"
                      className="mt-1"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Mur: {wallWidth}m × {wallHeight}m ({wallWidth * 100}cm × {wallHeight * 100}cm)
                </p>
              </div>

              {/* Mode Selection */}
              <div className="space-y-3">
                <Label className="text-foreground">Mode</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMode("wallpaper")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      mode === "wallpaper"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-medium">Papier Peint</div>
                    <div className="text-xs text-muted-foreground mt-1">Un grand sticker</div>
                  </button>
                  <button
                    onClick={() => setMode("multiple")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      mode === "multiple"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-medium">Multiples</div>
                    <div className="text-xs text-muted-foreground mt-1">Plusieurs stickers</div>
                  </button>
                </div>
              </div>

              {/* Wall Texture */}
              <div className="space-y-3">
                <Label className="text-foreground">Couleur du mur</Label>
                <div className="grid grid-cols-4 gap-3">
                  {wallTextures.map((texture) => (
                    <button
                      key={texture.name}
                      onClick={() => setWallTexture(texture)}
                      className={`h-16 rounded-lg border-2 transition-all ${
                        wallTexture.name === texture.name
                          ? "border-white scale-105"
                          : "border-border hover:border-white/50"
                      }`}
                      style={{ background: texture.image }}
                    >
                      <span className="sr-only">{texture.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wallpaper Mode Controls */}
              {mode === "wallpaper" && (
                <>
                  <div className="space-y-3">
                    <Label className="text-foreground">Image</Label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleWallpaperUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {wallpaperImage ? "Changer l'image" : "Uploader une image"}
                    </Button>
                    {wallpaperImage && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2"
                        onClick={resetWallpaper}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Réinitialiser
                      </Button>
                    )}
                  </div>

                  {wallpaperImage && (
                    <>
                      <div className="space-y-3">
                        <Label className="text-foreground">Mode d'affichage</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setWallpaperRepeat(false)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${
                              !wallpaperRepeat
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            Unique
                          </button>
                          <button
                            onClick={() => setWallpaperRepeat(true)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${
                              wallpaperRepeat
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            Répétition
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Cliquez et déplacez pour positionner {wallpaperRepeat ? "le motif" : "le sticker"}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-foreground">Dimensions du sticker</Label>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <Label className="text-xs text-muted-foreground">Largeur</Label>
                              <span className="text-sm font-medium text-foreground">{wallpaperWidthCm} cm</span>
                            </div>
                            <Slider
                              value={[wallpaperWidthCm]}
                              onValueChange={(v) => setWallpaperWidthCm(v[0])}
                              min={10}
                              max={wallWidth * 100}
                              step={5}
                              className="py-2"
                            />
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <Label className="text-xs text-muted-foreground">Hauteur</Label>
                              <span className="text-sm font-medium text-foreground">{wallpaperHeightCm} cm</span>
                            </div>
                            <Slider
                              value={[wallpaperHeightCm]}
                              onValueChange={(v) => setWallpaperHeightCm(v[0])}
                              min={10}
                              max={wallHeight * 100}
                              step={5}
                              className="py-2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-foreground">
                          Opacité: {wallpaperOpacity[0]}%
                        </Label>
                        <Slider
                          value={wallpaperOpacity}
                          onValueChange={setWallpaperOpacity}
                          min={10}
                          max={100}
                          step={5}
                          className="py-4"
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Multiple Stickers Mode Controls */}
              {mode === "multiple" && (
                <>
                  <div className="space-y-3">
                    <Label className="text-foreground">Ajouter des stickers</Label>
                    <input
                      ref={multiFileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleMultipleUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => multiFileInputRef.current?.click()}
                      variant="outline"
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter des images
                    </Button>
                  </div>

                  {selectedStickerData && (
                    <>
                      <div className="pt-4 border-t border-border space-y-4">
                        <div className="flex items-center justify-between">
                          <Label className="text-foreground">Sticker sélectionné</Label>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteSticker(selectedSticker!)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-foreground">Dimensions</Label>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <Label className="text-xs text-muted-foreground">Largeur</Label>
                                <span className="text-sm font-medium text-foreground">{selectedStickerData.widthCm} cm</span>
                              </div>
                              <Slider
                                value={[selectedStickerData.widthCm]}
                                onValueChange={(v) => updateSelectedSticker({ widthCm: v[0] })}
                                min={5}
                                max={wallWidth * 100}
                                step={1}
                                className="py-2"
                              />
                            </div>
                            
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <Label className="text-xs text-muted-foreground">Hauteur</Label>
                                <span className="text-sm font-medium text-foreground">{selectedStickerData.heightCm} cm</span>
                              </div>
                              <Slider
                                value={[selectedStickerData.heightCm]}
                                onValueChange={(v) => updateSelectedSticker({ heightCm: v[0] })}
                                min={5}
                                max={wallHeight * 100}
                                step={1}
                                className="py-2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground">
                            Rotation: {selectedStickerData.rotation}°
                          </Label>
                          <Slider
                            value={[selectedStickerData.rotation]}
                            onValueChange={(v) => updateSelectedSticker({ rotation: v[0] })}
                            min={-180}
                            max={180}
                            step={5}
                            className="py-4"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {stickers.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-foreground">
                        Tous les stickers ({stickers.length})
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => setStickers([])}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Tout supprimer
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="bg-card/50 rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Astuce :</strong> {mode === "wallpaper" 
                  ? "Définissez les dimensions réelles de votre mur et de votre sticker pour voir le rendu à l'échelle."
                  : "Entrez les dimensions réelles de chaque sticker pour un aperçu précis. Les dimensions sont en centimètres."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
