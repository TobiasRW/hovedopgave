import Button from "../interactions/Button";
import { useNavigate } from "react-router-dom";


export default function ContactSection() {

    const navigate = useNavigate();

    return (
        <div className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-36">
            <div className="bg-blue flex flex-col items-center py-10 md:py-16 2lg:py-24 xl:py-28 2xl:py-32 gap-6 md:gap-10 lg:gap-12">
                <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-medium text-white text-center">Har du brug for hjælp?</h2>
                    <p className="w-4/5 lg:w-full text-sm sm:text-base xl:text-lg font-light leading-normal text-white text-center">Har du andre spørgsmål, kan du kontakte os her</p>
                </div>
                <Button btnType="primaryBtn" content="Kontakt os" click={() => navigate('/kontakt-os')}/>
            </div>
        </div>
    )
}