import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from 'react'
import { User, ShoppingCartSimple } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/svg/logo-blue.svg'
import logoWhite from '../../assets/svg/logo-white.svg'
import Cart from '../interactions/Cart'


export default function Header() {

    // Åben og luk kurv______________________________________________________
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        if (isOpen) setIsOpen(false);
    };

    // Åben og luk sidemar menu______________________________________________________
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isCartOpen) setIsCartOpen(false);
    };

    // Ændre header baggrundsfarve ved scroll______________________________________________________
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.location.pathname === '/' || window.location.pathname === '/om-os') { // Tjek om siden er forsiden
            if (window.scrollY >= 200) {
                setColor(true); // Hvis scrollY er større end 200 sættes baggrundsfarven til hvid
                setIsOpen(false); // Luk sidemenuen hvis den er åben når der scrolles
                setIsCartOpen(false); // Luk kurven hvis den er åben når der scrolles
            } else {
                setColor(false); // Ellers sættes baggrundsfarven til transperant
            }
        } else {
            setColor(true); // For alle andre sider en forsiden sættes baggrundsfarven til hvid
        }
    };


    useEffect(() => { // Kør funktionen changeColor når siden ændres
        changeColor();
    }, [window.location.pathname]);

    window.addEventListener('scroll', changeColor); // Kør funktionen changeColor når der scrolles


    // Vis of fjern header ved scroll______________________________________________________
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious(); // Tidligere scrollY værdi
        if (latest > previous && latest > 100) { // Hvis den nuværende scrollY værdi er større end den tidligere og større end 100
            setHidden(true); // Sæt headeren til at være skjult
            setIsOpen(false); // Luk sidemenuen hvis den er åben når der scrolles
            setIsCartOpen(false); // Luk kurven hvis den er åben når der scrolles
        } else {
            setHidden(false); // Ellers vis headeren
        }
    });

    // State til at holde styr på om headeren er skjult eller vist
    const [hidden, setHidden] = useState(false);


    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/'); // Gå til forsiden ved at bruge useNavigate
    };



    // Framer motion animationer til hamburger menu______________________________________________________
    const sideBarVariants = {
        open: {
            x: 0,
            transition: { duration: 0.5, ease: "easeIn" }
        },
        closed: {
            x: "-100%",
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    const menuVariants = {
        open: {
            x: "var(--x-to, 0%)",
            transition: { staggerChildren: 0.07, delayChildren: 0.3, ease: "easeIn" },
        },
        closed: {
            x: "var(--x-from, -100%)",
            transition: { staggerChildren: 0.05, staggerDirection: -1, ease: "easeOut" }
        }
    };

    const liVariants = {
        open: {
            x: "var(--x-to, 0%)",
            opacity: "var(--opacity-to, 1)",
            transition: {
                y: { stiffness: 1000, velocity: -100, ease: "easeIn" }
            }
        },
        closed: {
            x: "var(--x-from, -100%)",
            opacity: "var(--opacity-from, 0.1)",
            transition: {
                y: { stiffness: 1000 }, ease: "easeOut"
            }
        }
    };

    return (
        <>
            <motion.div id='header' className={`grid grid-cols-[1fr,1fr,1fr] h-16 md:h-20 lg:h-24 2lg:h-28 items-center fixed w-full z-20 transition duration-300  ${color ? 'bg-white ' : ''}`}
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >

                <nav className='lg:order-2'>
                    <motion.div id='hamburger' className="flex flex-col gap-1 cursor-pointer ml-5 lg:hidden"
                        onClick={toggleMenu}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.span className="block h-[3px] w-[30px] rounded z-10"
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { rotate: 45, y: 7, backgroundColor: isOpen ? "#faf9f7" : (color ? "#faf9f7" : "#2a4b9a") },
                                closed: { rotate: 0, y: 0, backgroundColor: isOpen ? "#faf9f7" : (color ? "#2a4b9a" : "#faf9f7") }
                            }}
                        ></motion.span>
                        <motion.span className="block h-[3px] w-[25px] rounded z-10"
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { opacity: 0, backgroundColor: isOpen ? "#faf9f7" : (color ? "#faf9f7" : "#2a4b9a") },
                                closed: { opacity: 1, backgroundColor: isOpen ? "#faf9f7" : (color ? "#2a4b9a" : "#faf9f7") }
                            }}
                        ></motion.span>
                        <motion.span className="block h-[3px] w-[30px] rounded z-10"
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { rotate: -45, y: -7, backgroundColor: isOpen ? "#faf9f7" : (color ? "#faf9f7" : "#2a4b9a") },
                                closed: { rotate: 0, y: 0, backgroundColor: isOpen ? "#faf9f7" : (color ? "#2a4b9a" : "#faf9f7") }
                            }}
                        ></motion.span>
                    </motion.div>
                    <div className="">
                        <motion.div
                            id='sideBar'
                            className="absolute bg-blue left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-[120vh] lg:hidden"
                            variants={sideBarVariants}
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                        ></motion.div>
                        <motion.ul className='flex flex-col gap-8 text-xl xs:text-2xl pt-24 pl-7 font-cabinet font-bold text-nowrap text-white absolute max-sm:left-0 max-sm:top-0
                        lg:[--x-from:0%] [--x-from:-100%]
                        [--x-to:0%]

                        lg:flex-row sm:pt-14 sm:pl-14 lg:pt-0 lg:pl-0 lg:relative lg:text-xl lg:justify-center lg:items-center xl:gap-14 xl:text-2xl 2xl:gap-20
                        '
                            variants={menuVariants}
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <motion.li
                                className={`[--opacity-from:0.1] [--opacity-to:1] lg:[--opacity-from:1] lg:[--opacity-to:1]
                                   [--x-to:0%] [--x-from:-100%] lg:[--x-from:0%] lg:[--x-to:0%] ${color ? 'lg:text-blue' : 'lg:text-white'}`}
                                variants={liVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink to="/produkt" >cølm calming cream</NavLink>
                            </motion.li >
                            <motion.li className={`[--opacity-from:0.1] [--opacity-to:1] lg:[--opacity-from:1] lg:[--opacity-to:1]
                                   [--x-to:0%] [--x-from:-100%] lg:[--x-from:0%] lg:[--x-to:0%] ${color ? 'lg:text-blue' : 'lg:text-white'}`}
                                variants={liVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink to="/hudforbedringsgaranti">Hudforbedringsgaranti</NavLink>
                            </motion.li>
                            <motion.li className={`[--opacity-from:0.1] [--opacity-to:1] lg:[--opacity-from:1] lg:[--opacity-to:1]
                                   [--x-to:0%] [--x-from:-100%] lg:[--x-from:0%] lg:[--x-to:0%] ${color ? 'lg:text-blue' : 'lg:text-white'}`}
                                variants={liVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink to="/journal">cølm journal</NavLink>
                            </motion.li>
                            <motion.li className={`[--opacity-from:0.1] [--opacity-to:1] lg:[--opacity-from:1] lg:[--opacity-to:1]
                                   [--x-to:0%] [--x-from:-100%] lg:[--x-from:0%] lg:[--x-to:0%] ${color ? 'lg:text-blue' : 'lg:text-white'}`}
                                variants={liVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink to="/faq">FAQ</NavLink>
                            </motion.li>
                            <motion.li className={`[--opacity-from:0.1] [--opacity-to:1] lg:[--opacity-from:1] lg:[--opacity-to:1]
                                   [--x-to:0%] [--x-from:-100%] lg:[--x-from:0%] lg:[--x-to:0%] ${color ? 'lg:text-blue' : 'lg:text-white'}`}
                                variants={liVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink to="/om-os">Om os</NavLink>
                            </motion.li>
                        </motion.ul>
                    </div>
                </nav>
                <img src={color ? logo : logoWhite} className='w-20 2lg:w-24 2xl:w-28 flex self-center justify-self-center cursor-pointer lg:order-1 lg:justify-self-start lg:ml-7 xl:ml-10' alt="logo" onClick={navigateToHomePage} />
                <div className="flex justify-self-end mr-5 gap-2 lg:gap-4 2lg:gap-5 2xl:gap-7 lg:order-3 lg:mr-7 xl:mr-10">
                    <User size={24} style={{ color: color ? '#2a4b9a' : '#faf9f7' }} />
                    <ShoppingCartSimple size={24} style={{ color: color ? '#2a4b9a' : '#faf9f7' }} onClick={toggleCart} className='cursor-pointer' />
                </div>
                <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
            </motion.div>
        </>

    )
}