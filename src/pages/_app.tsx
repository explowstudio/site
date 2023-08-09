import type { AppProps } from "next/app";

import { GoogleAnalytics } from "@/lib";
import { globalStyles } from "@/ui/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
