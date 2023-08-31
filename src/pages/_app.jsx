
import "@/styles/globals.css";
import { WaveSurferProvider } from "../context/waveSurferContext";

export default function App({ Component, pageProps }) {
  return (
    <WaveSurferProvider>
      <Component {...pageProps} />
  
    </WaveSurferProvider>
  );
}
