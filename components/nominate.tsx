import Button from "./button";

const Nominate = () => {
  return (
    <section id="nominations" className="bg-white/[.05] py-24 pt-40">
      <div className="container mx-auto lg:flex lg:flex-col">
        <h2 className="w-full mt-8 mb-6 text-3xl font-bold text-center text-white">
          <span className="px-4 border-l-4 border-r-4 border-red-600">
            Nominations
          </span>
          <div className="px-4 mt-4 text-xl font-normal text-gray-500 text-md">
            Let us know your desired Speaker/Performer
          </div>
          <div className="mt-2 text-base font-normal text-gray-400">
            (You can self nominate as well)
          </div>
        </h2>

        <div className="flex flex-col py-10 mx-auto md:flex-row md:px-24 lg:space-x-24">
          <div className="p-4 mx-auto text-center ">
            <h2 className="my-4 text-2xl font-bold text-white">
              Call for Speakers
            </h2>
            <p className="max-w-[15rem] my-6 text-center text-gray-400 md:h-20">
              Nominate your desired speaker and make event joyous!
            </p>
            <Button
              type="external"
              variant="filled"
              href="https://forms.gle/1Tbm9Sh8LcZPjEo68"
            >
              Nominate Speaker
            </Button>
          </div>

          <div className="p-4 mx-auto text-center">
            <h2 className="my-4 text-2xl font-bold text-white">
              Call for Performers
            </h2>
            <div className="max-w-[15rem] my-6 text-center text-gray-400 md:h-20">
              Nominate your beloved performer and enhance experience for all!
            </div>
            <Button
              type="external"
              variant="filled"
              href="https://forms.gle/onJMSW9omnXc61ia7"
            >
              Nominate Performer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nominate;
