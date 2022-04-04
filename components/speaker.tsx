import Image from "next/image";
import React from "react";

interface ISpeakerProps {
  name: string;
  title: string;
  shortDesc: string;
  desc: string;
  photo: string;
}
const Speaker = ({ name, title, shortDesc, desc, photo }: ISpeakerProps) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="flex flex-col items-center h-full text-center grayscale hover:grayscale-0 transition-all duration-150">
        <Image
          alt="team"
          className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
          src={photo}
          layout="intrinsic"
          width={640}
          height={480}
        />
        <div className="w-full">
          <h2 className="mt-2 text-lg font-medium text-white title-font">
            {name}
          </h2>
          <h3 className="mb-3 text-gray-500">{title}</h3>
          <p className="mb-4">{shortDesc || desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
