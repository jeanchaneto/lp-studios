import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/context/Providers";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <WaveSurferProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WaveSurferProvider>
    </Providers>
  );
}
