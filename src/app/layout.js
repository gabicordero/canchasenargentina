import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Encontrá tu cancha de fútbol en Argentina",
  description: "busca y reserva una cancha de fútbol",
  keywords: "canchas sinteticas, canchas de pasto sintetico, cancha de futbol, cancha de futbol 7 precio, canchas pasto sintetico, canchas de futbol 7, canchas sinteticas de futbol, canchas de futbol 5, canchas de cesped sintetico, cancha futbol 5, alquila tu cancha, canchas de futbol cerca de mi, cancha cesped sintetico, canchas en cordoba, canchas de futbol 5 cordoba, canchas de futbol 7 cordoba, canchas de futbol cordoba, canchas de futbol cordoba capital, canchas de futbol en cordoba capital, canchas futbol cordoba, canchas futbol 5 cordoba"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
