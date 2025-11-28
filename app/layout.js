import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const kyivTypeSans = localFont({
  src: "../fonts/KyivTypeSans-Regular.otf",
  variable: "--font-kyiv-type-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${kyivTypeSans.variable} antialiased`}
      >
        <main className="flex flex-col gap-4 max-w-2xl mx-auto p-4 pt-16 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
