import Button from "./button";
import SectionHeading from "./sectionHeading";

const Tickets = () => {
  return (
    <section id="register" className="">
      <div className="container px-6 py-10 mx-auto lg:py-24 lg:flex lg:flex-col lg:px-32 ">
        <SectionHeading title="Register for TEDxYCCE" />
        <div className="container flex flex-col justify-center mx-auto mb-10 lg:flex-row">
          <div className="flex flex-col justify-center mx-auto text-center lg:flex-grow md:w-5/6 md:px-10 ">
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Ticket Price: Rs. 1500/-
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 lg:px-24 xl:px-20">
                Single Attendee price
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
          <div className="flex flex-col justify-center mx-auto text-center lg:flex-grow md:w-5/6 md:px-10 ">
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Ticket Price: Rs. 1200/-
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 lg:px-24 xl:px-20">
                MGI/DMIMS members
              </div>
            </h1>

            {/* Button to Ticket Form */}
            <div className="mx-auto text-xl text-center">
              <Button
                type="external"
                variant="filled"
                href="https://payments.cashfree.com/forms/tedxycce_mgi"
                className="my-10"
              >
                Get Your Ticket
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto text-center lg:flex-grow md:w-5/6 md:px-10 ">
            <h1 className="mb-2 text-xl font-medium leading-5 tracking-wide sm:text-4xl ">
              Group Discounts Available
              {/* <br className="hidden lg:inline-block" />
              
              readymade gluten */}
              <div className="py-4 mt-2 text-base text-center text-gray-600 ">
                <span className="text-red-600">
                  Register for 10 people at once, and avail group discounts!
                </span>
                <ul>
                  {" "}
                  <li>
                    <b> For MGI/DMIMS Students/Faculties:</b>
                  </li>
                  <li className="text-xl text-red-600">Rs. 1000/- Per Head</li>
                  <li>
                    <b> For Others:</b>
                  </li>
                  <li className="text-xl text-red-600">Rs. 1200/- Per Head</li>
                </ul>
                To avail, contact:
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center gap-2 py-2"
                  href="https://wa.me/7276929461?text=Hello%20Anmoldeep%2C%20%0AI%20want%20to%20avail%20the%20group%20Discount%20for%20TEDxYCCE!%0A"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="none"
                    className="text-red-700 h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                  +91 7276 9294 61
                </a>
              </div>
            </h1>
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
                  <span>Exclusive Conference Pad & Pen</span>
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
                  <span>
                    Official Event <b> Certificate </b>
                  </span>
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
      </div>
    </section>
  );
};

export default Tickets;
