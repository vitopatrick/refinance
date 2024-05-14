import { Link } from "react-router-dom";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <section className="h-screen bg-slate-900">
      {/* container */}
      <main className="w-[90%] md:w-[30%] mx-auto py-[4rem]">
        <div className="text-center space-y-2">
          <h4 className="font-main text-blue-500 font-semibold text-3xl">
            Password Reset
          </h4>
          <p className="font-min text-yellow-500 font-light capitalize">
            Enter your registered email address
          </p>
        </div>
        {/* form */}
        <form action="">
          {/* header */}
          {/* Form */}
          <form className=" space-y-5">
            {/* email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-light font-min text-blue-100"
              >
                Email
              </label>
              <input
                type="email"
                // {...register("email")}
                className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
              />
              {/* <p className="text-red-500 text-sm font-min capitalize font-light">
                {errors.email?.message}
              </p> */}
            </div>

            {/* login button */}
            <button
              type="submit"
              className="w-full p-3 font-min text-blue-100 rounded bg-blue-500"
            >
              Send reset link
            </button>
            {/* sign up */}
            <div className="text-center font-min text-blue-50 font-light flex items-center justify-center gap-2">
              <p>New To refinance Bank ?</p>{" "}
              <Link to="/register" className="underline text-yellow-300">
                Sign Up
              </Link>
            </div>
          </form>
        </form>
      </main>
    </section>
  );
};

export default ForgotPassword;
