import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useFetchUser } from "../../hooks/useFetchUser";
import { toDollar } from "../../lib/convertCurrency";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const formSchema = new yup.ObjectSchema({
  card_type: yup.string().required("Please choose your type of card").min(0),
  request_reason: yup
    .string()
    .required("Choose the reason for requesting a card"),
});

type formValue = {
  card_type: string;
  request_reason: string;
};

const CreateCard = () => {
  const Navigation = useNavigate();

  const { userState: user, loading }: { userState: any; loading: boolean } =
    useFetchUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(formSchema),
  });

  // add to firebase
  const addToFireStoreRecord = async (formValue: formValue) => {
    try {
      if (!user)
        toast.error("Can not Proceed", {
          position: "bottom-center",
          bodyClassName: "toast",
        });
      if (user.accountBalance < 0)
        toast.error("Insufficient balance", {
          position: "bottom-center",
          bodyClassName: "toast",
        });

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
        type: "Card Request",
        remarks: "card Request",
        amount: 1000,
      });

      toast("Transaction Sent", {
        position: "bottom-center",
        type: "success",
        bodyClassName: "toast",
      });

      Navigation("/dashboard/home");
    } catch (error) {
      toast.error("Error in transaction could not process", {
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <>
      <div>
        <form
          className="md:w-[50%] mx-auto"
          onSubmit={handleSubmit(addToFireStoreRecord)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-min uppercase font-normal py-3 underline tracking-widest text-slate-900">
                New Virtual Card
              </h4>
              <p className="text-sm font-min font-light">
                To Generate A New Card, Cost $1,000
              </p>
            </div>
            <div className="bg-blue-400 text-blue-50 font-min p-2 rounded">
              Balance <span>{user && toDollar(user.accountBalance)}</span>
            </div>
          </div>
          {/* amount */}
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="Select Card Type" className="font-light font-min">
              Select Card Type
            </label>
            <select
              className="font-min bg-slate-400/20 p-3 font-light"
              {...register("card_type")}
            >
              <option value="master card">Master Card</option>
              <option value="visa">Visa</option>
              <option value="american express">American Express</option>
            </select>
            <p className="text-red-500 text-sm font-min capitalize font-light">
              {errors.card_type?.message}
            </p>
          </div>

          {/* Remarks */}
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="Request Reason" className="font-light font-min">
              Request Reason
            </label>
            <textarea
              {...register("request_reason")}
              className="resize-y bg-slate-400/20 px-2 font-min font-light capitalize pt-1"
            />
            <p className="text-red-500 text-sm font-min capitalize font-light">
              {errors.request_reason?.message}
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
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateCard;
