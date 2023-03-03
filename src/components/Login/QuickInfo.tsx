import { aboutData } from "../../Datas";

export const QuickInfo = () => {
  const { infos } = aboutData;
  return (
    <div
      className="h-full invisible lg:visible bg-[#515AE5]"
      data-aos-offset="350"
    >
      <div
        className="lg:pt-[130px] lg:pb-[270px] lg:pl-[72px] lg:pr-[70px]"
        data-aos="fade-up"
      >
        {infos.map((info, index) => {
          return (
            <ul key={index}>
              <li className="flex pt-[32px] items-center">
                <img className="" src={info.img} alt="image" />
                <p className="xl:max-w-[500px] ml-[18px] text-left font-[400] text-[18px] text-white leading-[24px]">{info.text}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
