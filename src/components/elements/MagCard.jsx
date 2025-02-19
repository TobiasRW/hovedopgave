import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MagCard(props) {

    const cardRef = useRef(null);

    const isInView = useInView(cardRef, {
        margin: '0px 0px -200px 0px',
        once: true
    });

    const cardVariant = {
        hidden: { opacity: 0, y: 50, transition: { duration: 0.75 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75 } }
    };

    return (
        <>
            <motion.div ref={cardRef} className="w-72 h-32 xs:w-80 sm:w-96 sm:h-36 lg:h-40 xl:h-44 flex flex-col gap-5 items-center py-4 rounded bg-blue drop-shadow-lg relative"
                variants={cardVariant}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
            >
                <div className="flex flex-col gap-3 w-4/5 pt-2">
                    <img src={props.logo} alt="alt for damerne logo" className={`self-center ${props.width}`} />
                    <hr className="border-none h-[1px] bg-white" />
                </div>
                <p className="text-white text-xs xs:text-sm sm:text-base xl:text-lg italic text-center font-thin w-[90%]">"{props.quote}"</p>
                <p className="text-white text-xs xs:text-sm sm:text-base xl:text-lg text-center font-thin absolute bottom-2">- {props.from}</p>
            </motion.div>
        </>
    )
}