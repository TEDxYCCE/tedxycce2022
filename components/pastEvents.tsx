import Image from "next/image";
import Img1 from "../assets/pastEvents/1.png";
import Img2 from "../assets/pastEvents/2.png";
import Img3 from "../assets/pastEvents/3.png";

const PastEvents = () => {
  return (
    <section className="container mx-auto lg:flex lg:flex-col py-36 px-6 lg:px-32">
      <h2 className="w-full mt-8 mb-32 text-3xl font-bold text-center text-gray-50">
        <span className="px-4 border-l-4 border-r-4 border-red-600">
          Past Event
        </span>
      </h2>

      {/* Stairs layout */}
      <div className="flex flex-row gap-1 lg:gap-4 my-6">
        <div className="w-1/3">
          <Image src={Img1} alt="past event image" />
        </div>
        <div className="w-1/3 -mt-10">
          <Image src={Img2} alt="past event image" />
        </div>
        <div className="w-1/3 -mt-20">
          <Image src={Img3} alt="past event image" />
        </div>
      </div>
      {/* desc */}
      <div className="text-2xl text-center text-gray-300">Under the stairs</div>
      <h3 className="font-semibold text-xl text-center mt-2">TEDxYCCE 2021</h3>
      <div className="mt-2 py-4 lg:px-24 xl:px-52 text-gray-200 text-center">
        To unwrap the invisible foundation of the stairs and explore its
        incredible power, TEDxYCCE 2021 came up with the broad theme &quot;Under
        the Stairs&quot; which is an idea to uncover the hidden treasure below
        the Stairs.
      </div>

      {/* Button to TEDxYCCE 2021 Website */}
      <div className="mt-4 lg:mt-8 text-center">
        <a
          className="px-6 py-3 my-4 font-semibold text-white bg-red-600 rounded-full text-center"
          rel="noopener noreferrer"
          href="https://tedxycce.github.io/tedxycce_21/"
          target="_blank"
        >
          TEDxYCCE 2021
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline ml-1"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PastEvents;
