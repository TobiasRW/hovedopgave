import product from '../../assets/img/product-pics/product1.webp'
import check from '../../assets/svg/icons/checkmark.svg'
import infoSmall from '../../assets/img/info/info-mobil.webp'
import infoSmall2 from '../../assets/img/info/info-mobil2.webp'
import infoSmall3 from '../../assets/img/info/info-mobil3.webp'
import infoMedium from '../../assets/img/info/info-tablet.webp'
import infoLarge from '../../assets/img/info/info-pc.webp'
import infoLarge2 from '../../assets/img/info/info-pc2.webp'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ProductSection() {

    const navigate = useNavigate();
    const navigateToProductPage = () => {
        navigate('/produkt'); // Gå til produkt siden ved at bruge useNavigate
    };


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


    // Vælg info billede baseret på skærmstørrelsen
    let infoImage;
    if (screenSize < 425) {
        infoImage = infoSmall;
    } else if (screenSize >= 425 && screenSize < 640) {
        infoImage = infoSmall2;
    } else if (screenSize >= 640 && screenSize < 768) {
        infoImage = infoSmall3;
    } else if (screenSize >= 768 && screenSize < 1024) {
        infoImage = infoMedium;
    } else if (screenSize >= 1024 && screenSize < 1440) {
        infoImage = infoLarge2;
    } else {
        infoImage = infoLarge2;
    }

    return (
        <div className="">
            <div className="flex flex-col gap-10 lg:relative">
                <div className='flex flex-col gap-6 sm:w-[70%] md:w-[40%] lg:w-[230px] 2lg:w-[300px] 2xl:w-[400px] sm:mx-auto sm:pt-10 lg:absolute lg:right-0 lg:z-10 lg:gap-4 lg:pt-[5%] 2lg:pt-[3%] xl:pt-[5%] 2xl:pt-[3%] lg:mr-[15%]'>
                    <div className="grid lg:drop-shadow-md ">
                        <div className="relative">
                            <p className='absolute top-5 left-4 text-emerald bg-green px-3 lg:px-2 2xl:px-3 py-1 rounded-sm border border-emerald font-light text-sm md:text-xs 2xl:text-base'>399,-</p>
                            <img src={product} alt="produktbillede" className='w-full cursor-pointer' onClick={navigateToProductPage} />
                        </div>
                        <a href="" className='bg-blue h-12 lg:h-8 2xl:h-12 flex justify-center items-center text-white text-xl lg:text-base 2xl:text-xl font-archivo font-light'>Læg i kurv</a>
                    </div>
                    <div className="flex flex-col gap-2 2xl:gap-4">
                        <h3 className='text-3xl text-center font-medium lg:text-xl 2xl:text-4xl lg:text-white lg:font-normal'>cølm calming cream</h3>
                        <p className='font-thin text-sm italic text-center lg:text-[10px] 2lg:text-xs 2xl:text-base lg:text-white'>Effektiv mod rosacea, akne og perioral dermatitis</p>
                        <p className='font-light italic text-2xl text-center lg:text-base 2xl:text-xl lg:text-white'>399,-</p>
                    </div>
                </div>

                <div className="relative ">
                    <img src={infoImage} alt="" className=' ' />
                    <div className="absolute inset-0 flex justify-center md:justify-end md:pr-[8%] pt-[10%] sm:pt-16 md:pt-[20%] lg:justify-start lg:pr-0 lg:pt-[3%] lg:pl-[10%] 2lg:pt-[4%] 2xl:pt-[3%]">
                        <ul className='flex flex-col gap-8 lg:gap-4 2lg:gap-6 2xl:gap-8 font-light text-lg sm:text-1xl lg:text-lg 2lg:text-xl 2xl:text-3xl 3xl:text-4xl'>
                            <li className='flex items-center gap-4 sm:gap-8'> <img src={check} alt="checkmark" className='w-7 sm:w-8 lg:w-5 2xl:w-8 ' /> <p className='text-white'>Lindrer inflammation</p></li>
                            <li className='flex items-center gap-4 sm:gap-8'> <img src={check} alt="checkmark" className='w-7 sm:w-8 lg:w-5 2xl:w-8' /> <p className='text-white'>Eliminerer demodex-midler</p></li>
                            <li className='flex items-center gap-4 sm:gap-8'> <img src={check} alt="checkmark" className='w-7 sm:w-8 lg:w-5 2xl:w-8' /> <p className='text-white'>Reparerer og regenererer</p></li>
                            <li className='flex items-center gap-4 sm:gap-8'> <img src={check} alt="checkmark" className='w-7 sm:w-8 lg:w-5 2xl:w-8' /> <p className='text-white'>Regulerende</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}