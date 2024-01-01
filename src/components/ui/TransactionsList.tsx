import { X } from "lucide-react";
import { toDollar } from "../../lib/convertCurrency";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";

type Props = {};

const TransactionsList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTransactions, setModalTransactions] = useState();

  const { transactions } = useFetchTransactions();

  const setModalTransactionsOpen = (theTransactions: any) => {
    const transaction = transactions.find(
      (trans: any) => trans.id == theTransactions
    );

    setModalTransactions(transaction);

    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mt-[3rem]">
        {/* header */}
        <div className="flex justify-between">
          <h3 className="font-min uppercase underline text-blue-500">
            Recent Transactions
          </h3>
          {transactions && (
            <p className="border border-blue-500 py-2 px-4 font-min rounded text-blue-500">
              {transactions.length}
            </p>
          )}
        </div>
        {/* Body */}
        {transactions &&
          transactions.map((transaction: any) => (
            <div
              key={transaction.id}
              onClick={() => setModalTransactionsOpen(transaction.id)}
              className="flex justify-between mt-[2rem] px-2 py-4 rounded bg-blue-50/40"
            >
              <div>
                <h3 className="font-min text-blue-800">
                  {transaction.remark.substr(0, 18)}...
                </h3>
                <p className="font-light font-min">{transaction.date}</p>
              </div>
              <div>
                <p
                  className={
                    transaction.approved
                      ? "font-min uppercase text-green-600"
                      : "font-min uppercase text-yellow-500"
                  }
                >
                  {transaction.approved ? "approved" : "pending"}
                </p>
                <p className="font-min font-normal">
                  {toDollar(transaction.amount)}
                </p>
              </div>
            </div>
          ))}
      </div>
      <Modal open={isOpen} close={setIsOpen} transaction={modalTransactions} />
    </>
  );
};

const Modal = ({ open, close, transaction }: any) => {
  let status = false;

  console.log(transaction);

  return (
    <AnimatePresence>
      <div
        className={
          open
            ? "fixed left-0 right-0 bottom-0 top-0 h-screen w-screen z-50 bg-black/30 flex items-center justify-center"
            : "hidden"
        }
      >
        {/* main body */}
        {transaction && (
          <motion.main
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 1,
            }}
            key={open}
            transition={{
              duration: 0.4,
            }}
            className="bg-white md:w-[40%] w-[80%] mx-auto rounded p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-min font-normal">Transaction</h4>
              <button className="p-4" onClick={() => close(!open)}>
                <X />
              </button>
            </div>
            <hr />
            {/* body */}
            <div>
              <div className="font-min flex justify-between items-center py-3">
                <h4 className="font-light">Reference</h4>
                <p className="font-mono">{transaction.id}</p>
              </div>
              <hr />
              <div className="font-min flex justify-between items-center py-3">
                <h4 className="font-light">Amount</h4>
                <p>{toDollar(transaction.amount)}</p>
              </div>
              <hr />
              <div className="font-min flex justify-between items-center py-3">
                <h4 className="font-light">Status</h4>
                <p
                  className={
                    transaction.approved
                      ? "font-min uppercase text-green-600"
                      : "font-min uppercase text-yellow-500"
                  }
                >
                  {transaction.approved ? "approved" : "pending"}
                </p>
              </div>
              <hr />
              <div className="font-min flex justify-between items-center py-3">
                <h4 className="font-light">Type</h4>
                <p className="font-min">{transaction.type}</p>
              </div>
              <hr />
              <div className="font-min flex justify-between items-center py-3">
                <h4 className="font-light">Date</h4>
                <p className="font-min ">{transaction.date}</p>
              </div>
            </div>
          </motion.main>
        )}
      </div>
    </AnimatePresence>
  );
};

export default TransactionsList;
