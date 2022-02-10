import Image from "next/image";
import Img1 from "../assets/pastEvents/1.png";
import Img2 from "../assets/pastEvents/2.png";
import Img3 from "../assets/pastEvents/3.png";
import Button from "./button";
import SectionHeading from "./sectionHeading";

const PastEvents = () => {
  return (
    <section className="container px-6 mx-auto lg:flex lg:flex-col py-36 lg:px-32">
     <SectionHeading title="Past Events"/>

      {/* Stairs layout */}
      <div className="flex flex-row gap-1 my-6 lg:gap-4">
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
      <h3 className="mt-2 text-xl font-semibold text-center">TEDxYCCE 2021</h3>
      <div className="py-4 mt-2 text-center text-gray-200 lg:px-24 xl:px-52">
        To unwrap the invisible foundation of the stairs and explore its
        incredible power, TEDxYCCE 2021 came up with the broad theme &quot;Under
        the Stairs&quot; which is an idea to uncover the hidden treasure below
        the Stairs.
      </div>

      {/* Button to TEDxYCCE 2021 Website */}
      <div className="text-center">
        <Button
          title="TEDxYCCE 2021"
          url="https://tedxycce.github.io/tedxycce_21/"
          className="my-4 lg:mt-8"
        />
      </div>
    </section>
  );
};

export default PastEvents;
