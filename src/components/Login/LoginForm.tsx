import logo from "../../assets/images/wbaLogo.png";
import {
  useFormik,
  FormikErrors,
  FormikTouched,
  FormikProps,
  Formik,
  Form,
} from "formik";
import * as Yup from "yup";
import format from "date-fns/format";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
  created_at: string;
}

export const LoginForm: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
    created_at: format(new Date(), "yyyy-MM-dd"),
  };

  return (
    <div className="flex items-center mx-auto h-screen w-4/5 xl:w-[40%] xl:ml-auto xl:mr-0">
      <div className="container h-[95%]">
        <div className=" h-[95%]">
          {/* logo */}
          <img
            //data-aos="fade-down"
            className="mt-[29px] mb-[100px]"
            src={logo}
            alt="logo"
          />
          <div className="">
            <h2
              className="xl:max-w-[223px] md:text-left mb-[16px] font-[700] text-5xl md:text-[56px] md:leading-[64px] text-[#0D1259]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Login
            </h2>
          </div>
          <div className=" mt-10" data-aos="fade-up" data-aos-delay="600">
            {/*form */}
            <Formik
              initialValues={initialValues}
              onSubmit={(values: FormValues) => { }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Enter your email"),
                password: Yup.string().required("Enter your password"),
              })}
            >
              {(props: FormikProps<FormValues>) => {
                const {
                  values,
                  touched,
                  errors,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                } = props;
                return (
                  <Form>
                    <div className=" md:flex md:flex-col">
                      <div className="mb-2 l">
                        <label
                          className="xl:max-w-[90px] font-[500] text-left md:flex text-[12px] leading-[20px] text-[#0D1259]"
                          htmlFor="e-mail"
                        >
                          Email address
                        </label>
                      </div>

                      <input
                        id="e-mail"
                        placeholder="   Enter Email address"
                        className="py-[8px] px-[16px] text-left w-64 md:w-[386px] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                    <div className=" mt-5 md:flex md:flex-col">
                      <div className="mb-2">
                        <label
                          className="xl:max-w-[60px] font-[500] md:flex text-left text-[12px] leading-[20px] text-[#0D1259]"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
                      <input
                        id="password"
                        placeholder="   Enter Password"
                        className="py-[8px] px-[16px] w-64 md:w-[386px] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px] "
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                      )}
                    </div>
                    <div
                      className="md:text-left mt-6 text-[#515AE5] hover:underline"
                      data-aos="fade-up"
                    >
                      <Link to="/">Forgot password</Link>
                    </div>
                    <div className="md:text-left mt-6 md:flex md:items-center" data-aos="fade-up">
                      <p className="xl:max-w-[191px] font-[400] text-[16px] leading-[24px] text-[#0D1259]">Don't have an account?</p>
                      <Link className="ml-2 mt-1 text-[#515AE5]" to="/signup">
                        Sign up
                      </Link>
                    </div>
                    <div
                      className="mt-[24px] block md:flex md:items-center md:justify-between"
                      data-aos="fade-up"
                    >
                      <Link
                        to="/"
                        className="py-[12px] px-[24px] rounded-[5px] text-[18px] leading-[24px] bg-[#515AE5] text-white font-[700]"
                      >
                        Proceed to Payment
                      </Link>
                      <Link
                        className="mt-8 text-[#515AE5] hover:underline"
                        to="/"
                      >
                        Cancel
                      </Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            {/* end of form */}
          </div>
        </div>
      </div>
    </div>
  );
};
