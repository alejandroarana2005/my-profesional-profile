import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Arana Fernández — Perfil Profesional",
  description:
    "Estudiante de Ingeniería de Sistemas y Técnico en Sistemas. Especializado en desarrollo de software, bases de datos y gestión ágil.",
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
