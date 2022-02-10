import type { NextPage } from "next";
import Head from "next/head";
import BlankSpace from "../components/blankspace";
import Footer from "../components/footer";
import Header from "../components/header";

// TODO: compress all images
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>TEDxYCCE 2022 | About</title>
      </Head>
      <Header />
      <main className="my-12">
        <div className="container flex flex-col justify-center gap-16 mx-auto mb-16 text-white py-28 lg:flex-row ">
          <div className="w-full px-10 h-4/6 lg:w-1/2">
            <h2 className="text-3xl font-semibold">What is TEDx?</h2>
            <div className="my-5 text-xl tracking-wider">
              Ideas Worth Spreading
            </div>
            <p className="leading-relaxed tracking-wide text-justify text-gray-400 text-md">
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. Our
              event is called TEDxYCCE, where x = independently organized TED
              event. At our TEDxYCCE event, TED Talks video and live speakers
              will combine to spark deep discussion and connection in a small
              group. The TED Conference provides general guidance for the TEDx
              program, but individual TEDx events, including ours, are
              self-organized.
            </p>

            <a href="https://www.ted.com/about/programs-initiatives/tedx-program">
              <div className="w-auto p-4 mx-10 mt-12 text-red-400 border border-red-500 rounded-xl border-1 hover:bg-red-800 px-auto focus:ring-1">
                <p className="text-2xl font-normal tracking-wider text-center">
                  Visit the TEDx Program
                </p>
              </div>
            </a>
          </div>
          <div className="w-full px-10 lg:w-1/2 ">
            <h2 className="text-3xl font-semibold">What is TEDxYCCE?</h2>
            <div className="my-5 text-xl tracking-wider">
              Ideas Worth Spreading
            </div>
            <p className="leading-relaxed tracking-wide text-justify text-gray-400 text-md">
              TEDxYCCE is an independently organized TED event under an
              authorized license from TED at Yeshwantrao Chavan College of
              Engineering, Nagpur. It is being organized this year for the
              second time in YCCE with the aim to make the youth involved in the
              spectrum of IDEAS WORTH SPREADING. The conference will feature
              interdisciplinary presenters including those from the local
              community - expressing their past experiences, current projects,
              and future visions to promote inquiry, innovation, and critical
              discussion.
            </p>

            <a href="../">
              <div className="w-auto p-4 mx-10 mt-12 text-red-400 border border-red-500 rounded-xl border-1 hover:bg-red-800 px-auto focus:ring-1">
                <p className="text-2xl font-normal tracking-wider text-center">
                  Visit TEDxYCCE page
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="my-4 bg-white ">
          <div className="container px-10 mx-auto text-black py-28">
            <div className="text-center ">
              <h3 className="text-xl">Wondering what TED is about?</h3>

              <h2 className="pb-6 mb-8 text-3xl font-bold">Here is About TED</h2>
              <p className="container max-w-2xl mx-auto mb-4 text-lg font-light text-justify text-gray-600">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the
                world&apos;s leading thinkers and doers to speak for{" "}
                <span className="font-semibold">18 minutes or less.</span>
              </p>

              <p className="container max-w-2xl mx-auto mb-4 text-lg font-light text-justify text-gray-600">
                Many of these talks are then made available, free, at TED.com.
                TED speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual
                TED Conference takes place each spring in Vancouver, British
                Columbia. TED&apos;s media initiatives include TED.com, where
                new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations
                from volunteers worldwide; the educational initiative TED-Ed.
              </p>
              <p className="container max-w-2xl pb-10 mx-auto text-lg font-light text-justify text-gray-600">
                TED has established The Audacious Project that takes a
                collaborative approach to funding ideas with the potential to
                create change at thrilling scale; TEDx, which supports
                individuals or groups in hosting local, self- organized
                TED-style events around the world, and the TED Fellows program,
                helping world-changing innovators from around the globe to
                amplify the impact of their remarkable projects and activities.{" "}
                <br />
                <br />
                Follow TED on Twitter at{" "}
                <a
                  className="text-red-600 "
                  href="https://twitter.com/TEDTalks"
                >
                  https://twitter.com/TEDTalks
                </a>
                , <br />
                or on Facebook at{" "}
                <a
                  className="text-red-600 "
                  href="https://www.facebook.com/TED"
                >
                  https://www.facebook.com/TED
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* <BlankSpace /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
