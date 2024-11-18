import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import favicon from "@/favicon.ico";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Labs",
  description:
    "Desarrollamos soluciones innovadoras para impulsar tu crecimiento",
  icons: favicon.src,
  authors: { name: "AtlanticLabs", url: "atlanticlabs.com.ar" },
  keywords: [
    "Desarrollo",
    "Diseño",
    "Design",
    "Development",
    "Web",
    "Webpage",
    "web app",
    "application",
    "empresa",
  ],
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
