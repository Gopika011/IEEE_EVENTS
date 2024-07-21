import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOME-EVENTS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        </body>
    </html>
  );
}
