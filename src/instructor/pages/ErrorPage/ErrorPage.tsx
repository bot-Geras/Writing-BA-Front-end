import React from "react";
import Footer from "../../components/Footer";
import sadImg from "../../../assets/images/instructor/sad.png";
import jessImg from "../../../assets/images/instructor/jess.png";
const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex justify-evenly items-start my-[3.25em]">
        <div className="flex flex-col">
          <div className="flex flex-col items-start mt-4">
            <div>
              <h2 className="text-4xl font-bold">Ooops...</h2>
            </div>
            <div className="flex gap-2 items-center mb-[30px]">
              <h3 className="text-4xl font-light">Page not found</h3>
              <img src={sadImg} alt="" />
            </div>
          </div>
          <div className="w-[370px]">
            <p className="text-sm text-left mb-8">
              The page you are looking for doesn’t exist or an other error
              occurred, go back to home page.
            </p>
            <button className="md:flex focus:outline-none text-white bg-[#545BE8] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              Go Back
            </button>
          </div>
        </div>
        <img src={jessImg} alt="" className="w-[320px] hidden md:block" />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
