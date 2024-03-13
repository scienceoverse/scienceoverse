import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContainer from "./LayoutContainer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All for Science",
  description: "A gathering place for all science lovers in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LayoutContainer>
        <body>
          <div className="flex justify-center">
            <Navbar />
          </div>
          <main>{children}</main>
        </body>
      </LayoutContainer>
    </html>
  );
}
