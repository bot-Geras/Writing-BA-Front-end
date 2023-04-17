import { Routes, Route } from "react-router-dom";
import { Ielts } from "./pages/Ielts/Ielts";
import { NoMatch } from "./pages/Error/NoMatch";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { PaymentDetails } from "./pages/Payment/PaymentDetails";
import "./App.css";
import { ForgotPassword } from "./pages/forgot.password/ForgotPassword";
import InstructorSignUp from "./pages/InstructorPage/SignUpPage/Instructor-SignUp";
import Home from "./pages/Home/Home";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Navbar from "./components/navigation/navigation";
import InstructorSignIn from "./pages/InstructorPage/SignInPage/InstructorSignIn";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Ielts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="/instructor/signup" element={<InstructorSignUp />} />
        <Route path="/" element={<Navbar />}>
          <Route index path="/instructor" element={<Home />} />
          <Route path="/instructor/*" element={<ErrorPage />} />
          <Route path="/instructor/signin" element={<InstructorSignIn />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </div>
  );
}

export default App;
