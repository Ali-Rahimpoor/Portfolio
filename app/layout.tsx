import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between p-3 h-[100vh]">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
