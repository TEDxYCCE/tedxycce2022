const ContactUs = () => {
  return (
    <div className="container flex flex-row justify-center gap-12 mx-auto text-white">
      <div className="w-1/3 ">
        <h3 className="mb-6 text-3xl font-semibold">
          {" "}
          Feel free to ask anything
        </h3>
        <form
          action="https://formsubmit.io/send/db144807-f3f0-4977-aa30-28b1413904fc"
          className="flex flex-col w-full my-8 "
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
            className="px-4 py-4 mb-4 text-xl text-red-500 border-[1px] border-red-500 rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col text-red-700">
        <h2 className="text-3xl font-semibold text-white pb-9">
          Where can you find us
        </h2>
        <div className="flex gap-2 py-2">
          <svg
            className="h-7 w-7 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <a
            href="mailto:organizer@tedxycce.in"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            organizer@tedxycce.in
          </a>
        </div>
        <div className="flex gap-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 "
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
          <a
            href="tel:+91 9999999999"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            +91 86685 50779
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white"
            href="https://api.whatsapp.com/send?phone=918668550779&text=Hi%20TEDxYCCE,%20Let%27s%20have%20a%20chat?"
          >
            (Same for Whatsapp)
          </a>
        </div>
        <div className="flex gap-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clipRule="evenodd"
            />
          </svg>

          <a
            href="https://ycce.edu"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Yeshwantrao Chavan College of Engineering
          </a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4356442935323!2d78.9785723!3d21.0951911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4952117eaac51%3A0x6d8277793eb63d6a!2sYeshwantrao%20Chavan%20College%20of%20Engineering%20(YCCE)%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1644498444516!5m2!1sen!2sin"
          width="600"
          height="250"
          className="py-2 border-0"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
