import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AOSInit } from "@/components/AOSInit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AOSInit />
      <Component {...pageProps} />
    </>
  );
}
