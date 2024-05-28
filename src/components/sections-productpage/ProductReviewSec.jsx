import star from '../../assets/svg/icons/star.svg';
import Review from '../elements/Review';
import left from '../../assets/svg/buttons/carret-left.svg';
import right from '../../assets/svg/buttons/carret-right.svg';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../interactions/Button';



export default function productReviewSec() {

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
    <div className=" w-[90%] sm:w-[80%] mx-auto flex flex-col gap-6 xl:gap-10 ">
      <div className="flex flex-col gap-1 xl:gap-2">
        <h3 className='text-blue text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium'>Anmeldelser</h3>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <img src={star} alt="stjerne" className="w-3 xl:w-5" />
            <img src={star} alt="stjerne" className="w-3 xl:w-5" />
            <img src={star} alt="stjerne" className="w-3 xl:w-5" />
            <img src={star} alt="stjerne" className="w-3 xl:w-5" />
            <img src={star} alt="stjerne" className="w-3 xl:w-5" />
          </div>
          <p className="font-thin italic text-xs sm:text-base lg:text-sm xl:text-base 3xl:text-lg pt-1">6 anmeldelser</p>
        </div>
      </div>
      <div className="flex relative items-center">
        <div className="flex flex-row overflow-x-scroll space-x-10 xl:space-x-12 2xl:space-x-14 overflow-hidden hide-scroll-bar" ref={scrollContainerRef}>
          <Review name="Kasper H" headline="Virker" review="Jeg har døjet med rosacea gennem ca. 5 år og har prøvet forskellige cremer uden den store effekt. Må dog sige at cølm har hjulpet en del - Jeg har oplevet en tydelig forbedring og mere glat hud. Så jeg er meget tilfreds!" />
          <Review name="Signe P" headline="Super" review="Jeg har igennem mange år døjet med rosacea, uren hud og rødme ved næse mund og hage. Jeg har prøvet diverse cremer fra læger uden det store resultat. Har nu brugt cølm i en uge, og jeg har i mange år aldrig haft så pæn hud." />
          <Review name="Andrea G" headline="Lige hvad jeg manglede!" review="På trods af skepsis prøvede jeg cølm's creme. Første gang jeg nogensinde prøver en creme, der virker. De har sgu fanget noget." />
          <Review name="Mia S" headline="Fantastisk!" review="Jeg har brugt cølm i 2 uger nu og jeg kan allerede se en forskel. Min hud har aldrig set bedre ud! Jeg er så glad for at have fundet cølm." />
          <Review name="Mikkel J" headline="Hurtig virkning" review="Jeg har tidligere prøvet mange forskellige produkter mod min rosacea, men jeg synes faktisk, at denne virker super godt. Der gik ikke lang tid før rødmen lagde sig" />
          <Review name="Nikolaj H" headline="God service" review="God hjælpe og vejledning til rosacea og perioral dermatitis. Varene afsendes hurtigt og du har dem som kunde hurtigt derhjemme." />
        </div>
      </div>
      <div className="flex gap-10">
      <Button btnType="thirdBtn" content="Skriv en anmeldelse"/>
        <div className=" flex gap-10">
          <motion.img src={left} alt="" className="hidden lg:block w-8 cursor-pointer" onClick={() => handleScroll('left')}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img src={right} alt="" className="hidden lg:block w-8 cursor-pointer" onClick={() => handleScroll('right')}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
    </div>
  )
}