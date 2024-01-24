import { Playfair_Display, Poppins } from "next/font/google";

export const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
