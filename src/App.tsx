
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NoMatch } from "./pages/Error/NoMatch";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { PaymentDetails } from "./pages/Payment/PaymentDetails";
import "./App.css";
import { ForgotPassword } from "./pages/forgot.password/ForgotPassword";
import InstructorSignUp from "./pages/InstructorSignUp/InstructorSignUp.jsx";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/InstructorSignUp" element={<InstructorSignUp/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/password" element={<ForgotPassword />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
