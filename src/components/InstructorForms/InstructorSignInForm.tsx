import React, { useState } from "react";
import { Formik, FormikProps, Field, Form } from "formik";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2, ImLinkedin } from "react-icons/im";

interface FormValues {
  email: string;
  password: string;
}

const InstructorSignInForm: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // perform login logic here
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col w-full ">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps: FormikProps<FormValues>) => (
          <Form className="mx-auto flex flex-col justify-start gap-2">
            <h2 className="my-8 text-start font-medium text-3xl md:text-4xl  leading-tight text-black">
              Instructor Login
            </h2>
            <Field
              type="email"
              name="email"
              className="bg-white h-10 border border-gray-400 text-gray-700 w-full px-4 md:w-[386px] md:px-6 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />

            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="bg-white h-10 border border-gray-400 text-gray-700 w-full px-4 md:w-[386px] md:px-6 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-full px-2"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <EyeIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>

            <p className="flex justify-end text-blue-500 cursor-pointer">
              Forgot Password?
            </p>
            <div className="md:w-[386px] flex justify-center">
              <button
                type="submit"
                className="bg-[#545BE8] text-white font-medium text-xl leading-144 py-2 px-4 rounded mt-6 mb-[20px]"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex flex-col gap-8 mx-20 ">
        <hr className="my-6 border-black " />
        <p className="font-medium text-xl leading-48 text-black">Or Login With</p>
        <div className="flex justify-center items-center gap-4">
          <FcGoogle size={45} />
          <ImFacebook2 size={45} color="#1877F2" />
          <ImLinkedin size={45} color="#0077B5" />
        </div>
      </div>
    </div>
  );
};

export default InstructorSignInForm;
