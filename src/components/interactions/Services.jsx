import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import icon1 from '../../assets/svg/icons/levering.svg';
import icon2 from '../../assets/svg/icons/service.svg';
import icon3 from '../../assets/svg/icons/betaling.svg';
import icon4 from '../../assets/svg/icons/stars.svg';


export default function Services() {

    // Swiper pagination 
    const pagination = {
        clickable: true, // Gør det muligt at klikke på punkterne
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        }
    };

    return (
        <div className='py-12'>
            {/* Mobil Version */}
            <div className="md:hidden"> 
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={icon1} className='w-28 sm:w-32' alt="hurtig levering" />
                            <h3 className='font-medium sm:text-lg drop-shadow-xl'>1-2 Dages levering</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={icon2} className='w-28 sm:w-32 drop-shadow-xl' alt="service" />
                            <h3 className='font-medium sm:text-lg'>Effektiv kundeservice</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={icon3} className='w-28 sm:w-32 drop-shadow-xl' alt="sikker betaling" />
                            <h3 className='font-medium sm:text-lg'>Sikker betaling</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col justify-center items-center gap-4 pb-10">
                            <img src={icon4} className='w-28 sm:w-32 drop-shadow-xl' alt="høj kvalitet" />
                            <h3 className='font-medium sm:text-lg'>Gode resultater</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Tablet Version */}
            <div className="hidden md:block lg:hidden">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className="flex gap-32 justify-center pb-20">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src={icon1} className='w-32 drop-shadow-xl' alt="hurtig levering" />
                                <h3 className='font-medium text-lg '>1-2 Dages levering</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src={icon2} className='w-32 drop-shadow-xl' alt="hurtig levering" />
                                <h3 className='font-medium text-lg'>Effektiv kundeservice</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex gap-40 justify-center">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src={icon3} className='w-32 drop-shadow-xl' alt="hurtig levering" />
                                <h3 className='font-medium text-lg'>Sikker betaling</h3>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img src={icon4} className='w-32 drop-shadow-xl' alt="hurtig levering" />
                                <h3 className='font-medium text-lg'>Gode resultater</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Desktop Version */}
            <div className="hidden lg:flex gap-24 2lg:gap-28 justify-center">
                <div className="flex flex-col items-center gap-4">
                    <img src={icon1} className='w-32 drop-shadow-xl' alt="" />
                    <h3 className='font-medium text-lg xl:text-xl'>1-2 Dages levering</h3>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={icon2} className='w-32 drop-shadow-xl' alt="" />
                    <h3 className='font-medium text-lg xl:text-xl'>Effektiv kundeservice</h3>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={icon3} className='w-32 drop-shadow-xl' alt="" />
                    <h3 className='font-medium text-lg xl:text-xl'>Sikker betaling</h3>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={icon4} className='w-32 drop-shadow-xl' alt="" />
                    <h3 className='font-medium text-lg xl:text-xl'>Gode resultater</h3>
                </div>
            </div>
        </div>
    )
}