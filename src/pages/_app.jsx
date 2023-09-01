import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <WaveSurferProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WaveSurferProvider>
  );
}
