import HomeFAQ from "../elements/HomeFAQ";
import jar from "../../assets/img/product-pics/coelm-jar.webp";
import Button from "../interactions/Button";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
    const navigate = useNavigate();

    return (
        <div className="pt-20 pb-20 lg:pt-32 flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:w-4/5 lg:mx-auto lg:gap-10 2lg:grid-cols-[1fr,1.3fr] 2xl:grid-cols-[1fr,1.5fr]">
            <img src={jar} alt="Cølm jar" className="" />
            <div className="flex flex-col items-center gap-14">
                <div className="flex flex-col gap-10 md:pt-6 lg:pt-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-semibold text-center">FAQ's</h2>
                    <HomeFAQ />
                </div>
                <Button btnType="secondaryBtn" content="Se Alle" click={() => navigate('/faq')} />
            </div>
        </div>
    )
}