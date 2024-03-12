import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";

const formSchema = new yup.ObjectSchema({
  amount: yup.string().required().min(0),
  reason_for_loan: yup.string().required("Select Reason"),
});

type formValue = {
  amount: string;
  reason_for_loan: string;
};

type Props = {};

const LoanForm = (props: Props) => {
  const { user }: any = useContext(AuthContext);
  const Navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: "",
      reason_for_loan: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  // add to firebase
  const addToFireStoreRecord = async (formValue: formValue) => {
    try {
      // collection ref
      const transactionRef = collection(
        db,
        "user",
        `${user.email}`,
        "transactions"
      );

      await addDoc(transactionRef, {
        amount: formValue.amount,
        remarks: formValue.reason_for_loan,
        approved: false,
        date: serverTimestamp(),
        type: "loan Request",
      });

      toast("Transaction Sent", {
        position: "bottom-center",
        theme: "colored",
        type: "success",
        bodyClassName: "toast",
      });

      Navigation("/dashboard/home");
    } catch (error: any) {
      toast(error.code, {
        position: "bottom-center",
        theme: "colored",
        type: "success",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <div className="font-min md:w-[50%] mx-auto">
      {/* header */}
      <div>
        <h4 className="font-min uppercase font-normal py-3 underline tracking-widest text-slate-900">
          Loan request form
        </h4>
      </div>
      <form onSubmit={handleSubmit(addToFireStoreRecord)}>
        {/* amount */}
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="amount" className="font-light font-min">
            Amount
          </label>
          <input
            type="text"
            {...register("amount")}
            placeholder="$0"
            className="p-3 rounded bg-slate-400/20  font-min font-light"
          />
          <p className="text-red-500 text-sm font-min capitalize font-light">
            {errors.amount?.message}
          </p>
        </div>
        {/* reason for loan */}
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="reason for loan" className="font-light font-min">
            Reason for loan
          </label>

          <select
            className="p-3 rounded bg-slate-400/20  font-min font-light"
            {...register("reason_for_loan")}
          >
            <option value="business launching">Business launching</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Education">Education</option>
            <option value="Health Issues">Health Issues</option>
          </select>
          <p className="text-red-500 text-sm font-min capitalize font-light">
            {errors.reason_for_loan?.message}
          </p>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="bg-blue-500 font-min font-medium p-3 rounded text-white block w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
