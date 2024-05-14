import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { FormState } from "../../pages/Register";

// type formState = {
//   updateFn: Dispatch<SetStateAction<number>>;
//   formState: UseFormRegister<FormState>;
//   errors: FieldErrors<FormState>;
// };

const AccountInfoForm = ({ updateFn, formState, errors }: any) => {
  // account type options
  const accountTypeOptions = [
    "Checking Account",
    "Savings Account",
    "Fixed Deposit",
    "Premium Leo Account",
  ];

  const moveToPrevForm = (e: any) => {
    e.preventDefault();

    updateFn((prev: any) => prev - 1);
  };

  return (
    <>
      {/* Account Type input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="Account Type"
          className="font-light font-min text-blue-100"
        >
          Account Type
        </label>
        <select
          {...formState("accountType")}
          className="p-4 outline-none rounded bg-blue-400/20 text-white font-min font-light"
        >
          {accountTypeOptions.map((actType) => (
            <option value={actType} key={actType}>
              {actType}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.accountType?.message}
        </p>
      </div>
      {/* Account Description  input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="account description"
          className="font-light font-min text-blue-100"
        >
          Account Description
        </label>
        <textarea
          {...formState("accountDescription")}
          className="p-4 outline-none resize-none  rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.accountDescription?.message}
        </p>
      </div>
      {/* flex container */}
      <div className="flex justify-between">
        <button
          type="button"
          className="border-blue-500 border font-min font-medium p-3 rounded text-white"
          onClick={moveToPrevForm}
        >
          Prev
        </button>
        <button
          type="submit"
          className="bg-blue-500 font-min font-medium p-3 rounded text-white"
        >
          Create Account
        </button>
      </div>
    </>
  );
};

export default AccountInfoForm;
