import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full min-h-screen bg-[url('/images/hero-background-compressed.png')] relative">
        <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
