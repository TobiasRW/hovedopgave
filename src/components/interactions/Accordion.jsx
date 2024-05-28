import React, { useState } from 'react'
import plusButton from '../../assets/svg/buttons/accordion-button.svg'
import { motion } from 'framer-motion'

export default function Accordion({ title, answer, variant = "default" }) {
  // State til at holde styr på om accordion er åbent eller lukket
  const [isOpen, setIsOpen] = useState(false);

  // Funktion til at bestemme styling af accordion baseret på variant
  function accordionStyle() {
    if (variant === "default") {
      return {
        container: "py-2 border-b-[1px] lg:border-b-2 border-blue w-[90%] mx-auto xs:w-4/5",
        title: "font-cabinet text-blue text-sm xs:text-base sm:text-lg md:text-xl 2xl:text-2xl text-start font-medium",
        content: "font-archivo font-thin text-black text-xs xs:text-sm sm:text-base 2xl:text-lg",
      };
    } else if (variant === "home") {
      return {
        container: "py-2 border-b-[1px] lg:border-b-2 border-blue w-[90%] mx-auto xs:w-4/5",
        title: "font-cabinet text-blue text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-2xl text-start font-medium",
        content: "font-archivo font-thin text-black text-xs xs:text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg",
      };
    } else if (variant === "product") {
      return {
        container: "py-2 xl:py-3 border-b-[1px] xl:border-b-2 border-blue",
        title: "font-cabinet text-black text-base xs:text-lg sm:text-xl lg:text-base xl:text-lg 2xl:text-2xl text-start font-medium",
        content: "font-archivo font-thin text-black text-xs xs:text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg",
      };
    }
  }

  // Hent styling baseret på variant
  const styles = accordionStyle();

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className={styles.title}>{title}</span>
        <motion.img
          src={plusButton}
          alt="Åben eller luk spørgsmål"
          className='w-4 2xl:w-6'
          animate={{ rotate: isOpen ? -45 : 0, scale: isOpen ? 1.2 : 1 }}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${styles.content} ${
          isOpen ? "grid-rows-[1fr] opacity-100 py-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden leading-normal">{answer}</div>
      </div>
    </div>
  );
}
