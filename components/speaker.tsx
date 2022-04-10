import Image from "next/image";
import React, { useMemo, useState } from "react";

interface ISpeakerProps {
  name: string;
  title: string;
  shortDesc: string;
  photo: string;
  desc: string;
  index?: number;
  expandedSpeaker?: number;
  handleExpand?: (index: number) => void;
  detailedView?: boolean;
}
const Speaker = ({
  name,
  title,
  shortDesc,
  desc,
  photo,
  index,
  expandedSpeaker,
  handleExpand,
  detailedView,
}: ISpeakerProps) => {
  const [expanded, setExpanded] = useState(false);
  useMemo(
    () => setExpanded(expandedSpeaker === index),
    [index, expandedSpeaker]
  );

  const handleReadMore = () => {
    if (handleExpand === undefined) return;
    if (expandedSpeaker === index || detailedView) {
      handleExpand(-1);
      return;
    }
    if (index !== undefined) handleExpand(index);
  };

  // hide from list when expanded
  if (!detailedView && expanded) return null;

  return (
    <div
      className={`p-6 md:p-4 flex justify-center ${
        detailedView ? "w-full bg-white/5 rounded-lg" : "lg:w-1/3 md:w-1/2"
      }`}
    >
      <div
        className={`flex items-center h-full text-center transition-all duration-150 ${
          !detailedView
            ? "flex-col lg:grayscale hover:grayscale-0"
            : "lg:w-full flex-col lg:flex-row"
        }`}
      >
        <div
          className={`relative w-full flex justify-center ${
            detailedView ? "py-4" : "mb-4"
          }`}
        >
          <Image
            priority
            alt={name}
            className="flex-shrink-0 object-cover object-center w-full h-56 rounded-lg"
            src={photo}
            layout="intrinsic"
            width={640}
            height={480}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          />
          {/* hide close btn in DetailedView */}
          {!detailedView && (
            <div
              className={`absolute bottom-2 right-2 px-4 py-1 mb-1 rounded-lg text-gray-200 bg-black hover:bg-red-800 transition-all hover:cursor-pointer ${
                expanded && "bg-red-800"
              }`}
              onClick={handleReadMore}
            >
              {!expanded ? "Read more" : "Close"}
            </div>
          )}
        </div>
        <div className={`w-full ${detailedView && "lg:pl-4"}`}>
          <h2
            className={`mt-2 font-medium text-white title-font ${
              detailedView ? "text-2xl lg:text-3xl text-left" : "text-lg"
            }`}
          >
            {name}
          </h2>
          <h3 className={`mb-3 text-gray-500 ${detailedView && "text-left"}`}>
            {title}
          </h3>
          <p
            className={`mb-4 transition-all ${
              detailedView && "text-justify lg:pr-8"
            }`}
          >
            {detailedView ? desc : shortDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
