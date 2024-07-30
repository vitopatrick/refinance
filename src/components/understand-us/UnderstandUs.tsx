import { Link } from "react-router-dom";

type Props = {};

const reviews = [
  {
    id: 1,
    review:
      "For more than two decades I've been banking with Neo Stream Bank. To me the customer service is top notch you know.",
    name: "Adele Lucy",
    avatar: "https://internationalneo.online/people/pic5.jpeg",
    position: "Courier",
  },
  {
    id: 2,
    review:
      "One thing very outstanding about Neo Stream Bank is the loan programm. For once I paid back a loan without being under pressure.",
    name: "John Smith",
    avatar: "https://internationalneo.online/people/pic2.jpeg",
    position: "Event Planner",
  },
];

const achievements = [
  {
    id: 1,
    title: "18K+",
    subtitle: "Customers",
  },
  {
    id: 2,
    title: "20K",
    subtitle: "FeedBack",
  },
  {
    id: 3,
    title: "5,000+",
    subtitle: "Workers",
  },
  {
    id: 4,
    title: "70+",
    subtitle: "Contributors",
  },
];

const UnderstandUs = (props: Props) => {
  return (
    <div className="bg-neutral-900 py-6">
      {/* container */}
      <section className="w-[90%] mx-auto p-3">
        <Expectations />
        <CustomerReview />
        <hr />
        <ApplyForAnAccount />
      </section>
    </div>
  );
};

// Expectations
const Expectations = () => {
  return (
    <div>
      <h4 className="font-main text-white md:w-[50%] mx-auto  text-center text-2xl md:text-4xl font-semibold capitalize">
        We Always Try{" "}
        <span className="underline text-blue-500">To Understand Customers</span>{" "}
        Expectation
      </h4>
      <p className="my-[3rem] font-min text-white font-light text-center md:w-[50%] mx-auto">
        Start Banking and making profit in our platform requires no professional
        skills. In just three easy steps you are a millionaire.
      </p>
      {/* achievements */}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-[6rem] my-[3rem] mx-auto md:w-[60%]">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="text-center space-y-3">
            <h3 className="text-blue-500 font-bold text-main text-2xl  md:text-5xl">
              {achievement.title}
            </h3>
            <p className="text-blue-50 font-min font-light">
              {achievement.subtitle}
            </p>
          </div>
        ))}
      </div>
      {/* Questions */}
      <div className="bg-white md:w-[50%] md:rounded-full p-4 mx-auto my-[3rem] flex items-center flex-col md:flex-row justify-between border-[2px] border-blue-500 border-dashed gap-8">
        <div className="md:text-left text-center">
          <h4 className="font-main text-lg capitalize">
            Have any question about us?
          </h4>
          <p className="font-min font-light">Don't hesitate to contact us</p>
        </div>
        <Link
          to="/register"
          className="bg-blue-500 p-4 md:rounded-full text-white font-light font-min"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

// customer reviews
const CustomerReview = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 my-[4rem]">
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4">
          <div className="w-[130px]">
            <img src={review.avatar} alt="" className="w-full rounded-full" />
          </div>
          <div className="space-y-4">
            <p className="font-min text-blue-50 leading-loose text-sm font-light">
              {review.review}
            </p>
            <h4 className="font-main font-semibold text-blue-50">
              {review.name}
            </h4>
            <p className="text-blue-500 font-light font-min text-sm">
              {review.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Apply for an account
const ApplyForAnAccount = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 py-8">
      <h3 className="font-main md:text-4xl text-2xl capitalize text-blue-50 text-center font-semibold">
        Apply for an account in minutes
      </h3>
      <p className="text-center text-white font-min  font-light">
        Get your Neo Stream Bank account today!
      </p>
      <Link
        to="/register"
        className="p-4 bg-blue-500 font-min font-light uppercase rounded text-blue-50"
      >
        Get Your Account Today
      </Link>
    </section>
  );
};

export default UnderstandUs;
