import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="w-full min-h-screen relative bg-[url('/images/hero-background-compressed.webp')] bg-no-repeat bg-left bg-fixed">
        <div className="w-full h-full absolute bg-black bg-opacity-50">
          <div className="w-full h-full flex flex-col items-center pt-52">
            <div className="text-white">
              {/* <Image
                src="/images/pulse.svg"
                alt="pulse"
                layout="intrinsic"
                height={100}
                width={100}
                color="white"
              /> */}
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 31.746 31.746"
                strokeWidth={0.25}
                className="text-white w-28 sm:w-36 md:w-40 lg:w-44"
              >
                <path
                  d="M11.614,25.866c-0.557,0-1.039-0.248-1.152-0.793L8.901,17.6l-1.028,1.774c-0.211,0.359-0.597,0.613-1.012,0.613H1.176
			C0.527,19.987,0,19.46,0,18.813c0-0.65,0.527-1.178,1.176-1.178h5.013l2.235-3.777c0.247-0.417,0.721-0.644,1.205-0.562
			c0.479,0.08,0.86,0.446,0.958,0.921l0.945,4.566l2.155-11.956c0.101-0.56,0.588-0.949,1.158-0.949c0.001,0,0.004,0,0.005,0
			c0.571,0,1.058,0.396,1.154,0.958l2.3,13.421l0.74-1.875c0.176-0.45,0.61-0.749,1.093-0.749H30.57
			c0.649,0,1.176,0.526,1.176,1.177c0,0.648-0.526,1.176-1.176,1.176h-9.635l-1.99,5.029c-0.192,0.49-0.682,0.787-1.215,0.737
			c-0.522-0.056-0.947-0.452-1.037-0.972l-1.876-10.965l-2.046,11.225c-0.1,0.555-0.579,0.824-1.142,0.824
			C11.624,25.866,11.619,25.866,11.614,25.866z"
                />
              </svg>
            </div>
            <div className="w-80 -mt-2 xs:w-76 xs:-mt-3 md:w-96 md:-mt-4 lg:w-1/3 lg:-mt-8">
              <Image
                src={logo}
                layout="intrinsic"
                height={205}
                width={782}
                alt="TEDx_Logo"
                placeholder="blur"
              />
            </div>
            <p className="text-3xl font-semibold lg:text-5xl mt-4 lg:mt-8 py-2">
              Coming Soon
            </p>
            <p className="text-2xl lg:text-3xl py-2">
              April 23<sup>rd</sup>, 2022
            </p>
          </div>
        </div>

        {/* Curtain Revel */}
        {/* <div className="h-full w-full absolute left-0 top-0 hidden md:block">
          <div className="relative h-full w-full overflow-hidden group pointer-events-auto">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-black/80 group-hover:-translate-x-full transition-transform duration-700 ease-in-out delay-200"></div>
            <div className="absolute top-0 right-0 h-full w-1/2 bg-black/80 group-hover:translate-x-full transition-transform duration-700 ease-in-out delay-200"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>;
