import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Nominate from "../components/nominate";
import PastEvents from "../components/pastEvents";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Head>
        <title>TEDxYCCE 2022</title>
      </Head>
      <Header />
      <main className="flex-1">
        {/* <h1 className="text-2xl text-white">Welcome</h1> */}
        <Hero />
        <Nominate />
        <PastEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
