import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "./Layout";
import { CharactersProvider } from "../context/characterContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RickAndMorty</title>
        <link rel="icon" type="image/png" sizes="any" href="/images/icon.png" />
      </Head>
      <Layout>
        <CharactersProvider>
          <Component {...pageProps} />
        </CharactersProvider>
      </Layout>
    </>
  );
}

export default MyApp;
