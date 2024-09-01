import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/Provider";
import { Navbar } from "@/components/layouts/Navbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrian's Portfolio",
  description: "Adrian's Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
