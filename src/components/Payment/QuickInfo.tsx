import { aboutData } from "../../Datas";
export const QuickInfo = () => {
  const { infos } = aboutData;
  return (
    <div
      className="bg-[#515AE5] h-full invisible lg:visible"
      data-aos-offset="350"
    >
      <div
        className="lg:pt-[130px] lg:pb-[270px] lg:pl-[72px] lg:pr-[70px]"
        data-aos="fade-up"
      >
        {/* text */}
        {infos.map((info, index) => (
          <ul key={index}>
            <li className="pt-[32px] flex items-center">
              <img src={info.img} alt={info.img} />
              <p className="xl:max-w-[500px] ml-[18px] text-left font-[400] text-[18px] text-white leading-[24px]">
                {info.text}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
