import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import { AudioProvider } from "@/context/audioContext";
import BottomPLayer from "@/components/BottomPlayer";
import Script from "next/script";
import { NextUIProviders } from "@/context/nextUIProviders";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProviders>
      <AudioProvider>
        <MDXProvider components={MDXComponents}>
          {isProduction && (
            <>
              <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-1L4MQ4Q6JZ"
              />
              <Script strategy="afterInteractive" id="google-analytics">
                {` 
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-1L4MQ4Q6JZ');
                `}
              </Script>
            </>
          )}
          <Header />
          <Component {...pageProps} />
          <Footer />
          <BottomPLayer />
        </MDXProvider>
      </AudioProvider>
    </NextUIProviders>
  );
}
