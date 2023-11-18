import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { globalStyles } from "@/ui/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
