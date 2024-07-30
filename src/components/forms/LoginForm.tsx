import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";



type UserDetails = {
  email: string;
  password: string;
};

// form schema
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LoginForm = () => {
  // check form
  const [isText, setIsText] = useState(false);
  const navigation = useNavigate();

  // use form
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // Login Users
  const loginUser = async (formValue: UserDetails) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );

      // add the refresh token to localStorage
      localStorage.setItem("token", user.refreshToken);

      // route to the dashboard
      navigation("/dashboard/home");
    } catch (error: any) {
      // check if the email is a valid email address
      switch (error.code) {
        case "auth/invalid-email":
          return toast(
            "Invalid Email Address,please use a valid email address",
            {
              type: "error",
              bodyClassName: "toast",
              position: "bottom-center",
            }
          );
        case "auth/internal-error":
          return toast("Server Error Please Refresh your browser or tab", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/wrong-password":
          return toast("Password is incorrect", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/user-not-found":
          return toast("User Does not exist", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/network-request-failed":
          return toast("Poor internet Connection", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        default:
          return toast(error.code, {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
      }
    }
  };

  return (
    <>
      <div className="text-center space-y-2">
        <h4 className="font-main text-blue-500 font-semibold text-3xl">
          Welcome Back
        </h4>
        <p className="font-min text-yellow-500 font-light capitalize">
          Please enter your login Details
        </p>
      </div>
      {/* Form */}
      <form className="mt-[2rem] space-y-5" onSubmit={handleSubmit(loginUser)}>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-light font-min text-blue-100">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="p-3 rounded bg-blue-400/20 text-white font-min font-light"
          />
          <p className="text-red-500 text-sm font-min capitalize font-light">
            {errors.email?.message}
          </p>
        </div>
        {/* Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Password"
            className="font-light font-min text-blue-100"
          >
            Password
          </label>
          <div className="rounded bg-blue-400/20 text-white font-min font-light flex items-center px-2 py-1">
            {" "}
            <input
              type={isText ? "text" : "password"}
              {...register("password")}
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
        {/* forgotten password */}
        <div>
          <Link
            to="/forgot-password"
            className="inline-block text-right font-min text-blue-50 font-light"
          >
            Forgot Password ?
          </Link>
        </div>
        {/* login button */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={
            !isValid || isSubmitting
              ? "w-full p-3 font-min text-neutral-500 rounded bg-blue-700"
              : "w-full p-3 font-min text-blue-100 rounded bg-blue-500"
          }
        >
          Login
        </button>
        {/* sign up */}
        <div className="text-center font-min text-blue-50 font-light flex items-center justify-center gap-2">
          <p>New To Neo Stream Bank ?</p>{" "}
          <Link to="/register" className="underline text-yellow-300">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
