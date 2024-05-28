import MarqueeSoMe from "../elements/MarqueeSoMe"
import soMeLogo from "../../assets/svg/favicon-circle-blue.svg"
import Button from "../interactions/Button"

export default function SoMeSection() {

    const instagramLink = "https://www.instagram.com/nimoskin/";

    const handleButtonClick = () => {
        window.open(instagramLink, "_blank"); // Åbn link i nyt vindue
    };

    return (
        <div className="flex flex-col md:pt-10 xl:pt-14 2xl:pt-20 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <div className=" flex gap-5 sm:gap-7 justify-center items-center">
                <img src={soMeLogo} alt="cølm logo til sociale medier" className="w-10 sm:w-14 md:w-16"/>
                <a href="https://www.instagram.com/nimoskin/" target="blank" className="text-blue font-archivo font-thin italic text-xl sm:text-2xl md:text-3xl">@coelmcalmingcream</a>
            </div>
            <MarqueeSoMe />
            <Button btnType="secondaryBtn" content="Følg os på Instagram" click={handleButtonClick} />
        </div>
    )
}