import { aboutData } from "../../Datas";

export const QuickInfo = () => {
  const { infos } = aboutData;
  return (
    <div
      className=" hidden xl:flex h-screen  items-center w-[35%] mr-auto ml-0 bg-[#515AE5]"
      data-aos-offset="350"
    >
      <div
        className="mt-10 mx-auto h-[70%] w-[60%] text-white text-lg text-left"
        data-aos="fade-up"
      >
        {infos.map((info, index) => {
          return (
            <div key={index} className="mt-10">
              <p className="flex items-center">
                <img className="w-6 h-4" src={info.img} alt="image" />
                <span className="ml-5">{info.text}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
