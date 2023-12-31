import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "@/styles/globals.scss";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Text Transform",
  description:
    "Estilize e formate textos, converta para maiúsculo ou minúsculo, gere textos Lorem Ipsum, codifique textos e muito mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <SkeletonTheme baseColor="#ffc9c1df" highlightColor="#f86a5460">
          {children}
        </SkeletonTheme>
        <Footer />
      </body>
    </html>
  );
}
