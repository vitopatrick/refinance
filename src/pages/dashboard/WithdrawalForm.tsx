import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {};

const formSchema = new yup.ObjectSchema({
  amount: yup.string().required(),
  address: yup.string(),
  withdrawalType: yup.string().required(),
  remark: yup.string().required(),
});

const WithdrawalForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const { user }: any = useContext(AuthContext);
  const Navigation = useNavigate();

  const AddToFireStore = async (formValue: any) => {
    try {
      // collection ref
      const transactionRef = collection(
        db,
        "user",
        `${user.email}`,
        "transactions"
      );

      await addDoc(transactionRef, {
        ...formValue,
        approved: false,
        date: serverTimestamp(),
        type: "Withdrawal",
      });

      toast("Sent", {
        position: "bottom-center",
        theme: "colored",
        type: "info",
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
    <form
      className="md:w-[50%] mx-auto"
      onSubmit={handleSubmit(AddToFireStore)}
    >
      <div>
        <h4 className="font-min uppercase font-normal py-3 underline tracking-widest text-slate-900">
          Withdraw funds
        </h4>
      </div>
      {/* amount */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="amount" className="font-light font-min">
          Amount
        </label>
        <input
          type="text"
          {...register("amount")}
          className="p-3 rounded bg-slate-400/20  font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.amount?.message}
        </p>
      </div>
      {/* Address */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="full name" className="font-light font-min">
          Address
        </label>
        <select
          {...register("withdrawalType")}
          className="p-3 rounded bg-slate-400/20  font-min font-light"
        >
          <option value="btc">Bitcoin Wallet Address</option>
          <option value="payeer">Payeer</option>
          <option value="paypal">Paypal</option>
          <option value="perfect money">Perfect money</option>
        </select>
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.withdrawalType?.message}
        </p>
      </div>
      {/* amount */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="full name" className="font-light font-min">
          Address
        </label>
        <input
          type="text"
          {...register("address")}
          className="p-3 rounded bg-slate-400/20  font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.address?.message}
        </p>
      </div>
      {/* Remarks */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="Remarks" className="font-light font-min">
          Remarks
        </label>
        <textarea
          {...register("remark")}
          className="resize-y bg-slate-400/20 px-2 font-min font-light capitalize pt-1"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.remark?.message}
        </p>
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="bg-blue-500 font-min font-medium p-3 rounded text-white block w-full"
      >
        CONTINUE
      </button>
    </form>
  );
};

export default WithdrawalForm;
