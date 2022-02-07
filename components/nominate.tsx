const Nominate = () => {
  return (
    <div className="container mx-auto lg:flex lg:flex-col">
      <h2 className="w-full mt-8 mb-6 text-3xl font-bold text-center text-white">
        <span className="px-4 border-l-4 border-r-4 border-red-600">
          Nominations
        </span>
        <div className="px-4 mt-2 text-xl font-normal text-gray-500 text-md">
          Let us know your desired Speaker/Performer
        </div>
        <div className="mt-2 text-base font-normal text-gray-400">
          (You can self nominate as well)
        </div>
      </h2>

      <div className="flex flex-col mx-auto md:flex-row md:px-24">
        <div className="p-4 mx-auto text-center ">
          <h2 className="my-4 text-2xl font-bold text-white">
            Call for Speakers
          </h2>
          <p className="max-w-sm my-6 text-center text-gray-400">
            Nominate your desired speaker and add to the greatness of the event!
          </p>
          <a className="px-6 py-3 my-4 font-semibold text-white bg-red-600 rounded-full " href="https://forms.gle/1Tbm9Sh8LcZPjEo68" rel="noopener noreferrer" target="_blank">
            Nominate Speaker
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="inline"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
        <div className="p-4 mx-auto text-center">
          <h2 className="my-4 text-2xl font-bold text-white">
            Call for Performers
          </h2>
          <p className="max-w-sm my-6 text-center text-gray-400">
            Nominate your beloved performer and enhance experience for all!
          </p>
          <a
            className="px-6 py-3 my-4 font-semibold text-white bg-red-600 rounded-full "
            rel="noopener noreferrer"
            href="https://forms.gle/onJMSW9omnXc61ia7"
            target="_blank"
          >
            Nominate Performer
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="inline"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nominate;
