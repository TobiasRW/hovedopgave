import { motion } from 'framer-motion';

export default function Button (props) {
    function btnType() {
        if (props.btnType === "primaryBtn") {
            return "bg-white text-blue font-archivo py-1 px-8 text-lg font-medium rounded-sm transition duration-300 md:text-2xl md:py-2";
        } else if (props.btnType === "secondaryBtn") {
            return "bg-blue text-white font-archivo py-1 px-8 text-lg font-medium rounded-sm transition duration-300 md:text-2xl md:py-2";
        } else if (props.btnType === "thirdBtn") {
            return "bg-blue text-white font-archivo py-2 px-8 text-lg font-light rounded-sm transition duration-300 md:text-2xl lg:text-xl xl:text-2xl ";
        } 
    }

    return (
        <motion.button className={` flex justify-center items-center ${btnType()}`} onClick={props.click}
            whileHover={{ scale: 1.05, backgroundColor: "#57cc99", color: "#faf9f7"}}
        >
            {props.content}
        </motion.button>
    );
}