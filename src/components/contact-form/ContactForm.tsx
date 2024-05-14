import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <div>
      {/* container */}
      <div className="w-[90%] mx-auto p-4">
        {/* flex container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <About />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      {/* header */}
      <h4 className="font-main text-3xl font-semibold">Get In Touch</h4>
      {/* info */}
      <div className="space-y-8 my-[4rem]">
        {/* address */}
        <div className="flex gap-2  items-center font-min font-light">
          <div className="bg-slate-600 p-4">
            <MapPinIcon color="#fff" />
          </div>
          <p>3005 Cranberry Hwy Rt 6 28, Wareham MA 2538, USA..</p>
        </div>
        {/* address */}
        <div className="flex gap-2 items-center  font-min font-light">
          <div className="bg-slate-600 p-4">
            <PhoneIcon color="#fff" />
          </div>
          <p>MON-FRI , 09:00 AM - 05:00 PM</p>
        </div>
        {/* address */}
        <div className="flex gap-2 items-center  font-min font-light">
          <div className="bg-slate-600 p-4">
            <MailIcon color="#fff" />
          </div>
          <p className="underline">support@refinance.online</p>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <h4 className="font-main text-3xl font-semibold mb-[2rem]">Email Us</h4>
      {/* form */}
      <div className="space-y-6">
        {/* name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-light font-min">
            Name
          </label>
          <input
            type="text"
            className="p-3 rounded border border-blue-950/20 font-min font-light"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-light font-min">
            Email
          </label>
          <input
            type="email"
            className="p-3 rounded border border-blue-950/20 font-min font-light"
          />
        </div>
        {/* message */}
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="account description" className="font-light font-min">
            Message
          </label>
          <textarea className="p-4 outline-none resize-none  rounded border border-blue-950/20 font-min font-light" />
        </div>
        {/* button */}
        <button
          type="submit"
          className="bg-slate-800 w-full font-min font-medium p-3 rounded text-white"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
