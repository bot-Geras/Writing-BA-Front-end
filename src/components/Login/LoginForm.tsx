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
              onSubmit={(values: FormValues) => {}}
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
                      <div className="mb-5 l">
                        <label
                          className="xl:max-w-[90px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                          htmlFor="e-mail"
                        >
                          Email address
                        </label>
                      </div>

                      <input
                        id="e-mail"
                        placeholder="   Enter Email address"
                        className=" flex  h-12 w-full xl:w-[70%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                    <div className=" mt-5 md:flex md:flex-col">
                      <div className="mb-5">
                        <label
                          className="xl:max-w-[60px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
                      <input
                        id="password"
                        placeholder="   Enter Password"
                        className=" h-12 w-full xl:w-[70%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px] "
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                      )}
                    </div>
                  </Form>
                );
              }}
            </Formik>
            {/* end of form */}
          </div>
          <div
            className="text-left mt-6 text-[#515AE5] hover:underline"
            data-aos="fade-up"
          >
            <Link to="">Forgot password</Link>
          </div>
          <div className="text-left mt-6" data-aos="fade-up">
            <p>Don't have an account?</p>
            <Link className=" mt-1 text-[#515AE5] hover:underline" to="">
              Sign up
            </Link>
          </div>
          <div
            className=" mt-14 flex flex-col md:flex md:flex-row justify-between xl:w-[70%]"
            data-aos="fade-up"
          >
            <Link
              to=""
              className="p-4 rounded bg-[#515AE5] text-white font-[500]"
            >
              Proceed to payment
            </Link>
            <Link
              className="mt-8 text-start text-[#515AE5] hover:underline"
              to=""
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
