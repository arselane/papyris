import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExportButtonProps {
  canvasRef: React.RefObject<HTMLElement>;
  filename?: string;
  buttonText?: string;
  variant?: "default" | "neon-gold-filled" | "neon-gold";
}

const ExportButton: React.FC<ExportButtonProps> = ({
  canvasRef,
  filename = "design",
  buttonText = "Télécharger",
  variant = "neon-gold-filled",
}) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!canvasRef.current) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = `${filename}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Erreur lors de l'export:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      variant={variant}
      size="lg"
      disabled={isExporting}
      className="gap-2"
    >
      <Download className="w-5 h-5" />
      {isExporting ? "Exportation..." : buttonText}
    </Button>
  );
};

export default ExportButton;
