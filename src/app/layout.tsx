import localFont from "next/font/local";
import "@/globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";

const HamburgerMenu = dynamic(() => import("@/components/HamburgerMenu"), {
  ssr: false,
});

const atkinson = localFont({
  src: "../../public/Fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-Regular.ttf",
  variable: "--font-atkinsonhyperlegible",
  display: "swap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${atkinson.variable}`}>
      <body className="m-[1.252vh] flex flex-col transition-[background-color] delay-300 duration-[0.3s,color]">
        <HamburgerMenu />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
