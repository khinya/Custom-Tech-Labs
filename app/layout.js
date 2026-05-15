import { Inter, Albert_Sans, ABeeZee } from "next/font/google";
export const metadata = {
  title: "Custom Tech Labs",
  description: "Technology Built for the Way People Actually Work",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const abeezee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-abeezee",
  weight: "400", // ❗ Only available weight
});;

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${inter.variable} ${albert.variable} ${abeezee.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
