import tiktok from '../../assets/svg/icons/tiktok.svg';
import facebook from '../../assets/svg/icons/facebook.svg';
import instagram from '../../assets/svg/icons/instagram.svg';

export default function Footer() {
    return (
        <div className='flex flex-col gap-5 lg:gap-0 md:gap-8 w-[90%] md:w-4/5 mx-auto lg:grid lg:grid-cols-[2fr,1fr] pb-10 lg:pb-16'>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:border-b-[1px] md:border-blue lg:border-none">
                <div className="border-b-[1px] border-blue pb-6 md:pb-8 md:border-none">
                    <ul className='flex flex-col gap-4 md:gap-6'>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Om os</li>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Persondatapolitik</li>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Refunderingspolitik</li>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Leveringspolitik</li>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Servicebetingelser</li>
                        <li className="font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl cursor-pointer hover:text-blue transition-all duration-300">Cookiepolitik</li>
                    </ul>
                </div>
                <div className=" flex flex-col gap-4 md:gap-6 border-b-[1px] border-blue md:border-none pb-6 md:pb-8 md:justify-end md:mr-20 lg:justify-start lg:items-start lg:mr-[15%]">
                    <p className='font-cabinet font-semibold sm:text-xl md:text-2xl 2xl:text-3xl '>Kontakt</p>
                    <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                        <p className='font-light sm:text-lg xl:text-xl 2xl:text-xl'>E-mail:</p>
                        <a href="mailto:kontakt@coelm.dk" className='font-archivo font-thin text-sm sm:text-base 2xl:text-lg underline cursor-pointer hover:text-blue transition-all duration-300'>kontakt@coelm.dk</a>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <p className='font-light sm:text-lg xl:text-xl 2xl:text-xl lg:gap-3 xl:gap-4'>Messenger</p>
                        <a href="#" className='font-archivo font-thin text-sm sm:text-base xl:text-lg underline cursor-pointer hover:text-blue transition-all duration-300'>kontakt@facebook</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 xl:gap-8 pb-6 md:pb-8 md:flex-row md:justify-between md:items-center lg:flex-col lg:justify-start lg:items-end">
                <p className='font-archivo font-thin text-sm sm:text-base xl:text-lg 2xl:text-xl'>CVR: 12345678</p>
                <hr className='bg-blue h-[1px] border-none md:hidden' />
                <div className="flex gap-4 md:gap-6 md:mr-24 lg:mr-0 xl:mr-3 2xl:mr-6">
                    <img src={tiktok} alt="tiktok logo" className='w-5 cursor-pointer' />
                    <img src={instagram} alt="instagram logo" className='w-7 cursor-pointer' />
                    <img src={facebook} alt="facebook logo" className='w-3 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}