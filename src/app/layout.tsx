import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.scss";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata = {
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
        <Header />
        {children}
      </body>
    </html>
  );
}
