import { TestimonialSlider } from "./TestimonialSlider";
import { reviewsData } from "../../Datas";

export const Testimonial = () => {
    const { title, subtitle} = reviewsData

    return (
        <section className="px-2 md:px-[160px] xl:mt-[35px] xl:mb-[56.95px]">
            <div className="container relative mx-auto">
                <div data-aos="fade-up" data-aos-offset="300">
                    {/* Text */}
                    <div>
                        <h2 className="capitalize text-[#0D1259] mb-[8px] font-[600] text-center leading-[48px] text-[36px]">{title}</h2>
                        <p className="font-[400] capitalize text-[#0D1259] text-[18px] text-center leading-[24px]">{subtitle}</p>
                    </div>
                    {/* Testimonial slider */}
                    <div className="xl:mt-[35px] mt-[35px]">
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}