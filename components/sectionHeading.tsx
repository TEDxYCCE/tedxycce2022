import React from "react";

type Heading =  {
  title: string;
}

const SectionHeading = ({ title }: Heading) => {
  return (
    <h2 className="w-full mt-8 mb-32 text-3xl font-bold text-center text-gray-50">
      <span className="px-4 border-l-4 border-r-4 border-red-600">
        { title }
      </span>
    </h2>
  );
};

export default SectionHeading;
