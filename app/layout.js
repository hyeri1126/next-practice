import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-2 bg-lime-200">Header</header>
        {/* children props를 통해 page.js의 컴포넌트가 전달됨 */}
        {children}
        <footer className="p-1 bg-orange-200">Footer</footer>
      </body>
    </html>
  );
}
