import type { NextPage } from "next";
import Head from "next/head";
import BlankSpace from "../components/blankspace";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import Header from "../components/header";

// TODO: compress all images
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>TEDxYCCE 2022 | Contact</title>
      </Head>
      <Header />
      <main className="">
        {/* <h1 className="text-2xl text-white">Welcome</h1> */}
        <ContactUs></ContactUs>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
