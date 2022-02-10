const ContactUs = () => {
  return (
    <div className="container flex flex-row justify-center gap-12 mx-auto text-white">
      <div className="w-2/6 ">
        <h3 className="mb-6 text-3xl font-bold"> Feel free to ask anything</h3>
        <form
          action="https://formsubmit.io/send/db144807-f3f0-4977-aa30-28b1413904fc"
          className="flex flex-col w-full my-8 "
        >
          <input type="hidden" name="_template" value="table" />
          {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
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
      <div>Contact Info and loc card - destro</div>
    </div>
  );
};

export default ContactUs;
