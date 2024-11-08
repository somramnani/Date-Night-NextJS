import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter, Sansita_Swashed } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
