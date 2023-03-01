import { subscribeData } from "../../Datas";

export const Subscribe = () => {
    const { title, subtitle } = subscribeData

    return (
        <section className="px-2 my-[61px] md:px-10 lg:px-[300px]" data-aos="fade-up">
            <div className="container relative mx-auto">
                <div>
                    {/* Text */}
                    <div className="mb-[48px]">
                        <h2 className="xl:max-w-[900px] mb-[9px] text-xl md:text-[36px] leading-7 md:leading-[48px] text-[#0D1259] font-[600]" data-aos="fade-up" data-aos-delay="300">{title}</h2>
                        <p className="xl:max-w-[765px] font-[400] text-sm md:text-[18px] md:leading-[24px] text-[#0D1259]" data-aos="fade-up">{subtitle}</p>
                    </div>
                    {/* email part */}
                    <div className="md:flex md:justify-center">
                    <form className="xl:max-w-[515px] bg-[#F8F8F8] p-[6px] rounded-[5px] md:flex md:items-center justify-center md:justify-between" data-aos="fade-up" data-aos-delay="400">
                        <input type="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Enter email address" className="xl:max-w-[350px] md:max-w-[350px] max-w-[265px] md:placeholder:text-left placeholder:text-center bg-transparent border border-[#F8F8F8] focus:border-[#F8F8F8] focus:ring text-slate-500 focus:ring-[#F8F8F8] focus:outline-none font-[700] placeholder-[#0D1259] text-[18px] leading-[24px]" required/>
                        <button type="submit" className="ml-auto hover:bg-white hover:border hover:border-[#515AE5] hover:text-[#515AE5] bg-[#515AE5] font-[700] text-[18px] leading-[24px] text-white py-[12px] px-[24px] rounded-[5px]">Subscribe</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
}