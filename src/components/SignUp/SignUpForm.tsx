import logo from '../../assets/images/wbaLogo.png';
import { useFormik, Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import format from 'date-fns/format';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FormValues {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    created_at: string;
}

export const SignUpForm: React.FC = () => {
    // const { touched, errors, values, isSubmitting, handleBlur, handleChange } = props
    const initialValues: FormValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        created_at: format(new Date(), "yyyy-MM-dd")
    }

    return (
        <div>
            <div className="container relative">
                <div>
                    {/* logo */}
                    <Link to="/">
                    <img data-aos="fade-down" className="pt-[29px] mb-[32px]" src={logo} alt="logo" />
                    </Link>
                    {/* text */}
                    <div>
                        <h2 className="xl:max-w-[223px] md:text-left mb-[16px] font-[700] text-4xl md:text-[56px] md:leading-[64px] text-[#0D1259]" data-aos="fade-up" data-aos-delay="300">Sign Up</h2>
                        <h4 className="font-[600] mb-[16px] capitalize xl:max-w-[311px] text-center md:text-left text-xl md:text-[36px] md:leading-[48px] text-[#0D1259]" data-aos="fade-up" data-aos-delay="400">personal details</h4>
                    </div>
                    {/* form */}
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values: FormValues) => { }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email()
                                .required('Enter valid email-id'),
                            fullName: Yup.string().required('Please enter full name'),
                            password: Yup.string()
                                .matches(
                                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                                )
                                .required(
                                    'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                ),
                            phoneNumber: Yup.string().required('Phone number is required'),
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
                            } = props
                            return (
                            <div className="mb-[174.06px]" data-aos="fade-up" data-aos-delay="600">
                                <Form>
                                    <div>
                                        <div className="label mb-[8px]">
                                            <label className="xl:max-w-[60px] font-[500] md:text-left text-[12px] leading-[20px] text-[#0D1259] md:flex" htmlFor="full-name">Full name</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="bg-white mb-[24px] border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                                            placeholder="Enter full name"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.fullName && errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                                    </div>
                                    <div>
                                        <div className="label mb-[8px]">
                                            <label className="xl:max-w-[100px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] md:flex" htmlFor="email">Email address</label>
                                        </div>
                                        <input
                                            type="email"
                                            className="bg-white mb-[24px] border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                                            placeholder="Enter email address"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <div className="label mb-[8px]">
                                            <label className="xl:max-w-[120px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] md:flex" htmlFor="phone-number">Phone number</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="bg-white mb-[24px] border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                                            placeholder="Enter phone number"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.phoneNumber && errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                                    </div>
                                    <div>
                                        <div className="label mb-[8px]">
                                            <label className="xl:max-w-[120px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] md:flex" htmlFor="full-name">Your password</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="bg-white mb-[24px] border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                                            placeholder="Enter password"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.password && errors.password && <p className="text-red-500">{errors.password}</p>}
                                    </div>
                                    <div className="md:flex md:items-center mb-[24px]" data-aos="fade-up">
                                        <p className="xl:max-w-[211px] font-[400] text-[16px] leading-[24px] text-[#0D1259]">Already have an account?</p>
                                        <Link className="ml-2 xl:max-w-[43px] font-[400] text-[16px] leading-[24px] text-[#515AE5]" to="/">Login</Link>
                                    </div>
                                    <div className="md:flex md:items-center md:justify-between" data-aos="fade-up">
                                    <button className="rounded-[5px] bg-[#515AE5] text-white py-[12px] px-[24px] font-[700] text-[18px] leading-[24px]" type="submit">Proceed to Payment</button>
                                    <p className="underline font-[400] text-[12px] leading-[18px] text-[#515AE5]">Cancel</p>
                                    </div>
                                </Form>
                        </div>
                        )
                    }}
            </Formik>
        </div>
            </div>
        </div>
    )
}