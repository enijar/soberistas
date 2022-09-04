import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Reset from "@/styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>Soberistas - Giving Up Alcohol & Living Life in Control</title>
      </Head>
      <Reset />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
