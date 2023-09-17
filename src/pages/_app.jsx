import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/context/Providers";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import { AudioProvider } from "@/context/audioContext";
import BottomPLayer from "@/components/BottomPlayer";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <AudioProvider>
        <MDXProvider components={MDXComponents}>
          <WaveSurferProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <BottomPLayer />
          </WaveSurferProvider>
        </MDXProvider>
      </AudioProvider>
    </Providers>
  );
}
