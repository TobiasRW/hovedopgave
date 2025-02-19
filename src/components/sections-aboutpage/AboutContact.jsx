import Button from "../interactions/Button";
import { useNavigate } from "react-router-dom";


export default function AboutContact() {

    const navigate = useNavigate();

    return (
        <div className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-36">
            <div className="bg-blue flex flex-col items-center py-10 md:py-16 2lg:py-24 xl:py-28 2xl:py-32 gap-6 md:gap-10 lg:gap-14">
                <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-medium text-white text-center">Kontakt os</h2>
                    <p className="w-[90%] md:w-4/5 text-sm sm:text-base xl:text-lg font-thin leading-normal text-white text-center">Vi elsker at høre fra vores kunder! Hvis du har spørgsmål, feedback eller blot vil dele din oplevelse med vores produkter, er du altid velkommen til at kontakte os.</p>
                </div>
                <Button btnType="primaryBtn" content="Kontakt os" click={() => navigate('/kontakt-os')}/>
            </div>
        </div>
    )
}