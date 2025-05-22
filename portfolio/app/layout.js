import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Portfolio - Ailton Santos",
  description: "Meu Portfolio utilizando Next React e suas dependências",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}