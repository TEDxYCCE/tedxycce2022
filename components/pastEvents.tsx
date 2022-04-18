import Image from "next/image";
import Img1 from "../assets/pastEvents/1.jpeg";
import Img2 from "../assets/pastEvents/2.jpeg";
import Img3 from "../assets/pastEvents/3.jpeg";
import Img4 from "../assets/pastEvents/4.jpeg";
import Img5 from "../assets/pastEvents/5.jpeg";
import Img6 from "../assets/pastEvents/6.jpg";
import Button from "./button";
import SectionHeading from "./sectionHeading";

const PastEventImage = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      src={img}
      layout="intrinsic"
      objectFit="cover"
      alt="past event image"
      placeholder="blur"
    />
  );
};

const stairsClasses =
  "flex border-l-4 border-t-4 md:border-l-8 md:border-t-8 border-red-800 pl-1 py-1 gap-1";

const PastEvents = () => {
  return (
    <section className="">
      <div className="container px-6 mx-auto lg:flex lg:flex-col py-24 lg:px-32">
        <SectionHeading title="Past Events" />

        {/* Stairs layout */}
        <div className="-mt-28 w-full flex justify-center">
          <div className="flex flex-col items-end my-6 w-full md:w-4/6">
            <div className={`w-2/6 ${stairsClasses}`}>
              <PastEventImage img={Img1} />
            </div>
            <div className={`w-4/6 ${stairsClasses}`}>
              <PastEventImage img={Img2} />
              <PastEventImage img={Img3} />
            </div>
            <div className={`${stairsClasses} pb-0`}>
              <PastEventImage img={Img4} />
              <PastEventImage img={Img5} />
              <PastEventImage img={Img6} />
            </div>
          </div>
        </div>

        {/* description */}
        <div className="text-2xl text-center text-gray-300">
          Under the stairs
        </div>
        <h3 className="mt-2 text-xl font-semibold text-center">
          TEDxYCCE 2021
        </h3>
        <div className="py-4 mt-2 text-center text-gray-200 lg:px-24 xl:px-52">
          To unwrap the invisible foundation of the stairs and explore its
          incredible power, TEDxYCCE 2021 came up with the broad theme
          &quot;Under the Stairs&quot; which is an idea to uncover the hidden
          treasure below the Stairs.
        </div>

        {/* Button to TEDxYCCE 2021 Website */}
        <div className="text-center">
          <Button
            type="external"
            variant="filled"
            href="https://tedxycce.github.io/tedxycce_21/"
            className="my-4"
          >
            TEDxYCCE 2021
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
