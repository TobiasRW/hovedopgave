import { useNavigate } from 'react-router-dom';

export default function JournalSection() {

    const navigate = useNavigate();
    const navigateToBlog = () => {
        navigate('/journal'); // Gå til journalsiden ved at bruge useNavigate
    };

    return (
        <div className="bg-gradient-to-b from-pink from-40% to-white pt-10 lg:pt-20 pb-20 flex flex-col gap-5 md:gap-7 lg:gap-9">
            <h3 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-semibold text-red text-center">cølm journal</h3>
            <div className="flex flex-col gap-7 md:gap-9 lg:gap-10">
                <p className=" w-4/5  mx-auto text-sm sm:text-base xl:text-lg font-thin leading-normal text-red text-center italic">Bliv klogere på hudlidelser, bliv inspireret og find gode anbefalinger i vores blogopslag på cølm journal. </p>
                <p className="font-archivo underline text-red text-2xl text-center cursor-pointer" onClick={navigateToBlog}>Læs mere her</p>
            </div>
        </div>
    )
}