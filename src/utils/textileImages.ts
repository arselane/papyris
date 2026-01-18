// Import all textile product images
import tshirtFrontWhite from "@/assets/textiles/tshirt-white-front.png";
import tshirtFrontBlack from "@/assets/textiles/tshirt-black-front.png";
import tshirtFrontGreen from "@/assets/textiles/tshirt-green-front.png";
import tshirtFrontRed from "@/assets/textiles/tshirt-red-front.png";
import tshirtFrontBlue from "@/assets/textiles/tshirt-blue-front.png";
import tshirtBackWhite from "@/assets/textiles/tshirt-white-back.png";
import tshirtBackBlack from "@/assets/textiles/tshirt-black-back.png";
import tshirtBackGreen from "@/assets/textiles/tshirt-green-back.png";
import tshirtBackRed from "@/assets/textiles/tshirt-red-back.png";
import tshirtBackBlue from "@/assets/textiles/tshirt-blue-back.png";

import poloFrontWhite from "@/assets/textiles/polo-white-front.png";
import poloFrontBlack from "@/assets/textiles/polo-black-front.png";
import poloFrontGreen from "@/assets/textiles/polo-green-front.png";
import poloFrontRed from "@/assets/textiles/polo-red-front.png";
import poloFrontBlue from "@/assets/textiles/polo-blue-front.png";
import poloBackWhite from "@/assets/textiles/polo-white-back.png";
import poloBackBlack from "@/assets/textiles/polo-black-back.png";
import poloBackGreen from "@/assets/textiles/polo-green-back.png";
import poloBackRed from "@/assets/textiles/polo-red-back.png";
import poloBackBlue from "@/assets/textiles/polo-blue-back.png";

import sweatFrontWhite from "@/assets/textiles/sweat-white-front.png";
import sweatFrontBlack from "@/assets/textiles/sweat-black-front.png";
import sweatFrontGreen from "@/assets/textiles/sweat-green-front.png";
import sweatFrontRed from "@/assets/textiles/sweat-red-front.png";
import sweatFrontBlue from "@/assets/textiles/sweat-blue-front.png";
import sweatBackWhite from "@/assets/textiles/sweat-white-back.png";
import sweatBackBlack from "@/assets/textiles/sweat-black-back.png";
import sweatBackGreen from "@/assets/textiles/sweat-green-back.png";
import sweatBackRed from "@/assets/textiles/sweat-red-back.png";
import sweatBackBlue from "@/assets/textiles/sweat-blue-back.png";

import capWhite from "@/assets/textiles/cap-white.png";
import capBlack from "@/assets/textiles/cap-black.png";
import capGreen from "@/assets/textiles/cap-green.png";
import capRed from "@/assets/textiles/cap-red.png";
import capBlue from "@/assets/textiles/cap-blue.png";

type ProductType = "tshirt" | "polo" | "sweat" | "cap";
type ColorType = "white" | "black" | "green" | "red" | "blue";
type ViewType = "front" | "back";

const textileImages = {
  tshirt: {
    front: {
      white: tshirtFrontWhite,
      black: tshirtFrontBlack,
      green: tshirtFrontGreen,
      red: tshirtFrontRed,
      blue: tshirtFrontBlue,
    },
    back: {
      white: tshirtBackWhite,
      black: tshirtBackBlack,
      green: tshirtBackGreen,
      red: tshirtBackRed,
      blue: tshirtBackBlue,
    },
  },
  polo: {
    front: {
      white: poloFrontWhite,
      black: poloFrontBlack,
      green: poloFrontGreen,
      red: poloFrontRed,
      blue: poloFrontBlue,
    },
    back: {
      white: poloBackWhite,
      black: poloBackBlack,
      green: poloBackGreen,
      red: poloBackRed,
      blue: poloBackBlue,
    },
  },
  sweat: {
    front: {
      white: sweatFrontWhite,
      black: sweatFrontBlack,
      green: sweatFrontGreen,
      red: sweatFrontRed,
      blue: sweatFrontBlue,
    },
    back: {
      white: sweatBackWhite,
      black: sweatBackBlack,
      green: sweatBackGreen,
      red: sweatBackRed,
      blue: sweatBackBlue,
    },
  },
  cap: {
    white: capWhite,
    black: capBlack,
    green: capGreen,
    red: capRed,
    blue: capBlue,
  },
};

export const getTextileImage = (
  product: ProductType,
  color: ColorType,
  view?: ViewType
): string => {
  if (product === "cap") {
    return textileImages.cap[color];
  }
  
  if (!view) view = "front";
  return textileImages[product][view][color];
};

export { textileImages };
export type { ProductType, ColorType, ViewType };
