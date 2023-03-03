// import for animation
import Aos from "aos";
import "aos/dist/aos.css";

import { LoginForm } from "../../components/Login/LoginForm";
import { QuickInfo } from "../../components/Login/QuickInfo";

export const Login = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <main>
      <div className="bg-gradient-to-b flex items-center from-[#F0F5FF] to-[#FFFFFF]">
        <LoginForm />
        <QuickInfo />
      </div>
    </main>
  );
};
