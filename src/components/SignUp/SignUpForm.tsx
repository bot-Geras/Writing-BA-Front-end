import logo from '../../assets/images/wbaLogo.png';
import { useFormik, FormikErrors, FormikTouched, FormikProps } from 'formik';
import * as Yup from 'yup';
import format from 'date-fns/format';
import React, { ReactNode } from 'react';

interface FormValues {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    created_at: string;
}

interface OtherProps {
    errors?: FormikErrors<{
        [field: string]: any
    }> 
    touched?: FormikTouched<{
        [field: string]: any
    }>
}

export const SignUpForm: React.FC<OtherProps> = ({ errors, touched }) => {
    const initialValues: FormValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        created_at: format(new Date(), "yyyy-MM-dd")
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { initialValues },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full name is required."),
            email: Yup.string().email("Please enter a valid email").required("Email is required."),
            phoneNumber: Yup.string().required("Phone number is required."),
            password: Yup.string().required("Please enter your password."),
        }),
        onSubmit: () => { }
    })

    return (
        <div>
            <div className="container relative">
                <div>
                    {/* logo */}
                    <img data-aos="fade-down" className="mt-[29px] mb-[32px]" src={logo} alt="logo" />
                    {/* text */}
                    <div>
                        <h2 className="xl:max-w-[223px] md:text-left mb-[16px] font-[700] text-4xl md:text-[56px] md:leading-[64px] text-[#0D1259]">Sign Up</h2>
                        <h4 className="font-[600] mb-[16px] capitalize xl:max-w-[311px] text-center md:text-left text-xl md:text-[36px] md:leading-[48px] text-[#0D1259]">personal details</h4>
                    </div>
                    {/* form */}
                    <div>
                        <form onSubmit={formik.handleSubmit} action="">
                            <div>
                                <div className="label mb-[8px]">
                                    <label className="xl:max-w-[60px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex" htmlFor="full-name">Full name</label>
                                </div>
                                <input
                                    type="text"
                                    className="bg-white border border-[#C4C4C4] text-slate-600 w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                                    placeholder="Enter full name"
                                    required
                                    {...formik.getFieldProps("fullName")}
                                />
                                {/* {touched?.fullName && errors?.fullName && <p className="text-red-500">{errors?.fullName}</p>} */}
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}