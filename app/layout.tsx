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
        <body className={`${inter.className}`}>
          <Navbar /> {/* Always display the Navbar at the top */}
          <div className="flex flex-col mt-[5rem]"> {/* Adjust margin-top to accommodate Navbar height */}
            <div className="flex-grow">{children}</div> {/* Rest of the content below the Navbar */}
          </div>
        </body>
      </LayoutContainer>
    </html>
  );
}
