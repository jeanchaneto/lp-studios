import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/context/Providers";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";

export default function App({ Component, pageProps }) {

  return (
    <Providers>
      <MDXProvider components={MDXComponents}>
        <WaveSurferProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </WaveSurferProvider>
      </MDXProvider>
    </Providers>
  );
}
