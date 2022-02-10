import type { NextPage } from "next";
import Head from "next/head";
import BlankSpace from "../components/blankspace";
import Footer from "../components/footer";
import Header from "../components/header";

// TODO: compress all images
const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-black">
      <Head>
        <title>TEDxYCCE 2022 | Sponsors</title>
      </Head>
      <Header />
      <main className="flex-1">
        <BlankSpace />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
