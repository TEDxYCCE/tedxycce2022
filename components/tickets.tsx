import Image from "next/image";
import Button from "./button";
import SectionHeading from "./sectionHeading";

const stairsClasses =
  "flex border-l-4 border-t-4 md:border-l-8 md:border-t-8 border-red-800 pl-1 py-1 gap-1";

const Tickets = () => {
  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto lg:py-24 lg:flex lg:flex-col lg:px-32 ">
        <SectionHeading title="Register for TEDxYCCE" />
        <div className="container flex flex-col justify-center mx-auto mb-10 md:flex-row">
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-5/6 md:px-10 ">
            {/* <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"> */}
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Ticket Price: Rs. 1200/-
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 lg:px-24 xl:px-20">
                Special Offering for people belonging to Any of Shree Datta
                Meghe Group of Institutions
              </div>
            </h1>

            {/* Button to Ticket Form */}
            <div className="mx-auto text-xl text-center">
              <Button
                type="external"
                variant="filled"
                href="https://payments.cashfree.com/forms/tedxycce"
                className="my-10"
              >
                Get Your Ticket
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-5/6 md:px-10 ">
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Ticket Price: Rs. 1500/-
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 lg:px-24 xl:px-20">
                Regular Ticket for anyone not connected to any of MGI
                Institutions by any means.
              </div>
            </h1>

            {/* Button to Ticket Form */}
            <div className="mx-auto text-xl text-center">
              <Button
                type="external"
                variant="filled"
                href="https://payments.cashfree.com/forms/tedxycce"
                className="my-10"
              >
                Get Your Ticket
              </Button>
            </div>
          </div>
        </div>
        {/* quote box */}
        {/* <div className="max-w-4xl p-4 mx-auto text-gray-800 rounded-lg shadow bg-white/5">
          <div className="mb-2">
            <div className="h-3 text-3xl text-left text-gray-200">“</div>
            <p className="px-4 pt-2 text-lg text-center text-gray-400">
              Never Leave &lsquo;till tomorrow, &nbsp;
              <br className="inline-block md:hidden xl:hidden" />
              which you can do today.
            </p>
            <div className="h-3 text-right text-gray-200 text-3yxl">”</div>
            <div className="h-3 my-5 text-sm text-right text-gray-500 xl:text-lg">
              - Benjamin Franklin
            </div>
          </div>
        </div> */}

        {/* whats covered in ticket */}
        <div className="p-4 mx-auto text-gray-800 rounded-lg bg-white/5 ">
          <div className="mb-2">
            <div className="text-3xl text-left text-gray-200">
              <p className="font-medium ">
                {" "}
                What&apos;s Covered with the ticket?{" "}
              </p>

              <div className="grid grid-cols-2 mt-10 text-2xl text-gray-400">
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Full Meal Lunch</span>
                </div>
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Exclusive Conference Pad</span>
                </div>
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Tasty Snacks</span>
                </div>
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Event Exclusive Pen</span>
                </div>
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Exclusive Wrist Band</span>
                </div>
                <div className="flex ">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-2 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Event Themed Pouch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        {/* <div className="text-2xl text-center text-gray-300">
          Under the stairs
        </div>
        <h3 className="mt-2 text-xl font-semibold text-center">
          TEDxYCCE 2021
        </h3>
        <div className="py-4 mt-2 text-center text-gray-200 lg:px-24 xl:px-52">
          To unwrap the invisible foundation of the stairs and explore its
          incredible power, TEDxYCCE 2021 came up with the broad theme
          &quot;Under the Stairs&quot; which is an idea to uncover the hidden
          treasure below the Stairs.
        </div> */}
        {/* Button to TEDxYCCE 2021 Website */}
      </div>
    </section>
  );
};

export default Tickets;
