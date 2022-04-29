import Image from "next/image";
import { IPerformer, performersData } from "../data/performers";

const Performer = ({ name, title, desc, photo }: IPerformer) => {
  return (
    <div className="w-full lg:w-1/3 p-4 flex flex-col items-center">
      <div className="rounded-xl shadow-lg shadow-red-800 p-0.5 pb-0 bg-red-800">
        <Image
          priority
          alt={name}
          className="flex-shrink-0 object-cover object-center w-full h-56 rounded-xl"
          src={photo}
          layout="intrinsic"
          width={640}
          height={480}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
        />
      </div>
      <div className="mt-8 font-medium text-white title-font text-xl lg:text-2xl">
        {name}
      </div>
      <div className="mb-3 text-gray-500 text-lg">{title}</div>
      <div className="text-center px-8">{desc}</div>
    </div>
  );
};

const Performers = () => {
  return (
    <section id="performers" className="bg-white/[.05] pb-24">
      <div className="container mx-auto lg:flex lg:flex-col">
        <h2 className="w-full mt-8 mb-6 text-3xl font-bold text-center text-white">
          <span className="px-4 border-l-4 border-r-4 border-red-600">
            Musical performances
          </span>
          <div className="px-4 mt-4 text-xl font-normal text-gray-500 text-md">
            To mesmerize you in rhythms
          </div>
        </h2>
        <div className="pt-8 flex flex-wrap justify-center gap-8">
          {performersData.map((performer, index) => (
            <Performer key={index} {...performer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performers;
