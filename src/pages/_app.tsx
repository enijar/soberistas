import type { AppProps } from "next/app";
import Head from "next/head";
import Reset from "@/styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Soberistas - Giving Up Alcohol & Living Life in Control</title>
      </Head>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}
