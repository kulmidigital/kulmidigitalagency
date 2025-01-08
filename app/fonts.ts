import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Medium.woff",
  display: "swap",
});

export const clashDisplay2 = localFont({
  src: "./fonts/ClashDisplay-Regular.woff",
  display: "swap",
});
