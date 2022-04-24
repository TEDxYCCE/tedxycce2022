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
        <div className="container flex flex-col justify-center mx-auto md:flex-row">
          {/* <div className="w-5/6 mb-10 rounded lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <Image
              className="object-cover object-center mx-auto"
              alt="hero"
              width="720px"
              src="https://dummyimage.com/720x600"
              height="600px"
            />
          </div> */}
          {/* <div className="flex flex-col items-center text-center lg:flex-grow md:w-5/6 lg:pl-24 md:p-16 md:items-start md:text-left"> */}
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-5/6 md:px-10 ">
            {/* <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"> */}
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Early Bird Ticket: Rs. 1200/-
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 lg:px-24 xl:px-52">
                Early Bird Offer available for first few tickets only, prices
                will change soon!
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

            {/* quote box */}
            <div className="max-w-4xl p-4 mx-auto text-gray-800 rounded-lg shadow bg-white/5">
              <div className="mb-2">
                <div className="h-3 text-3xl text-left text-gray-200">“</div>
                <p className="px-4 pt-2 text-lg text-center text-gray-400">
                  Never Leave &lsquo;till tomorrow, &nbsp;
                  <br className="inline-block md:hidden xl:hidden" />
                  which you can do today.
                </p>
                <div className="h-3 text-3xl text-right text-gray-200">”</div>
                <div className="h-3 my-5 text-sm text-right text-gray-500 xl:text-lg">
                  - Benjamin Franklin
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
