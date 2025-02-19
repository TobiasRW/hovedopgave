import { useNavigate } from "react-router-dom";
import Services from "../interactions/Services";



export default function IntroSection() {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-20 pt-16 lg:pt-20">
            <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-semibold">Hvem er cølm?</h2>
                <p className=" w-4/5 xl:w-[1150px] text-sm sm:text-base xl:text-lg font-light leading-normal text-black "><span className="font-normal italic">Af rosacea-ramte til rosacea-ramte.</span> Cølm er et 100% dansk brand grundlagt som følge af hudlidelsen, rosacea, som rammer mellem 5-10% af alle danskere - inklusiv brandets stiftere. Hos cølm er vi dedikerede til at levere effektive resultater mod hudproblemer som rosacea, perioral dermatitis og akne. <span onClick={() => navigate('om-os')} className="underline text-blue font-normal italic cursor-pointer">Læs mere...</span></p>
            </div>
            <div className="">
                <Services />
            </div>
            <div className="bg-blue flex flex-col items-center py-10 md:py-16 2lg:py-24 xl:py-28 2xl:py-32 gap-6 md:gap-10 lg:gap-12">
                <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-medium text-white text-center">Hudforbedringsgaranti</h2>
                    <p className="w-4/5 lg:w-full text-sm sm:text-base xl:text-lg font-light leading-normal text-white text-center">Hos cølm har vi stor tillid på virkningen af vores produkt at du får pengene tilbage, hvis du ikker 100% tilfreds!</p>
                </div>
                <p className="font-archivo underline text-white text-2xl cursor-pointer" onClick={() => navigate('/hudforbedringsgaranti')} >Læs mere her</p>
            </div>
        </div>
    )
}