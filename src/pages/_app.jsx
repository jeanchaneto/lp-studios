import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import { AudioProvider } from "@/context/audioContext";
import BottomPLayer from "@/components/BottomPlayer";
import Script from "next/script";
import { NextUIProviders } from "@/context/nextUIProviders";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const isProduction = process.env.NODE_ENV === "production";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
  exit: { opacity: 0, transition: { duration: 0.75 } },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              variants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
          <Footer />
          <BottomPLayer />
        </MDXProvider>
      </AudioProvider>
    </NextUIProviders>
  );
}
