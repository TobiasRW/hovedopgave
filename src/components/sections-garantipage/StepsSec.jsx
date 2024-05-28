import step1 from '../../assets/svg/icons/step1.svg';
import step2 from '../../assets/svg/icons/step2.svg';
import step3 from '../../assets/svg/icons/step3.svg';
import step4 from '../../assets/svg/icons/step4.svg';
import Button from '../interactions/Button';
import { useNavigate } from 'react-router-dom';

export default function StepsSec() {

    const navigate = useNavigate();

    return (
        <div className="w-[90%] md:w-4/5 mx-auto flex flex-col gap-10 md:gap-16 2xl:gap-24 2xl:pt-20">
            <div className="flex flex-col gap-4 lg:gap-5 2lg:gap-7">
                <h2 className="text-center text-2xl xsm:text-3xl sm:text-4xl md:text-5xl  font-semibold">Hvordan fungerer garantien?</h2>
                <p className="text-center text-sm sm:text-base xl:text-lg font-light">Følg disse 4 enkle trin for at kunne gøre krav på din hudforbedringsgaranti og få dine penge retur.</p>
            </div>
            <div className="flex flex-col gap-14 md:gap-y-20 md:grid md:grid-cols-2 2lg:grid-cols-4">
                <div className="flex flex-col items-center text-center gap-2 xl:gap-3">
                    <img src={step1} alt="Trin 1 ikon" className='w-20 2xl:w-24 drop-shadow-lg' />
                    <h3 className='text-3xl sm:text-4xl md:text-3xl font-semibold'>Trin 1</h3>
                    <p className='text-xs sm:text-base md:text-sm xl:text-base font-light w-[60%] md:w-[90%] mx-auto lg:w-full'>Anvend cølm calming cream i 30 dage</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 xl:gap-3">
                    <img src={step2} alt="trin 2 ikon" className='w-20 2xl:w-24 drop-shadow-lg' />
                    <h3 className='text-3xl sm:text-4xl md:text-3xl font-semibold'>Trin 2</h3>
                    <p className='text-xs sm:text-base md:text-sm xl:text-base font-light w-[60%] md:w-[90%] mx-auto lg:w-full'>Giv billeddokumentation fra før og efter du har taget cremen i brug</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 xl:gap-3">
                    <img src={step3} alt="Trin 3 ikon" className='w-20 2xl:w-24 drop-shadow-lg' />
                    <h3 className='text-3xl sm:text-4xl md:text-3xl font-semibold'>Trin 3</h3>
                    <p className='text-xs sm:text-base md:text-sm xl:text-base font-light w-[60%] md:w-[90%] mx-auto lg:w-full'>Ingen forbedring? Tryk på “Brug garanti” og afvent e-mailbekræftelse</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2 xl:gap-3">
                    <img src={step4} alt="Trin 4 ikon" className='w-20 2xl:w-24 drop-shadow-lg' />
                    <h3 className='text-3xl sm:text-4xl md:text-3xl font-semibold'>Trin 4</h3>
                    <p className='text-xs sm:text-base md:text-sm xl:text-base font-light w-[60%] md:w-[90%] mx-auto lg:w-full'>Returner dine produkter og modtag pengene retur</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Button btnType="secondaryBtn" content="Brug garanti" click={() => navigate('/garanti-krav')} />
            </div>
            <hr className='bg-blue border-none h-[1px] xl:h-[2px]' />
        </div>
    )
}