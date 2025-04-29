import { Inconsolata, Raleway, Roboto_Slab } from "next/font/google";

export const inconsolata = Inconsolata({
  weight: ["600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export const raleway = Raleway({
  weight: ["100", "300", "400", "500", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
