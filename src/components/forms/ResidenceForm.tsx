import { Dispatch, SetStateAction } from "react";
// import { FormState } from "../../pages/Register";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useFetchCountry } from "../../hooks/useCountry";

// type formState = {
//   updateFn: Dispatch<SetStateAction<number>>;
//   formState: UseFormRegister<FormState>;
//   errors: FieldErrors<FormState>;
// };

const ResidenceForm = ({ updateFn, formState, errors }: any) => {
  // use country hook
  const { countries }: any = useFetchCountry();

  const moveToNextForm = (e: any) => {
    e.preventDefault();

    updateFn((prev: any) => prev + 1);
  };

  const moveToPrevForm = (e: any) => {
    e.preventDefault();

    updateFn((prev: any) => prev - 1);
  };

  return (
    <>
      {/* Residence Address input */}
      <div className="flex flex-col gap-2 my-4">
        <label
          htmlFor="Residence Address"
          className="font-light font-min text-blue-100"
        >
          Residence Address
        </label>
        <input
          type="text"
          {...formState("address")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.address?.message}
        </p>
      </div>
      {/* Country */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="country" className="font-light font-min text-blue-100">
          Country
        </label>
        <select
          {...formState("country")}
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        >
          {countries &&
            countries.map((country: any) => (
              <option value={country.country} key={country.country}>
                {country.country}
              </option>
            ))}
        </select>

        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.country?.message}
        </p>
      </div>
      {/* zip code  input */}
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="code" className="font-light font-min text-blue-100">
          Zip Code
        </label>
        <input
          {...formState("zipCode")}
          type="text"
          className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
        />
        <p className="text-red-500 text-sm font-min capitalize font-light">
          {errors.zipCode?.message}
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
          type="button"
          className="bg-blue-500 font-min font-medium p-3 rounded text-white"
          onClick={moveToNextForm}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ResidenceForm;
