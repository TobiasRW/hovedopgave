import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function ParallaxText({ children, baseVelocity }) {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.set(text, { x: 0 }); // Set initial x position to 0

    gsap.to(text, {
      x: `+=${baseVelocity}%`, // Using percentage
      ease: "customEase", // Using the custom ease directly
      scrollTrigger: {
        trigger: text,
        scrub: true,
      },
    });
  }, [baseVelocity]);

  return (
    <div className="">
      <div ref={textRef} className="flex gap-3 md:gap-5 lg:gap-7 xl:gap-10 justify-center items-center">
        <span className="font-bold xl:font-black font-cabinet text-blue text-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">{children}</span>
        <span className="font-thin text-blue text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">- </span>
        <span className="font-bold xl:font-black font-cabinet text-blue text-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">{children}</span>
        <span className="font-thin text-blue text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">- </span>
        <span className="font-bold xl:font-black font-cabinet text-blue text-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">{children}</span>
        <span className="font-thin text-blue text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">- </span>
        <span className="font-bold xl:font-black font-cabinet text-blue text-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">{children}</span>
        <span className="font-thin text-blue text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">- </span>
      </div>
    </div>
  );
}

export default function VelocityScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const screenWidth = window.innerWidth;
  let baseVelocity = screenWidth < 768 ? -70 : -50; // Adjust these values as needed

  return (
    <section className="h-60 md:h-72 lg:h-96 flex flex-col gap-5 sm:gap-7 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-20 justify-center overflow-hidden">
      <ParallaxText baseVelocity={baseVelocity}>Det mest effektive hudplejeprodukt mod rosacea</ParallaxText>
      <ParallaxText baseVelocity={-baseVelocity}>Det mest effektive hudplejeprodukt mod rosacea</ParallaxText>
    </section>
  );
}
