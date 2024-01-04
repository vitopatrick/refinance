import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import BankingServices from "./pages/BankingServices";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/Home";
import Account from "./pages/dashboard/Account";
import Deposit from "./pages/dashboard/Deposit";
import Transfer from "./pages/dashboard/Transfer";
import Withdraw from "./pages/dashboard/Withdraw";
import Card from "./pages/dashboard/Card";
import Loan from "./pages/dashboard/Loan";
import InternationalTransfer from "./pages/dashboard/InternationalTransfer";
import DomesticTransfer from "./pages/dashboard/DomesticTransfer";
import OnlineDeposit from "./pages/dashboard/OnlineDeposit";
import WithdrawalForm from "./pages/dashboard/WithdrawalForm";
import LoanForm from "./pages/dashboard/LoanForm";
import VerifyUser from "./pages/dashboard/VerifyUser";
import VerificationForm from "./components/id-verification/VerificationForm";
import SelfieVerification from "./components/selfie-verification/SelfieVerification";
import CreateCard from "./pages/dashboard/CreateCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/banking-services",
    element: <BankingServices />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "verify-user",
        element: <VerifyUser />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "id-verification",
        element: <VerificationForm />,
      },
      {
        path: "selfie-verification",
        element: <SelfieVerification />,
      },
      {
        path: "deposit",
        element: <Deposit />,
        children: [
          {
            path: "online-deposit",
            element: <OnlineDeposit />,
          },
        ],
      },
      {
        path: "transfer",
        element: <Transfer />,
        children: [
          {
            path: "international",
            element: <InternationalTransfer />,
          },
          {
            path: "domestic",
            element: <DomesticTransfer />,
          },
        ],
      },
      {
        path: "withdraw",
        element: <Withdraw />,
        children: [
          {
            path: "withdraw-form",
            element: <WithdrawalForm />,
          },
        ],
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "create-card",
        element: <CreateCard />,
      },
      {
        path: "loan",
        element: <Loan />,
        children: [
          {
            path: "loan-form",
            element: <LoanForm />,
          },
        ],
      },
    ],
  },
]);
