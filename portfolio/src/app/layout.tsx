import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from 'next/image';
import "./globals.scss"; // Asegúrate de que importas tu archivo SASS
import Link from "next/link";
import 'bootstrap/scss/bootstrap.scss';



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
        <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'></link>
        <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-9aIt2pM7vFZ4K7tW1f2m1no59m5wvfFzftdKzFyIY3fZsdBrb5W2VvBO1qGVfB8K"
    crossOrigin="anonymous"
  />
      </head>
      <body className="{`${geistSans.variable} ${geistMono.variable} antialiased`}">
          <header >
            <nav>
              <Image src="/logo.png" alt="Logo" className="logo" width={60} height={60} />
              <ul>
                {/* Usar Link en lugar de <a> */}
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/#projects">Proyectos</Link>
                </li>

                <li>
                  <Link href="/#Acercademi">Acerca de mí</Link>
                </li>
                <li>
                  <Link href="/contact" className="contratame">
                    Contrátame
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        <main className="main">{children}</main> {/* Aquí se renderiza el contenido de page.tsx */}
        <footer >   

        </footer>
      </body>
    </html>
  );
}
