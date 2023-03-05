import React from "react";
import logo from "../../assets/images/wbaLogo.png";
import { Formik, FormikProps, Form } from "formik";
import { object, string } from "yup";
interface PaymentFormValues {
  cardName: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cvv: string;
}
const CardDetails: React.FC = () => {
  const initialValues: PaymentFormValues = {
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cvv: "",
  };

  return (
    <div className="flex items-center mx-auto h-screen w-4/5 xl:w-[40%] xl:ml-auto xl:mr-0">
      <div className="container">
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
              Payment
            </h2>
          </div>
        </div>
        <div className=" mt-10" data-aos="fade-up" data-aos-delay="600">
          {/* <input placeholder="Enter Card Name" />
      <input placeholder="Enter card number" /> */}
          <Formik
            initialValues={initialValues}
            onSubmit={(values: PaymentFormValues) => {}}
            validationSchema={object().shape({
              cardNumber: string().min(16, "not less than 16"),
              cardHolder: string().required(),
              cardMonth: string().required(),
            })}
          >
            {(props: FormikProps<PaymentFormValues>) => {
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
                        htmlFor="card-name"
                      >
                        Card name
                      </label>
                    </div>

                    <input
                      id="card-name"
                      placeholder="   Enter Card name"
                      className=" flex  h-12 w-full xl:w-[70%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.cardName && errors.cardName && (
                    <p className="text-red-500">{errors.cardName}</p>
                  )}
                  <div className=" mt-5 md:flex md:flex-col">
                    <div className="mb-5">
                      <label
                        className="xl:max-w-[60px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                        htmlFor="card-number"
                      >
                        Card number
                      </label>
                    </div>
                    <input
                      id="card-number"
                      placeholder="Enter Card Number"
                      className=" h-12 w-full xl:w-[70%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px] "
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.cardNumber && errors.cardNumber && (
                      <p className="text-red-500">{errors.cardNumber}</p>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="mt-5 md:flex md:flex-col">
                      <label
                        htmlFor="code"
                        className="xl:max-w-[60px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                      >
                        Security code
                      </label>
                      <input
                        id="code"
                        placeholder=" CVV"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="h-12 w-full xl:w-[20%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]"
                      />
                    </div>
                    <div className="flex flex-col">
                    <label className="xl:max-w-[60px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex">Expiration Date</label>
                    <div className="flex gap-2">
                      
                    <div>
                      <select className="h-12 w-full xl:w-[50%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]">
                        <option selected>Month</option>
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((m,i) => (
                          <option value={m}> {m < 10 ? `0${m}` : m}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select className="h-12 w-full xl:w-[60%] bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]">
                        <option selected>Year</option>
                        {[
                        2020,
                        2021,
                        2023,
                        2024,
                        2025,
                        2026,
                        2027,
                        2028,
                        2029,
                        2030,
                        2031,
                        2032
                      ].map((y,i) => (
                        <option value={y}>{y}</option>
                      ))}
                      </select>
                    </div>
                    </div>
                    </div>
                  </div>
                  {touched.cvv && errors.cvv && (
                    <p className="text-red-500">{errors.cvv}</p>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
