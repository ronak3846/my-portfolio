import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { ThemeProvider } from "../components/Providers";

export const metadata = {
  title: "Ronak Vaishnav Portfolio",
  description: "Full Stack Developer & Digital Marketer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {/* <ThemeProvider> */}
          <Navbar />
          {children}
          {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
