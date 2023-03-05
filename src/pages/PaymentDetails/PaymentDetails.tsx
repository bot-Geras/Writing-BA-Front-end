import Aos from "aos";
import 'aos/dist/aos.css';

import CardDetails from "../../components/PaymentPage/CardDetails";
import { QuickInfo } from "../../components/SignUp";

export const PaymentDetails = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })

    return (
        <main>
            <div className="bg-gradient-to-b lg:space-x-[190px] md:px-20 px-10 lg:px-[130px] lg:flex lg:items-center from-[#F0F5FF] to-[#FFFFFF]">
              <CardDetails />
                <QuickInfo />
            </div>
        </main>
    )
}