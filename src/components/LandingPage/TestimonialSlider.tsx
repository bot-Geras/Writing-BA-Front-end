import { reviewsData } from "../../Datas";
import { Rating } from "flowbite-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";
import { useEffect, useState, useRef } from "react";

export const TestimonialSlider = () => {
    const swiperRef = useRef<any>()
    const [isBeginning, setIsBeginning] = useState<boolean>(true);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const { reviews } = reviewsData

    const sliderSettings = {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    };

    const handleSlideChange = (swiper: any) => {
        // console.log('Slide changed', swiper.activeIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div>
            <div className="mb-[40px] space-x-10">
                <button className={`rounded-full text-[#0D1259] bg-white ${isBeginning && `text-white`} ${isBeginning && `bg-[#434de0]`} border border-[#1090D2] p-[16px]`} onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning}><TfiAngleLeft /></button>
                <button className={`rounded-full text-[#0D1259] bg-white ${isEnd && `text-white`} ${isEnd && `bg-[#434de0]`} border border-[#1090D2] p-[16px]`} onClick={() => swiperRef.current?.slideNext()} disabled={isEnd}><TfiAngleRight /></button>
            </div>
            <Swiper
                slidesPerView={3}
                breakpoints={sliderSettings}
                keyboard={{
                    enabled: true,
                }}
                spaceBetween={20}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper;
                    swiper.on('slideChange', () => handleSlideChange(swiperRef.current));
                }}
                className="mySwiper"
            >
                {reviewsData.reviews.map((slide: any, index: any) => {
                    const { image, name, rating, review } = slide;
                    return (
                        <SwiperSlide
                            key={index}
                            className={`bg-[#F8F8F8] pb-10 mb-24 md:mb-16 p-[24px] xl:max-w-[350px] max-h-[450px] shadow-md flex items-start gap-x-[34px] rounded-[16px]`}
                        >
                            {/* profile info */}
                            <div className="flex items-center">
                                {image === '' ? <div className="rounded-full p-4 text-white text-xl font-bold px-6 bg-[#515AE5]">
                                    {name.charAt(0).toUpperCase()}
                                </div> : <img src={image} alt="image" />}
                                <p className="font-[600] leading-[24px] text-[18px] text-[#0D1259] ml-[16px]">{name}</p>
                            </div>
                            {/* rating */}
                            <Rating className="mt-[24px]" size="md">
                                {/* {rating} */}
                                <Rating.Star filled={rating < 1 ? false : true} />
                                <Rating.Star filled={rating < 2 ? false : true} />
                                <Rating.Star filled={rating < 3 ? false : true} />
                                <Rating.Star filled={rating < 4 ? false : true} />
                                <Rating.Star filled={rating < 5 ? false : true} />
                            </Rating>
                            {/* reviews */}
                            <div className="mt-[24px] text-left font-[400] xl:max-w-[302px] text-[#0D1259] text-[12px] leading-[18px]">
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    // className="mt-[24px] text-left font-[400] xl:max-w-[302px] text-[#0D1259] text-[12px] leading-[18px]"
                                    readMoreText={'read more'}
                                    readLessText={'hide'}
                                    readMoreClassName="text-[#515AE5] capitalize text-[10px]"
                                    readLessClassName="text-[#515AE5] capitalize text-[10px]"
                                >
                                    {review}
                                </ReactReadMoreReadLess>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};