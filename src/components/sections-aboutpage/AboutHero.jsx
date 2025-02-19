import bannerSmall from '../../assets/img/banners/aboutBannerPhone.webp';
import bannerMedium from '../../assets/img/banners/aboutBanner3.webp';
import bannerBig from '../../assets/img/banners/aboutBanner2.webp';
import ScrollText from '../interactions/Scrolltext';
import { useState, useEffect } from 'react';
import Scroller from '../elements/Scroller';

export default function AboutHero() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollerVisible, setIsScrollerVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsScrollerVisible(scrollPosition <= 50);
    }, [scrollPosition]);

    let backgroundImage;
    if (screenSize < 768) {
        backgroundImage = bannerSmall;
    } else if (screenSize >= 768 && screenSize < 1440) {
        backgroundImage = bannerMedium;
    } else if (screenSize >= 1440 && screenSize < 1920) {
        backgroundImage = bannerBig;
    } else {
        backgroundImage = bannerBig;
    }

    return (
        <>
            <div className="relative mb-20">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-white text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-semibold z-10 drop-shadow-lg">Hvem er cølm?</h1>
                <img src={backgroundImage} alt="" className='brightness-[65%] w-full h-[100svh] object-cover object-center' />
                {/* <div className={`absolute bottom-3 lg:bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:right-10 lg:left-auto z-50 transition-opacity duration-500 ${isScrollerVisible ? '' : 'opacity-0 pointer-events-none'}`}>
                    <Scroller />
                </div> */}
            </div>
            <ScrollText />
        </>
    );
}
