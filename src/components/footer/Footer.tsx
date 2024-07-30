import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-8">
      {/* container */}
      <section className="w-[90%] mx-auto p-4">
        {/* flex container */}
        <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <p className="text-blue-400 font-min leading-loose font-light capitalize text-sm text-center md:text-left">
              Neo Stream Bank is subsidiary of Belfius Bank & issuer of Debt
              instruments. We are a privately operates personal and business
              banking, including Internet Banking services based in the Belgium
              with operations all over the world and managed by security
              professionals with years of experiences in banking security and
              network protection.
            </p>
          </div>
          {/* form */}
          <ContactForm />
        </div>
        {/* copyright */}
        <div className="flex justify-between mt-[3rem] items-center font-min">
          <p className="capitalize text-yellow-50 font-light text-sm">
            Copyright © 2021
          </p>
          <p className="capitalize text-yellow-50 font-light text-sm">
            All Right Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

// contactForm

const ContactForm = () => {
  const links = [
    { id: 1, path: "/", title: "Home" },
    { id: 1, path: "/career", title: "Career" },
    { id: 1, path: "/contact", title: "Contact" },
  ];

  return (
    <div className="flex-1 w-full p-3">
      {/* header */}
      <div className="space-y-4 my-4">
        <h3 className="text-blue-50 tracking-wider font-main text-2xl font-bold">
          Receive Latest Updates for Free
        </h3>
        <input
          type="email"
          name="email"
          id="email"
          className="p-3 rounded font-min outline-none w-full font-light"
          placeholder="johndoe@example.com"
        />
        <button className="w-full bg-blue-500 p-3 font-min text-white">
          Subscribe
        </button>
      </div>
      {/* links */}
      <div className="space-x-4">
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className="text-blue-50 hover:text-blue-500 font-min"
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
