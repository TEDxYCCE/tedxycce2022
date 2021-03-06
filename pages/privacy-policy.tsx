import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import PrivacyPolicy from "../components/privacyPolicy";

// TODO: compress all images
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>TEDxYCCE 2022 | Speakers</title>
      </Head>
      <Header />
      <main className="flex-1">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
