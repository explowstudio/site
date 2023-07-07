import type { AppProps } from "next/app";

import { globalStyles } from "@/ui/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
