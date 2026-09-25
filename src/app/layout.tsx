import "@/globals.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-atkinsonhyperlegible">
      <body className="flex flex-col transition-[background-color] duration-[0.3s,color] delay-300 m-[1.252vh]">
        <HamburgerMenu />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
