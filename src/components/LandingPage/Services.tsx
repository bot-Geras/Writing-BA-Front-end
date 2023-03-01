import { featuresData } from "../../Datas"

export const Services = () => {
    const { title, subtitle, mainServices } = featuresData

    return (
        <section className="md:px-[221px] px-2 my-[50px] xl:mt-[76px] xl:mb-[72px]">
            <div className="container relative mx-auto">
                <div>
                    {/* Text */}
                    <div>
                        <h2 data-aos="fade-down" data-aos-delay="100" className="capitalize text-[#0D1259] mb-[8px] font-[600] text-center leading-[48px] text-[36px]">{title}</h2>
                        <p data-aos="fade-down" data-aos-delay="200" className="font-[400] text-[#0D1259] text-[18px] text-center leading-[24px]">{subtitle}</p>
                    </div>
                    {/* list */}
                    <div className="mt-[71px] lg:flex lg:space-x-14 lg:items-center">
                        {mainServices.map((service, index) => {
                            const { img, title, subtitle, delay } = service
                            return (
                                <div key={index} data-aos="zoom-in" data-aos-offset="100" data-aos-delay={delay}>
                                    <div data-aos="zoom-in-right" data-aos-delay={delay} className="flex mt-10 lg:mt-0 justify-center mb-[24px]">
                                    <img src={img} alt="image" />
                                    </div>
                                    <h2 className="mb-[8px] font-[600] text-[#0D1259] text-[24px] leading-[40px]">{title}</h2>
                                    <p className="font-[400] text-[#0D1259] text-sm md:text-[16px] leading-[24px]">{subtitle}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}