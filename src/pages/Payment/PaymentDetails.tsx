import Aos from "aos";
import "aos/dist/aos.css";

import PaymentForm from "../../components/Payment/PaymentForm";
import { QuickInfo } from "../../components/Payment/QuickInfo";

export const PaymentDetails = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <main>
      <div className="flex xl:justify-center xl:items-center bg-gradient-to-b lg:space-x-[190px] md:px-20 px-10 lg:px-[130px] lg:flex lg:items-center from-[#F0F5FF] to-[#FFFFFF]">
        <PaymentForm />
        <QuickInfo />
      </div>
    </main>
  );
};
