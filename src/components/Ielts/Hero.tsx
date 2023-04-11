import { heroData } from "../../Datas";
import { Link } from "react-router-dom";
import { NavComponent } from "../Navbar";
import { NavMobile } from "../Navbar";
import './Hero.css'

export const Hero = () => {
    const { title, subtitle, btnText, btnMobile, image } = heroData

    return (
        <section className="lg:h-[700px] lg:px-[160px] md:px-10 px-5 bg-gradient-to-b from-[#F0F5FF] to-[#FFFFFF]">
            <NavComponent />
            <NavMobile />
            <div className="container h-full relative mx-auto">
                <div className="pt-[4.939375rem] flex flex-col xl:flex-row items-center h-full">
                    {/* Text */}
                    <div>
                        <h1 className="h1 text-[#0D1259] capitalize md:text-left text-[28px] md:text-[33px] lg:text-[56px] font-[700] lg:leading-[64px] lg:h-[256px] mb-8 lg:mb-[8px] lg:w-[515px] xl:max-w-[700px]" data-aos="fade-down" data-aos-delay="400">{title}</h1>
                        <p className="xl:max-w-[530px] font-[400] lg:leading-[24px] md:text-[18px] mb-[24px] text-[#0D1259] md:text-left" data-aos="fade-down" data-aos-delay="500"> {subtitle} </p>
                        <div className="md:flex justify-center md:justify-start">
                            <Link to="/signup" className="bg-[#515AE5] invisible md:visible hover:bg-indigo-500 rounded-[5px] lg:leading-[24px] md:font-[700] text-[18px] text-white md:px-[24px] p-2 md:py-[12px]" data-aos="fade-down" data-aos-delay="600">{btnText}</Link>
                        </div>
                        <div className="md:flex mb-20 lg:mb-[146px]">
                            <Link to="/signup" className="bg-[#515AE5] visible md:invisible hover:bg-indigo-500 rounded-[5px] lg:leading-[24px] font-[700] text-[18px] text-white md:px-[24px] p-2 md:py-[12px]" data-aos="fade-down" data-aos-delay="600">{btnMobile}</Link>
                        </div>
                    </div>
                    {/* Images */}
                    <div className="xl:absolute xl:-right-24 img xl:bottom-16">
                        <img className="rounded-full" src={image} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}