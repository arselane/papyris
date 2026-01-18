interface ColorOption {
  name: string;
  value: string;
  hex: string;
}

interface ColorPickerProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (color: string) => void;
  label?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onColorChange,
  label = "Couleur",
}) => {
  return (
    <div className="space-y-3">
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            className={`h-10 rounded-lg border-2 transition-all ${
              selectedColor === color.value
                ? "border-primary scale-110 shadow-[0_0_15px_hsl(190_100%_50%/0.3)]"
                : "border-border hover:border-primary/50"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          >
            <span className="sr-only">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
