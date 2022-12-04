import Head from "next/head";
import Main from "@/components/organisms/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filipe Coutinho - Previsão do Tempo</title>
        <meta name="description" content="Filipe Coutinho - Previsão do Tempo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
