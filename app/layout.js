
export const metadata = {
  title: "Custom Tech Labs",
  description: "Technology Built for the Way People Actually Work",
};

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
