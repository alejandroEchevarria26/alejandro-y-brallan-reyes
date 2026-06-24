import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tortas Kelita | Reposteria artesanal",
  description:
    "Tortas, alfajores y detalles artesanales hechos con recetas de familia para cada celebracion.",
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
