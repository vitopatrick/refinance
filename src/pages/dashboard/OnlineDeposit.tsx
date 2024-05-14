import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const formSchema = yup.object({
  amount: yup.string().required().min(0),
  remarks: yup.string().required(),
});

type formValue = {
  amount: string;
  remarks: string;
};

type Props = {};

const OnlineDeposit = (props: Props) => {
  const { user }: any = useContext(AuthContext);
  const Navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: "",
      remarks: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
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
        ...formValue,
        approved: false,
        date: serverTimestamp(),
        type: "Deposit",
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
    <form
      className="md:w-[50%] mx-auto"
      onSubmit={handleSubmit(addToFireStoreRecord)}
    >
      <div>
        <h4 className="font-min uppercase font-normal py-3 underline tracking-widest text-slate-900">
          Online Deposit
        </h4>
      </div>
      {/* amount */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="full name" className="font-light font-min">
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
      {/* address */}
      <div className="bg-slate-400/20 p-2 rounded space-y-3">
        <h4 className="uppercase text-blue-500 tracking-widest text-xs font-min  underline">
          Bitcoin Address
        </h4>
        <p className="font-mono text-sm">
          bc1qrdq47nuf67rt5lll97mmcn92zvk84scpm5uhqh
        </p>
      </div>
      {/* Remarks */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="Remarks" className="font-light font-min">
          Remarks
        </label>
        <textarea
          {...register("remarks")}
          className="resize-y bg-slate-400/20 px-2 font-min font-light capitalize pt-1"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.remarks?.message}
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

export default OnlineDeposit;
