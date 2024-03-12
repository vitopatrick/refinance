import { Link, useLocation, useNavigate } from "react-router-dom";
import { Receipt, CandlestickChart, EuroIcon } from "lucide-react";
import { toDollar } from "../../lib/convertCurrency";
import { useFetchUser } from "../../hooks/useFetchUser";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const TransactionsControllerCard = ({}: Props) => {
  const { userState: user }: any = useFetchUser();

  const location = useLocation();
  const navigation = useNavigate();

  const links = [
    {
      path: "/dashboard/deposit",
      title: "Online Deposit",
      icon: <Receipt color="#000" />,
    },
    {
      path: "/dashboard/transfer",
      title: "Transfer",
      icon: <CandlestickChart color="#000" />,
    },
    {
      path: "/dashboard/loan",
      title: "Loan",
      icon: <EuroIcon color="#000" />,
    },
  ];

  const switchText = (location: string) => {
    switch (location) {
      case "/dashboard/transfer":
        return [
          { path: "international", title: "international" },
          { path: "Domestic", title: "Domestic" },
        ];
      case "/dashboard/deposit":
        return [
          {
            path: "online-deposit",
            title: "Online Deposit",
          },
        ];
      case "/dashboard/withdraw":
        return [
          {
            path: "withdraw-form",
            title: "Withdraw",
          },
        ];
      case "/dashboard/loan":
        return [
          {
            path: "loan-form",
            title: "Request a Loan",
          },
        ];
      default:
        return null;
    }
  };

  return (
    <AnimatePresence key="modal">
      <div className="p-4 bg-slate-900 rounded h-auto">
        <div className="flex items-center justify-between">
          {/* balance  */}
          <div className="space-y-3">
            <p className="text-blue-50 font-min font-light">Balance</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key="modal"
              className="font-min text-xl md:text-2xl text-blue-200"
            >
              {user && toDollar(user.accountBalance)}
            </motion.p>
          </div>
          {/* fixed balance */}
          <div className="space-y-3 text-center">
            <p className="text-blue-50 font-min font-light capitalize">
              fixed deposit balance
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key="modal"
              className="font-min text-xl md:text-2xl text-blue-200"
            >
              {user && toDollar(user.fixedDepositBalance)}
            </motion.p>
          </div>
          {/* loan balance */}
          <div className="space-y-3">
            <p className="text-blue-50 font-min font-light">Loan Balance</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key="modal"
              className="font-min text-xl md:text-2xl text-blue-200"
            >
              {user && toDollar(user.loanBalance)}
            </motion.p>
          </div>
        </div>
        {/* actions summary */}
        <div className="flex items-center mt-[2rem] p-4 justify-evenly text-blue-100 font-min font-light">
          {location.pathname === "/dashboard/home" &&
            links.map((link) => (
              <Link
                to={link.path}
                key={link.path}
                className="flex flex-col justify-center items-center gap-4"
              >
                <span className="bg-blue-100 p-3 rounded">{link.icon}</span>
                <p>{link.title}</p>
              </Link>
            ))}
        </div>
        {/* action */}
        <div className="flex justify-between gap-2 mt-[2rem]">
          {switchText(location.pathname)?.map((value) => (
            <button
              key={value.path}
              onClick={() => navigation(value.path)}
              className="block w-full text-center capitalize font-min font-normal text-blue-500 bg-blue-50 p-2 rounded"
            >
              {value.title}
            </button>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransactionsControllerCard;
