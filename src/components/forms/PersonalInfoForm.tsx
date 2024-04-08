import { Dispatch, SetStateAction, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

import { Eye, EyeOff } from "lucide-react";
import { FormState } from "../../pages/Register";

type formState = {
  updateFn: Dispatch<SetStateAction<number>>;
  formState: UseFormRegister<FormState>;
  errors: FieldErrors<FormState>;
};

const PersonalInfoForm = ({ updateFn, formState, errors }: formState) => {
  // move to the next form
  const moveToNextForm = (e: any) => {
    e.preventDefault();
    updateFn((prev) => prev + 1);
  };

  const [isText, setIsText] = useState(false);

  return (
    <>
      {/* header */}
      <div className="text-center flex items-center justify-center">
        <h4 className="font-min py-3 text-yellow-100 font-light">
          Open an account with{" "}
          <span className="font-regular underline">International Leo Bank</span>
        </h4>
      </div>
      {/* Full Name input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="full name"
          className="font-light font-min text-blue-100"
        >
          Full Name
        </label>
        <input
          type="text"
          {...formState("name")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.name?.message}
        </p>
      </div>
      {/* email  input */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="email" className="font-light font-min text-blue-100">
          Email
        </label>
        <input
          type="email"
          {...formState("email")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.email?.message}
        </p>
      </div>
      {/* occupation input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="occupation"
          className="font-light font-min text-blue-100"
        >
          Occupation
        </label>
        <input
          type="text"
          {...formState("occupation")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.occupation?.message}
        </p>
      </div>
      {/* occupation input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="Phone Number"
          className="font-light font-min text-blue-100"
        >
          Phone Number
        </label>
        <input
          type="tel"
          {...formState("phone_number")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.phone_number?.message}
        </p>
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="Password" className="font-light font-min text-blue-100">
          Password
        </label>
        <div className="rounded bg-blue-400/20 text-white font-min font-light flex items-center px-2 py-1">
          {" "}
          <input
            type={isText ? "text" : "password"}
            {...formState("password")}
            className="p-3 flex-1 bg-transparent outline-none"
          />
          {isText ? (
            <Eye strokeWidth={1} onClick={() => setIsText(!isText)} />
          ) : (
            <EyeOff strokeWidth={1} onClick={() => setIsText(!isText)} />
          )}
        </div>

        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.password?.message}
        </p>
      </div>
      <button
        type="button"
        className="bg-blue-500 font-min font-medium p-3 rounded text-white"
        onClick={moveToNextForm}
      >
        Next
      </button>
    </>
  );
};

export default PersonalInfoForm;
