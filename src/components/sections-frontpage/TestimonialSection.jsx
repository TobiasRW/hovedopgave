import Button from "../interactions/Button";
import { useRef, useState } from "react";
import Testimonial from "../elements/Testimonial";
import left from '../../assets/svg/buttons/carret-left.svg'
import right from '../../assets/svg/buttons/carret-right.svg'
import { motion } from "framer-motion";




export default function TestimonialSection() {

    // Ref til scroll container og state til at holde styr på scroll position
    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Funktion til at håndtere scroll
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;

        if (container) {
            const scrollAmount = 400; // Antal pixels container skal scrolle
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Scroll til venstre
            } else if (direction === 'right') {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Scroll til højre
            }

            setScrollPosition(container.scrollLeft); // Opdater scroll position
        }
    };
    

    return (
        <div className="relative flex flex-col gap-10 lg:gap-20 pt-20 lg:pt-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-semibold text-black text-center pb-5 lg:pb-8">Hvad siger kunderne?</h2>
            <div className="flex relative items-center">
                <motion.img src={left} alt="" className="absolute left-[5%] hidden md:block w-10 cursor-pointer" onClick={() => handleScroll('left')} 
                 whileHover={{ scale: 1.3 }}
                 whileTap={{ scale: 0.9 }}
                 />
                <div className="flex flex-row overflow-x-scroll space-x-10 overflow-hidden hide-scroll-bar lg:space-x-24 w-[90%] md:w-[70%] mx-auto" ref={scrollContainerRef}>
                    <Testimonial name="Kasper H" testimonial="Jeg har døjet med rosacea gennem ca. 5 år og har prøvet forskellige cremer uden den store effekt. Må dog sige at cølm har hjulpet en del - Jeg har oplevet en tydelig forbedring og mere glat hud. Så jeg er meget tilfreds!" />
                    <Testimonial name="Signe P" testimonial="Jeg har igennem mange år døjet med rosacea, uren hud og rødme ved næse mund og hage. Jeg har prøvet diverse cremer fra læger uden det store resultat. Har nu brugt cølm i en uge, og jeg har i mange år aldrig haft så pæn hud." />
                    <Testimonial name="Andrea G" testimonial="På trods af skepsis prøvede jeg cølm's creme. Første gang jeg nogensinde prøver en creme, der virker. De har sgu fanget noget." />
                    <Testimonial name="Mia S" testimonial="Jeg har brugt cølm i 2 uger nu og jeg kan allerede se en forskel. Min hud har aldrig set bedre ud! Jeg er så glad for at have fundet cølm." />
                    <Testimonial name="Mikkel J" testimonial="Jeg har tidligere prøvet mange forskellige produkter mod min rosacea, men jeg synes faktisk, at denne virker super godt. Der gik ikke lang tid før rødmen lagde sig" />
                    <Testimonial name="Nikolaj H" testimonial="God hjælpe og vejledning til rosacea og perioral dermatitis. Varene afsendes hurtigt og du har dem som kunde hurtigt derhjemme." />
                </div>
                <motion.img src={right} alt="" className="absolute right-[5%] hidden md:block w-10 cursor-pointer" onClick={() => handleScroll('right')}  
                 whileHover={{ scale: 1.3 }}
                 whileTap={{ scale: 0.9 }}
                />
            </div>
            <div className="flex justify-center">
            <Button btnType="secondaryBtn" content="Se Alle" />
            </div>
        </div>
    )
}