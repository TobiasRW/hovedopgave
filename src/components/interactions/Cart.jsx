import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus } from '@phosphor-icons/react';
import product from '../../assets/img/product-pics/product1.webp';
import product2 from '../../assets/img/product-pics/product2.webp';
import Button from './Button';

const Cart = ({ isCartOpen, toggleCart }) => {

    // State til at holde styr på antal produkter
    const [count, setCount] = useState(1);

    // State til at holde styr på prisen
    const [price, setPrice] = useState(399);

    // Pris for gratis fragt
    const targetPriceForFreeDelivery = 798;

    // State til at holde styr på om billedet er hovered
    const [hovered, setHovered] = useState(false);

    // Opdater prisen, når antallet af produkter ændres
    useEffect(() => {
        // Sikrer at antallet af produkter er indenfor intervallet 1-10
        if (count < 1) {
            setCount(1);
        } else if (count > 10) {
            setCount(10);
        }

        setPrice(399 * count);
    }, [count]);

    // Beregning af procentdel af målpris for gratis fragt
    const percentageOfTargetPrice = Math.min((price / targetPriceForFreeDelivery) * 100, 100);

    // Tekst for gratis fragt
    let deliveryText = `Køb for ${targetPriceForFreeDelivery - price} kr mere for gratis fragt`;
    if (price >= targetPriceForFreeDelivery) {
        deliveryText = 'Du har opnået gratis fragt!';
    }

    return (
        <motion.div
            className="absolute top-0 right-0 w-4/5 sm:w-80 lg:w-[400px] h-[120vh] bg-white border-l-[1px] lg:border-l-2 border-blue"
            initial={{ x: '100%' }}
            animate={{ x: isCartOpen ? '0%' : '100%' }}
            transition={{ type: 'tween' }}
        >
            <div className="flex flex-col gap-4">
                <div className="flex justify-between w-[90%] mx-auto px-4 pt-6">
                    <p className="font-light lg:text-lg 2xl:text-xl">Din Kurv</p>
                    <X size={20} className="cursor-pointer" onClick={toggleCart} />
                </div>
                <hr className="border-none h-[2px] w-[90%] mx-auto bg-blue" />

                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <img src={hovered ? product2 : product} alt="produktbillede" className=""
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        />
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <div className="flex justify-between">
                                <p className="text-lg font-cabinet lg:text-2xl">cølm calming cream</p>
                                <p className="font-thin lg:text-2xl">{price} kr</p>
                            </div>
                            <div className="flex border-[1px] lg:border-2 border-blue justify-between items-center h-8 lg:h-10 font-thin mb-4">
                                <button onClick={() => setCount(count - 1)} className="w-10 h-full border-r-[1px] lg:border-r-2 border-blue flex justify-center items-center">
                                    <Minus color="#2a4b9a" weight="bold" />
                                </button>
                                <p className="lg:text-xl">{count}</p>
                                <button onClick={() => setCount(count + 1)} className="w-10 h-full border-l-[1px] lg:border-l-2 border-blue flex justify-center items-center">
                                    <Plus color="#2a4b9a" weight="bold" />
                                </button>
                            </div>
                            <Button btnType="thirdBtn" content="Gå til betaling" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Progress bar to show free delivery when the price hits 798 */}
            <div className="w-[90%] mx-auto mt-4 flex flex-col gap-2">
                <div className="h-2 w-full bg-gray-200">
                    <AnimatePresence>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentageOfTargetPrice}%` }}
                            exit={{ width: 0 }}
                            transition={{ type: 'tween' }}
                            className="h-2 bg-blue"
                        />
                    </AnimatePresence>
                </div>
                <p className="font-thin text-xs sm:text-sm lg:text-base">{deliveryText}</p>
            </div>
        </motion.div>
    );
};

export default Cart;
