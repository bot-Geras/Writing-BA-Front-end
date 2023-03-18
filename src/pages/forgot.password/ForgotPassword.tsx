import Aos from "aos";
import "aos/dist/aos.css";


import { QuickInfo } from "../../components/Payment/QuickInfo";
import ForgotPasswordForm from "../../components/PasswordPage/ForgotPasswordForm";

export const ForgotPassword = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <main>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center bg-gradient-to-b lg:space-x-[190px] md:px-20 px-[2.5em] lg:px-[130px] lg:flex lg:items-center from-[#F0F5FF] to-[#FFFFFF]">
        <ForgotPasswordForm />
        <QuickInfo />
      </div>
    </main>
  );
};
