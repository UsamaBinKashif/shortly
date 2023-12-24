import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shrinkly",
  description: "Shrinkly, Generate short urls.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Header />
        {children}
      </body>
    </html>
  );
}
