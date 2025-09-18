import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Merriweather:wght@400;700&family=Playfair+Display:wght@400;700&family=Fira+Code:wght@400;500;700&family=Source+Code+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-serif bg-white text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
