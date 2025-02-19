import quote from '../../assets/svg/icons/quoteUp.svg'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutTextSection() {

  const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const quoteRef3 = useRef(null);

  const isInView1 = useInView(quoteRef1, { margin: '0px 0px -200px 0px', once: true});
  const isInView2 = useInView(quoteRef2, { margin: '0px 0px -200px 0px', once: true});
  const isInView3 = useInView(quoteRef3, { margin: '0px 0px -200px 0px', once: true});


  const quoteVariant = {
    hidden: { opacity: 0, x: -50, transition: { duration: 0.75 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 } }
  };

  const quoteMarkerVariant = {
    hidden: { opacity: 0, x: -50, transition: { duration: 0.5 }, rotate: 45 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 }, rotate: 0 }
  };




  return (
    <div className="w-[90%] md:w-4/5 mx-auto pt-20 lg:pb-20 xl:pt-40 flex flex-col gap-20 xl:grid xl:grid-cols-2 xl:gap-y-40 xl:gap-x-[20%] 2xl:gap-x-[22%] 3xl:gap-x-[28%]">
      <div className="flex flex-col gap-4 xl:order-1">
        <h3 className='text-blue font-black text-4xl xsm:text-5xl sm:text-6xl 2xl:text-7xl'>Kvalitet</h3>
        <p className='text-black font-archivo leading-normal font-thin text-xs xs:text-sm xsm:text-base md:text-lg 2lg:text-xl'>Hos cølm er kvalitet ikke blot en målsætning, men en grundlæggende værdi. Vi mener, at alle har ret til en sund og flot hud, og derfor stræber vi efter at skabe resultater for vores kunder. Vi elsker at se glade kunder, og vores mål er at efterlade alle vores kunder med et smil på læben.</p>
      </div>
      <div className="flex flex-col gap-14 md:gap-16 lg:gap-20 xl:gap-24 xl:col-span-2 xl:order-3 xl:w-4/5 xl:mx-auto xl:pt-20">
        <motion.div ref={quoteRef1} className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5"
          variants={quoteVariant}
          initial='hidden'
          animate={isInView1 ? 'visible' : 'hidden'}
        >
          <motion.img src={quote} alt="" className='w-12 md:w-14 lg:w-16'
            variants={quoteMarkerVariant}
            initial='hidden'
            animate={isInView1 ? 'visible' : 'hidden'}
          />
          <p className='text-black font-archivo leading-normal font-thin text-sm xs:text-base xsm:text-lg md:text-xl 2lg:text-2xl italic'>Jeg har brugt cølm i 2 uger nu og jeg kan allerede se en forskel. Min hud har aldrig set bedre ud!</p>
        </motion.div>
        <motion.div ref={quoteRef2} className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5"
          variants={quoteVariant}
          initial='hidden'
          animate={isInView2 ? 'visible' : 'hidden'}
        >
          <motion.img src={quote} alt="" className='w-12 md:w-14 lg:w-16'
            variants={quoteMarkerVariant}
            initial='hidden'
            animate={isInView2 ? 'visible' : 'hidden'}
          />
          <p className='text-black font-archivo leading-normal font-thin text-sm xs:text-base xsm:text-lg md:text-xl 2lg:text-2xl italic'>Jeg har tidligere prøvet mange forskellige produkter mod min rosacea, men jeg synes faktisk, at denne virker super godt.</p>
        </motion.div>
        <motion.div ref={quoteRef3} className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5"
          variants={quoteVariant}
          initial='hidden'
          animate={isInView3 ? 'visible' : 'hidden'}
        >
          <motion.img src={quote} alt="" className='w-12 md:w-14 lg:w-16'
            variants={quoteMarkerVariant}
            initial='hidden'
            animate={isInView3 ? 'visible' : 'hidden'}
          />
          <p className='text-black font-archivo leading-normal font-thin text-sm xs:text-base xsm:text-lg md:text-xl 2lg:text-2xl italic'>Første gang jeg nogensinde prøver en creme, der virker.</p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 xl:order-2">
        <h3 className="text-blue font-black text-4xl xsm:text-5xl sm:text-6xl 2xl:text-7xl">Åbenhed</h3>
        <p className="text-black font-archivo leading-normal font-thin text-xs xs:text-sm xsm:text-base md:text-lg 2lg:text-xl">Vi tror på ærlighed og åbenhed. Alle vores ingredienser er omhyggeligt beskrevet på vores produkt, så du ved præcis, hvad du påfører din hud.</p>
      </div>
    </div>
  )
}