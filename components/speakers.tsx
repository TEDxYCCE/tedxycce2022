import Image from "next/image";
import React from "react";
import Speaker from "./speaker";
import { speakersData } from "../data/speakers";

const Speakers = () => {
  return (
    <section id="speakers" className="bg-white/[.05] py-24 pt-40">
      <div className="container mx-auto lg:flex lg:flex-col">
        <h2 className="w-full mt-8 mb-6 text-3xl font-bold text-center text-white">
          <span className="px-4 border-l-4 border-r-4 border-red-600">
            Speakers
          </span>
          <div className="px-4 mt-4 text-xl font-normal text-gray-500 text-md">
            Our speakers for TEDxYCCE 2022
          </div>
        </h2>
        <div className="flex flex-wrap lg:-m-4 justify-center">
          {speakersData.map((speaker, index) => (
            <Speaker key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
