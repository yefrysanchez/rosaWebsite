import ContactCardSection from "./ContactCardSection";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="mx-auto max-w-7xl bg-white mt-8 rounded-xl">
      <div className="text-center py-8 tracking-tighter">
        <h2 className="text-center font-bold text-2xl lg:text-4xl tracking-tighter text-gray-700">
          Contact Us
        </h2>
        <p>Get in touch with us today!</p>
      </div>
      <ContactCardSection />
      <ContactForm />
    </div>
  );
};

export default Contact;

