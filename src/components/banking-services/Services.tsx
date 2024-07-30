// services
const accounts = [
  "Private Current Account",
  "Current Account Tracker",
  "Private savings",
  "Cash ISAs",
  "Private Mortgages",
  "Private credit card",
  "Private asset finance",
  "Private Current Account",
];

// account Types
const accountTypes = [
  {
    id: 1,
    header: "Current Account Tracker",
    body: "Current Account Tracker provides all the same features as our Private Current Account but without Travel Insurance Cover.",
  },
  {
    id: 2,
    header: "Private Savings",
    body: "Whatever your needs in life, we offer a selection of savings solutions to help preserve and grow your money. Your Relationship Manager can discuss your options with you, including Private Savings Account, Cash Individual Savings Accounts (Cash ISAs)^ and Term Deposits.",
  },
  {
    id: 3,
    header: "Cash ISAs",
    body: "Your annual Cash ISA Subscription limit from the 8th April 2019 to 7th April 2020 is $5,760.We offer a range of Cash ISAs to help meet your needs, including Instant Access, Fixed Rate Bond(s) and 40 day notice. To find out more about Cash ISAs or about any of the other products and services we offer, speak to your Relationship Manager today.",
  },
  {
    id: 4,
    header: "Private mortgages",
    body: "We offer a wide range of mortgages that match your personal needs and situation, including current account, offset and fixed rate mortgages. Your Relationship Manager can introduce you to our mortgage specialists to ensure you receive a mortgage that is right for you.",
  },
];

const Services = () => {
  return (
    <div className="bg-neutral-900">
      {/* container */}
      <section className="w-[90%] mx-auto p-4 font-min">
        {/* header */}
        <h4 className="text-blue-500 underline text-3xl">
          Neo Stream Services
        </h4>
        <p className="font-light text-white mt-[2rem]">
          Banking services created exclusively for you
        </p>
        {/* explained */}
        <div className="my-[3rem]">
          <p className="text-white font-light leading-loose">
            As a customer of our private banking service, we offer a range of
            solutions that can satisfy your particular financial requirements.
            From current and savings accounts, to mortgages, credit cards and
            asset finance, your Relationship Manager will help connect you with
            products that make your money work harder.
          </p>
        </div>
        {/* account types */}
        <ul className="space-y-4">
          {accounts.map((account) => (
            <li key={account} className="font-light text-blue-500">
              {account}
            </li>
          ))}
        </ul>
        <div className="space-y-3 my-[2rem]">
          <p className="leading-loose font-light text-white">
            You and your family will also receive Worldwide Family Multi-Trip
            Travel Insurance, provided by Neo Stream Bank. This multi-trip
            travel insurance policy provides up to 31 days cover per trtip and
            there's no annual limit on the number of times you can travel. Your
            travel insurance includes up to 17 days winter sports, business and
            golf cover. You and your partner are covered, provided you live
            together and are under 75 years old, plus up to four dependant
            children under the age of 18. Cover is not provided for undeclared
            pre-existing medical conditions or for travel in, to or through
            Afghanistan, Cuba, Liberia and Sudan or areas where, prior to your
            trip commencing, the Foreign and commonwealth Office have advised
            against all but essential travel.
          </p>
          <p className="leading-loose font-light text-white">
            Full details of the cover available can be found in the Key Facts
            and Policy Document.
          </p>
        </div>
        {/* account explanation */}
        <div className="space-y-6">
          {accountTypes.map((types) => (
            <div key={types.id} className="md:w-[50%]">
              <h4 className="text-blue-500 underline">{types.header}</h4>
              <p className="text-white font-light leading-loose">
                {types.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
