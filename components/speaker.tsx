import Image from "next/image";
import React from "react";

interface ISpeakerProps {
  name: string;
  title: string;
  desc: string;
  photo: string;
}
const Speaker = ({ name, title, desc, photo }: ISpeakerProps) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <Image
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={photo}
          layout="intrinsic"
          width={640}
          height={480}
        />
        <div className="w-full">
          <h2 className="mt-2 title-font font-medium text-lg text-white">
            {name}
          </h2>
          <h3 className="text-gray-500 mb-3">{title}</h3>
          <p className="mb-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
