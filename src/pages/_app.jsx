
import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <WaveSurferProvider>
      <Component {...pageProps} />
  <Footer />
    </WaveSurferProvider>
  );
}
