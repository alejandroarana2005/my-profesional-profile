// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Arana Fernández — Perfil Profesional",
  description:
    "Estudiante de Ingeniería de Sistemas y Técnico en Sistemas. Especializado en desarrollo de software full-stack, bases de datos y gestión ágil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}