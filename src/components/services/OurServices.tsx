import {
  HelpingHandIcon,
  BarChart2,
  Shield,
  ListChecks,
  PhoneIncoming,
  Receipt,
} from "lucide-react";

type Props = {};

const services = [
  {
    id: 1,
    title: "Personal Loan",
    details:
      "refinance Bank makes installment loans at all of our full-service bank locations, with friendly, helpful loan officers.",
    icon: <HelpingHandIcon size={40} color="#fff" />,
  },
  {
    id: 2,
    title: "Easy And Fast Answer",
    details: "Frequently Asked Questions - FAQs",
    icon: <PhoneIncoming size={40} color="#fff" />,
  },
  {
    id: 3,
    title: "No Additional Papers",
    details:
      "Membership Home; Become a Member; Open a Savings, Checking, Residence and Non-Residence Account, (Sign up Required) Get Involved.",
    icon: <Receipt size={40} color="#fff" />,
  },
  {
    id: 4,
    title: "Secure Financial Services",
    details:
      "Whether you're facing retirement or looking to better understand certain investment ideas, we can help you address your most pressing money questions.",
    icon: <Shield size={40} color="#fff" />,
  },
  {
    id: 5,
    title: "Good Investments",
    details:
      "If you're not sure the best place to park your money for the long-term, we have 7 investment options that will put your money to work.",
    icon: <BarChart2 size={40} color="#fff" />,
  },
  {
    id: 6,
    title: "Accumulation Goals",
    details:
      "Generally, the goal is to keep funds invested, reinvest income and capital gains, and have these compound for as long as possible.",
    icon: <ListChecks size={40} color="#fff" />,
  },
];

const OurServices = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[90%] p-4 mx-auto">
        {/* header */}
        <h4 className="font-main text-3xl md:text-4xl font-medium text-center">
          Take <span className="text-blue-500 underline"> A Look At</span> Our
          Service
        </h4>
        {/* grid container */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[4rem]  mt-[4rem]">
          {services.map((service) => (
            <div key={service.id} className="flex gap-4">
              <div className="flex items-center justify-center p-4 rounded-full bg-blue-500 h-[60px] w-[60px]">
                {service.icon}
              </div>
              <div>
                <h4 className="font-min capitalize tracking-wider underline">
                  {service.title}
                </h4>
                <p className="font-min font-light text-sm leading-loose">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
