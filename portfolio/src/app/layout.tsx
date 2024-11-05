import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss"; // Asegúrate de que importas tu archivo SASS

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 1200",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 1200",
});

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Bienvenido a mi portafolio personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css?family=DM+Sans&display=optional" rel='stylesheet'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header >
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Acerca de mí</a></li>
              <li><a href="#" className="contratame">Contrátame</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main> {/* Aquí se renderiza el contenido de page.tsx */}
        <footer >   

        </footer>
      </body>
    </html>
  );
}
