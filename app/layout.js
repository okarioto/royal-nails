import "./globals-tw.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Royal Nails',

  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
