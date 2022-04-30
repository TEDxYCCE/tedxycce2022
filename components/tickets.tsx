import Button from "./button";
import SectionHeading from "./sectionHeading";

const Tickets = () => {
  return (
    <section id="register" className="">
      <div className="container px-6 py-10 mx-auto lg:py-24 lg:flex lg:flex-col lg:px-32 ">
        <SectionHeading title="Register for TEDxYCCE" />
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
              <p className="font-medium ">Registrations are now closed. :)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
