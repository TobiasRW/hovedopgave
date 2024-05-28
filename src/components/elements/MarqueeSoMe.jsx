import Marquee from "react-fast-marquee"
import some1 from "../../assets/img/some-pics/coelm-some-1.webp"
import some2 from "../../assets/img/some-pics/coelm-some-2.webp"
import some3 from "../../assets/img/some-pics/coelm-some-3.webp"
import some4 from "../../assets/img/some-pics/coelm-some-4.webp"
import some5 from "../../assets/img/some-pics/coelm-some-5.webp"

export default function MarqueeSoMe() {
    return (
        <>
            <Marquee gradient={false} speed={40} autoFill pauseOnHover >
                <img src={some1} alt="Cølm SoMe 1" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[310px] xl:h-[310px] 2xl:w-96 2xl:h-96 px-2 sm:px-4 md:px-5 drop-shadow-xl" />
                <img src={some3} alt="Cølm SoMe 3" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[310px] xl:h-[310px] 2xl:w-96 2xl:h-96 px-2 sm:px-4 md:px-5 drop-shadow-xl" />
                <img src={some4} alt="Cølm SoMe 4" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[310px] xl:h-[310px] 2xl:w-96 2xl:h-96 px-2 sm:px-4 md:px-5 drop-shadow-xl" />
                <img src={some2} alt="Cølm SoMe 2" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[310px] xl:h-[310px] 2xl:w-96 2xl:h-96 px-2 sm:px-4 md:px-5 drop-shadow-xl" />
                <img src={some5} alt="Cølm SoMe 5" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[310px] xl:h-[310px] 2xl:w-96 2xl:h-96 px-2 sm:px-4 md:px-5 drop-shadow-xl" />
            </Marquee>
        </>
    )
}