import { ThemeProvider } from "@/components/theme-provider";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"] });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Muvii",
  description: "feel it!",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} antialiased bg-[#000000]`}
      >
            <ClientWrapper>
            <NavbarMenu/>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}

              <Footer />
            </ThemeProvider>
              </ClientWrapper>
            {/* <NavbarMenu /> */}
      </body>
    </html>
  );
}
