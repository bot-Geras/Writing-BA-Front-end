import { aboutData } from "../../Datas";

export const AboutSection = () => {
    const { title, infos } = aboutData

    return (
        <section data-aos="fade-up" data-aos-offset="350" className="mt-3 md:min-h-[335px] lg:px-[220px] md:px-10 px-5 bg-[#515AE5] text-white">
            <div className="container relative mx-auto">
                <div className="pb-10">
                    {/* title */}
                    <div className="pt-[24px]">
                        <h1 data-aos="fade-up" data-aos-delay="300" className="h1 text-center xl:max-w-[955px] h-[96px] leading-5 font-[600] md:text-[36px] md:leading-[48px]">{title}</h1>
                    </div>
                    {/* About infos */}
                    <div data-aos="fade-up" data-aos-delay="400" className="pt-[9px]">
                        {infos.map((info, index) => (
                            <ul key={index}>
                                <li className="pt-[15px] flex items-center">
                                    <img src={info.img} alt="img" />
                                    <p className="ml-2 font-[400] text-[18px] xl:max-w-[1100px]">{info.text}</p>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}