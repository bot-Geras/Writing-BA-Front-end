import React from "react";
import yannis from "../../../assets/yannis.png";
import InstructorSignInForm from "../../../components/InstructorForms/InstructorSignInForm";

const InstructorSignIn = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="relative md:w-1/2 hidden md:block">
        <img src={yannis} alt="" className="w-full h-full object-cover" />
        
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center px-6">
          <h2 className="font-bold text-4xl leading-96 text-white">Welcome Back!</h2>
          <p className="font-bold text-2xl leading-58 text-white">Good to See You Again</p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6">
          <p className="font-medium text-xl leading-44 text-white">Don't Have An Account</p>
          <button type="button" className="font-medium text-2xl leading-160 px-4 py-2 rounded bg-blue-500 text-white">
            Sign Up
          </button>
        </div>

      </div>
      <div className="md:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <InstructorSignInForm />
      </div>
    </div>
  );
};

export default InstructorSignIn;
