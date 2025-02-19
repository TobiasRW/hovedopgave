import React, { useState, useEffect } from 'react';
import bannerSmall from '../../assets/img/banners/banner-phone.webp';
import bannerMedium from '../../assets/img/banners/banner-tablet.webp';
import bannerLarge from '../../assets/img/banners/banner-pc.webp';
import Button from '../interactions/Button';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();

    // State til at holde styr på skærmstørrelsen
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // Opdater skærmstørrelsen, når vinduets størrelse ændres
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Tomt array betyder at useEffect kun kører ved mount

    // Vælg bannerbillede baseret på skærmstørrelsen
    let backgroundImage;
    if (screenSize < 640) {
        backgroundImage = bannerSmall;
    } else if (screenSize >= 640 && screenSize < 1200) {
        backgroundImage = bannerMedium;
    } else if (screenSize >= 1200 && screenSize < 1440) {
        backgroundImage = bannerLarge;
    } else {
        backgroundImage = bannerLarge;
    }

    return (
        <div className="">
            <div className="">
                <img src={backgroundImage} className='w-full h-[100svh] object-cover object-center' alt="banner" />
            </div>
            <div className="absolute inset-0 flex justify-center items-end pb-8 sm:items-center sm:pb-40 2lg:justify-end 2lg:items-end 2lg:pb-20 2lg:pr-20 xl:pr-40 xl:pb-28 2xl:pb-40 3xl:pr-64">
                <div className="flex flex-col justify-center items-center sm:gap-10">
                    <h1 className=' max-sm:hidden font-cabinet text-white font-medium text-5xl 2xl:text-6xl 3xl:text-8xl '>cølm calming cream</h1>
                    <Button content="Køb Her" btnType="primaryBtn" click={() => navigate('/produkt')} />
                </div>
            </div>
        </div>
    );
}
