// const pictures = [
//   "https://internationalneo.online/bg/14.jpg",
//   "https://internationalneo.online/bg/23.jpg",
//   "https://internationalneo.online/bg/26.jpg",
// ];

const CareersExplained = () => {
  return (
    <div className="bg-neutral-900">
      {/* container */}
      <div className="mx-auto w-[90%] p-4">
        {/* header */}
        <h4 className="text-blue-500 font-min text-3xl underline">
          Neo Stream Bank Careers
        </h4>
        {/* body */}
        <p className="font-min text-blue-50 font-light my-[2rem] leading-loose">
          Customer care is an essential source of competitive advantage in the
          face of generic products offered by the management. Customer care is a
          cornerstone of the bank’s long term competitive advantage. First
          Chartered Bank explicitly speaks of our bank’s customer centric focus.
          Thus, our business in Neo Stream Bank is centered on our customers and
          their ultimate satisfaction.
        </p>
        <p className="font-min text-blue-50 font-light my-[2rem] leading-loose">
          We are committed to delivering seamless customer service and
          maintaining long-term customer relationship in every location we
          operate. Our banking application, has good customer information system
          module which provides adequate information/data needed to serve the
          customer better.
        </p>
        {/* Images */}
        <Images />
      </div>
    </div>
  );
};

const Images = () => {
  return (
    <div>
      {/* image grid */}
      {/* <div className="md:grid grid-cols-1 md:grid-cols-3 gap-[4rem] md:gap-[2rem]">
        {pictures.map((image) => (
          <div key={image}>
            <img src={image} className="h-full w-full rounded-md" />
          </div>
        ))}
      </div> */}
      {/* more write up */}
      <p className="font-min font-light text-white my-[2rem] leading-loose">
        Our self-service options can help you easily access the information
        you're looking for. If you need additional assistance, Contact us or
        speak with a Customer Care representative.
      </p>
      <p className="font-min font-light text-white my-[2rem] leading-loose">
        We listen to our customers
      </p>
      <p className="font-min font-light text-white my-[2rem] leading-loose">
        We have identified unique ways of getting feedback from our customers
        because feedback is fundamental to the continuity and sustenance of our
        business. For us to continuously stay alive in the hearts of our
        customers and also get their feedback at the instant, we have earmarked
        the following channels of communication:
      </p>
      <p className="font-min font-light text-white my-[2rem] leading-loose">
        All customer complaints get instant attention. We strive to attend to
        issues within 24 hours and provide solutions or options accordingly.
      </p>
    </div>
  );
};

export default CareersExplained;
