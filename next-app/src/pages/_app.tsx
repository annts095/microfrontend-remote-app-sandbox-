import "@team-lab/flexpay-core/globals.css";
import "@team-lab/flexpay-core/ui.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
