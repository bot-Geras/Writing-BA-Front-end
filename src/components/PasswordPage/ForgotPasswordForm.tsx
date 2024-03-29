import React from "react";
import logo from "../../assets/images/wbaLogo.png";
import { Formik, FormikProps, Form } from "formik";
import { string, object } from "yup";
import { useNavigate } from "react-router-dom";
interface ResetPasswordFormValues {
  email: string;
}
const ForgotPasswordForm: React.FC = () => {
  const initialValues: ResetPasswordFormValues = {
    email: "",
  };
  const navigate = useNavigate();
  const goBackToLoginPage = (): void => {
    navigate(`/login`);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-4/5 xl:w-[40%] xl:mx-0">
      <div className="container w-[386px]  ">
        <div>
          {/* logo */}
          <div
            className=" flex items-center justify-between md:items-center  md:justify-between mb-[30px] "
            data-aos="fade-down"
          >
            <img className="" src={logo} alt="logo" />
          </div>

          <div>
            <h2
              className="md:text-left mb-[1em] font-[700] text-3xl md:text-4xl md:leading-[64px] text-[#0D1259]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Forgot Password
            </h2>
          </div>
          <div
            className="flex flex-col md:flex md:mt-6 md:flex-col items-center md:items-start md:gap-5"
            data-aos="fade-up"
          >
            <p className="xl:max-w-[25em] text-center  md:text-left font-[700] text-[16px] leading-[24px] text-[#0D1259]">
              Please enter your email address so as to reset your password
            </p>
            <p className="xl:max-w-[25em] text-center  md:text-left font-[400] text-[16px] leading-[24px] text-[#0D1259]">
              A link will be sent to your mailbox
            </p>
          </div>
        </div>

        <div className=" mt-10" data-aos="fade-up" data-aos-delay="600">
          <Formik
            initialValues={initialValues}
            onSubmit={(values: ResetPasswordFormValues) => {}}
            validationSchema={object({
              email: string().email().required("enter your Email Address here"),
            })}
          >
            {(props: FormikProps<ResetPasswordFormValues>) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
                isValid,
              } = props;
              return (
                <Form className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col">
                    <div className="flex justify-center md:justify-start">
                      <label
                        className="xl:max-w-[90px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                    </div>

                    <input
                      id="email"
                      placeholder=" Enter email address"
                      className="bg-white h-10 border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                      onBlur={handleBlur}
                      autoFocus={true}
                    />
                  </div>

                  {touched.email && errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}

                  <div
                    className="mt-5 flex flex-col gap-5 md:flex-row md:justify-between md:items-center xl:w-[386px]"
                    data-aos="fade-up"
                  >
                    <button
                      className="rounded-[5px] bg-[#515AE5] text-white py-[12px] px-[24px] font-[700] text-[18px] leading-[24px]"
                      type="submit"
                    >
                      Continue
                    </button>
                    <p
                      className="underline font-[400] text-[12px] leading-[18px] text-[#515AE5] cursor-pointer"
                      onClick={goBackToLoginPage}
                    >
                      Cancel
                    </p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
