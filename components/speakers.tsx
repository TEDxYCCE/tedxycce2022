import React, { useRef, useState } from "react";
import Speaker from "./speaker";
import { speakersData } from "../data/speakers";
import SpeakerDetailsView from "./speakerDetailsView";

const Speakers = () => {
  const [expandedSpeaker, setExpandedSpeaker] = useState(-1);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleExpand = (index: number) => {
    setExpandedSpeaker(index);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };
  return (
    <section id="speakers" ref={sectionRef} className="bg-white/[.05] py-24">
      <div className="container mx-auto lg:flex lg:flex-col">
        <h2 className="w-full mt-8 mb-6 text-3xl font-bold text-center text-white">
          <span className="px-4 border-l-4 border-r-4 border-red-600">
            Speakers
          </span>
          <div className="px-4 mt-4 text-xl font-normal text-gray-500 text-md">
            Our speakers for TEDxYCCE 2022
          </div>
        </h2>

        {expandedSpeaker !== -1 && (
          <div className="mb-10">
            <SpeakerDetailsView
              handleExpand={handleExpand}
              speaker={speakersData[expandedSpeaker]}
            />
          </div>
        )}
        <div className="flex flex-wrap lg:-m-4 justify-center">
          {speakersData.map((speaker, index) => (
            <Speaker
              key={index}
              index={index}
              expandedSpeaker={expandedSpeaker}
              handleExpand={handleExpand}
              {...speaker}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
