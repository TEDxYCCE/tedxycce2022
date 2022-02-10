import Button from "./button";
import SectionHeading from "./sectionHeading";

const ContactUs = () => {
  return (
    <section id="contact">
      <SectionHeading title="Contact us" />
      <div className="container flex flex-col items-center justify-center gap-12 px-8 mx-auto text-white lg:items-start lg:flex-row lg:px-2">
        <div className="w-full px-3 sm:w-2/3 lg:w-1/3">
          <h3 className="mb-6 text-3xl font-semibold">
            {" "}
            Feel free to ask anything
          </h3>
          <form
            action="https://formsubmit.io/send/db144807-f3f0-4977-aa30-28b1413904fc"
            className="flex flex-col w-full mt-4"
          >
            <input type="hidden" name="_template" value="table" />
            {/* <input type="hidden" name="_next" value="http://www.tedxycce.in/thanks"/> */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="px-4 py-4 mb-4 text-black rounded-lg"
            />
            <input
              type="hidden"
              name="_subject"
              value="Website Visitor's Message!"
            />
            <input type="text" name="_honey" className="hidden" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-4 mb-4 text-black rounded-lg "
            />
            <textarea
              placeholder="Message"
              name="message"
              className="h-40 px-4 py-4 mb-4 text-black rounded-lg "
            />
            <button
              type="submit"
              className="px-4 py-4 mb-4 text-xl ring-2 ring-red-800 text-red-500 hover:bg-red-800 hover:text-gray-100 transition-colors rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full px-3 text-white sm:w-2/3 lg:w-1/3">
          <h2 className="text-3xl font-semibold pb-9">Where can you find us</h2>
          <a
            href="mailto:organizer@tedxycce.in"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row gap-2 py-2"
          >
            <svg
              className="text-red-700 h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            organizer@tedxycce.in
          </a>
          {/* <a
            href="tel:+91 9999999999"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row gap-2 py-2"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-700 h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +91 86685 50779
          </a> */}
          <a
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 py-2"
            href="https://api.whatsapp.com/send?phone=918668550779&text=Hi%20TEDxYCCE,%20Let%27s%20have%20a%20chat?"
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
            +91 86685 50779
          </a>
          <a
            href="https://ycce.edu"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-700 h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clipRule="evenodd"
              />
            </svg>
            Yeshwantrao Chavan College of Engineering
          </a>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4356442935323!2d78.9785723!3d21.0951911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4952117eaac51%3A0x6d8277793eb63d6a!2sYeshwantrao%20Chavan%20College%20of%20Engineering%20(YCCE)%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1644498444516!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="mt-3 border-0"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
