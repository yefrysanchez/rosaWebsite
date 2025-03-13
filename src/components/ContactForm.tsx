
const ContactForm = () => {
  return (
    <form className="flex flex-col gap-2 p-4 mx-auto max-w-2xl">
      <input
        placeholder="Name"
        type="text"
        name="name"
        className="border border-gray-200 rounded-md p-2 outline-none"
      />
      <input
        placeholder="Email"
        type="email"
        name="email"
        className="border border-gray-200 rounded-md p-2 outline-none"
      />
      <input
        placeholder="Phone"
        type="phone"
        name="phone"
        className="border border-gray-200 rounded-md p-2 outline-none"
      />
      <textarea
        placeholder="Message"
        cols={8}
        rows={4}
        name="message"
        className="border border-gray-200 rounded-md p-2 outline-none"
      />
      <button className="bg-black px-8 py-3 rounded-full hover:bg-[#F87F9E] transition-colors duration-300 font-bold text-white p-2 w-fit-content self-center lg:self-end cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
