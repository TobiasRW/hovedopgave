import img from '../../assets/img/info/aboutHover.webp';
import arrow from '../../assets/svg/icons/aboutArrow.svg';
import logo from '../../assets/svg/logo-blue.svg';
import { useEffect, useState } from 'react';

export default function AboutImgSection() {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='w-[90%] md:w-4/5 mx-auto flex flex-col gap-10 pt-60'>
            <h3 className='text-blue font-black text-4xl xsm:text-5xl sm:text-6xl 2xl:text-7xl'>Vores Passion</h3>
            <div className="flex flex-col gap-14 md:flex-row md:gap-0 md:justify-between ">
                <div className="flex gap-3 justify-between sm:justify-normal sm:gap-10 md:flex-col md:gap-5 2lg:flex-row 2lg:gap-0 2lg:relative ">
                    <div className="relative group">
                        <div className="group-hover:bg-gradient-to-b group-hover:from-[#5eb1b5] group-hover:to-[#33646b]">
                            <img src={img} alt="" className='w-52 xs:w-60 xsm:w-64 sm:w-80 md:w-72 xmd:w-80 lg:w-96 xl:w-[420px] 2xl:w-[480px] 3xl:w-[600px] group-hover:mix-blend-hard-light' />
                        </div>
                        <div className="absolute w-20 md:w-24 lg:w-32 top-[4%] left-[6%] opacity-0 group-hover:opacity-100 transition-opacity">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className='absolute font-thin text-xs xsm:text-sm sm:text-base lg:text-xl 2xl:text-2xl top-[16%] left-[6%] w-[90%] 2xl:w-4/5 opacity-0 group-hover:opacity-100 transition-opacity'>
                            Hos cølm er vores passion at forbedre livskvaliteten for dem, der lever med <span className='text-blue italic font-light'>rosacea</span> og <span className='text-blue italic font-light'>sensitiv</span> hud.
                        </p>
                    </div>
                    <div className=" flex flex-col md:flex-row md:gap-2 2lg:flex-col 2lg:gap-14 2lg:absolute 2lg:top-16 2lg:-right-[24%] 2lg:text-nowrap ">
                        <p className='text-blue font-archivo font-light text-xs xs:text-sm xsm:text-base md:text-lg 2lg:text-xl 2lg:rotate-90 '>{isLargeScreen ? 'Hold musen over' : 'Tryk på mig'}</p>
                        <img src={arrow} alt="arrow" className='w-7 xs:w-8 xsm:w-9 self-end 2lg:self-center md:rotate-[270deg] md:scale-x-[-1] 2lg:rotate-0 2lg:scale-x-[1] 2lg:ml-2' />
                    </div>
                </div>
                <div className="flex gap-3 flex-row-reverse justify-between sm:justify-normal sm:gap-10 md:flex-col md:gap-5 2lg:flex-row 2lg:gap-0 2lg:relative">
                    <div className="relative group">
                    <div className="group-hover:bg-gradient-to-b group-hover:from-[#5eb1b5] group-hover:to-[#33646b]">
                            <img src={img} alt="" className='w-52 xs:w-60 xsm:w-64 sm:w-80 md:w-72 xmd:w-80 lg:w-96 xl:w-[420px] 2xl:w-[480px] 3xl:w-[600px] group-hover:mix-blend-hard-light' />
                        </div>
                        <div className="absolute w-20 md:w-24 lg:w-32 top-[4%] left-[6%] opacity-0 group-hover:opacity-100 transition-opacity">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className='absolute font-thin text-xs xsm:text-sm sm:text-base lg:text-xl 2xl:text-2xl top-[16%] left-[6%] w-[90%] 2xl:w-4/5 opacity-0 group-hover:opacity-100 transition-opacity'>
                            Cølm er en <span className='text-blue italic font-light'>100% dansk</span> side grundlagt som følge af hudlidelsen, <span className='text-blue italic font-light'>rosacea</span>, som rammer mellem 5-10% af alle danskere - inklusiv webshoppens stiftere.
                        </p>
                    </div>
                    <div className=" flex flex-col md:flex-row-reverse md:gap-2 2lg:flex-col-reverse 2lg:gap-14 2lg:absolute 2lg:top-0 2lg:-left-[24%] 2lg:text-nowrap">
                        <p className='text-blue font-archivo font-light text-xs xs:text-sm xsm:text-base md:text-lg 2lg:text-xl 2lg:-rotate-90'>{isLargeScreen ? 'Hold musen over' : 'Tryk på mig'}</p>
                        <img src={arrow} alt="arrow" className='w-7 xs:w-8 xsm:w-9 scale-x-[-1] md:rotate-90 md:scale-x-[1] 2lg:rotate-180 2lg:self-center 2lg:mr-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
