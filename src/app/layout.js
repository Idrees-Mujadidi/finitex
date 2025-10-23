import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "FiniteX Digital Solutions",
  description: "Empowering Ideas with Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
