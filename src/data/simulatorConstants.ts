export const TEXTILE_PRODUCTS = [
  { id: "tshirt" as const, name: "T-shirt" },
  { id: "sweat" as const, name: "Sweat" },
  { id: "polo" as const, name: "Polo" },
  { id: "cap" as const, name: "Casquette" },
];

export const TEXTILE_COLORS = [
  { name: "Blanc", value: "white" as const, hex: "#ffffff" },
  { name: "Noir", value: "black" as const, hex: "#1a1a1a" },
  { name: "Vert", value: "green" as const, hex: "#16a34a" },
  { name: "Rouge", value: "red" as const, hex: "#dc2626" },
  { name: "Bleu", value: "blue" as const, hex: "#2563eb" },
];

export const TEXT_FONTS = [
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Impact", value: "Impact, sans-serif" },
  { name: "Times", value: "Times New Roman, serif" },
  { name: "Courier", value: "Courier New, monospace" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Verdana", value: "Verdana, sans-serif" },
];

export const TEXT_COLORS = [
  { name: "Noir", value: "#000000" },
  { name: "Blanc", value: "#ffffff" },
  { name: "Rouge", value: "#dc2626" },
  { name: "Bleu", value: "#2563eb" },
  { name: "Vert", value: "#16a34a" },
  { name: "Jaune", value: "#eab308" },
  { name: "Orange", value: "#ea580c" },
  { name: "Rose", value: "#ec4899" },
];

export const WALL_TEXTURES = [
  { name: "Blanc", image: "linear-gradient(to bottom, #f8f9fa, #e9ecef)" },
  { name: "Beige", image: "linear-gradient(to bottom, #f5f0e8, #e8dfd0)" },
  { name: "Gris", image: "linear-gradient(to bottom, #e9ecef, #dee2e6)" },
  { name: "Bleu", image: "linear-gradient(to bottom, #e3f2fd, #bbdefb)" },
];
