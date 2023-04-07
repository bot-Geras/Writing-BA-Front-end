import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NoMatch } from "./pages/Error/NoMatch";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { PaymentDetails } from "./pages/Payment/PaymentDetails";
import "./App.css";
import { ForgotPassword } from "./pages/forgot.password/ForgotPassword";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Navbar from "./components/navigation/navigation";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/password" element={<ForgotPassword />} />

        <Route path="/" element={<Navbar />}>
          <Route path="/page-error" element={<ErrorPage />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
