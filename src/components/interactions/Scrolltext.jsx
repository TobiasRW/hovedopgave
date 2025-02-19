import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';
import '../../../src/index.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollText() {
    const ref = useRef(null);
    const textCont = useRef(null);

    const screenSize = window.innerWidth;

    useGSAP(() => {
        const heroRef = ref.current;
        const textContRef = textCont.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef,
                start: 'center center',
                end: '+=1000',
                scrub: true,
                pin: heroRef,
                // markers: true
            }
        });

        let initialFontSize; 
        let finalFontSize;

        if (screenSize < 640) {
            initialFontSize = '8rem'; 
            finalFontSize = '1.25rem'; 
        } else if (screenSize >= 640 && screenSize < 768) {
            initialFontSize = '10rem';
            finalFontSize = '2.25rem'; 
        } else if (screenSize >= 768 && screenSize < 1024) {
            initialFontSize = '12rem';
            finalFontSize = '2.5rem'; 
        } else if (screenSize >= 1024 && screenSize < 1440) {
            initialFontSize = '14rem';
            finalFontSize = '3rem'; 
        } else if (screenSize >= 1440 && screenSize < 1920) {
            initialFontSize = '16rem';
            finalFontSize = '4.25rem'; 
        } else {
            initialFontSize = '20rem';
            finalFontSize = '5rem'; 
        }

        // Apply initial font size
        gsap.set(textContRef, { fontSize: initialFontSize });

        tl.fromTo(textContRef, 
            { fontSize: initialFontSize }, 
            { fontSize: finalFontSize }
        );
    });

    return (
        <div ref={ref} className='overflow-hidden flex justify-center items-center h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] lg:pt-20 2xl:pt-40'>
            <div ref={textCont} className='flex'>
                <h2 className='scroll text-nowrap text-blue font-bold text-center '>Af rosacea-ramte, til rosacea-ramte.</h2>
            </div>
        </div>
    );
}
