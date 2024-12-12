import localFont from "next/font/local";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "UEMS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  );
}