import ContactForm from "@/app/[locale]/contactanos/components/ContactForm";
import ContactTitle from "@/app/[locale]/contactanos/components/ContactTitle";

const Contactanos = () => {
  return (
    <div className="mb-24">

      <ContactTitle />

      <div className="container flex flex-col w-full items-center lg:w-3/4 mx-auto mt-12">

        <ContactForm />

      </div>
    </div>
  );
};

export default Contactanos;
