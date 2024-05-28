import img1 from '../../assets/img/product-pics/product1.webp'
import img2 from '../../assets/img/product-pics/product2.webp'
import img3 from '../../assets/img/product-pics/product6.webp'
import img4 from '../../assets/img/product-pics/product3.webp'
import img5 from '../../assets/img/product-pics/product4.webp'
import { useState } from 'react'

export default function ProductImages() {
    // Array af billeder
    const images = [img1, img2, img3, img4, img5]

    // State til at holde styr på hvilket billede der er det aktuelle
    const [currentImage, setCurrentImage] = useState(0)

    // Magnifier___________________________________________________________
    // Magnifierens højde og bredde baseret på skærmstørrelsen
    const magnifierHeight = window.innerWidth < 1440 ? 200 : 300;
    const magnifieWidth = window.innerWidth < 1440 ? 200 : 300;
    const zoomLevel = 1.8;

    // State til at holde styr på billedets bredde og højde
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);

    // State til at holde styr på om magnifieren skal vises
    const [showMagnifier, setShowMagnifier] = useState(false);

    // State til at holde styr på x og y koordinaterne for magnifieren i forhold til billedet
    const [[x, y], setXY] = useState([0, 0]);


// hvis skærmen er mindre end 1024px, vil 'magnifier' ikke blive vist
    if (window.innerWidth < 1024) {
        return (
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 sm:gap-6 2xl:gap-8">
            <div className="lg:order-2 w-full">
                <img src={images[currentImage]} alt="produktbillede" className=' drop-shadow-md w-full' />
            </div>
            <div className="flex lg:flex-col justify-between lg:order-1">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="produktbillede"
                        className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-[72px] xl:h-[72px] 2xl:w-[90px] 2xl:h-[90px] 3xl:w-24 3xl:h-24 py-1 sm:py-2 lg:py-0 lg:px-2 cursor-pointer ${currentImage === index ? 'border-b-2 border-blue lg:border-b-0 lg:border-l-2 3xl:border-l-[3px] ' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
        )
    }
                        



    return (
        <div className="">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 sm:gap-6 2xl:gap-8">
                <div className="lg:order-2 w-full relative">
                    <img src={images[currentImage]} alt="produktbillede" className=' drop-shadow-md cursor-none'
                          onMouseEnter={(e) => {
                            const elem = e.currentTarget;
                            const { width, height } = elem.getBoundingClientRect();
                            setImgWidth(width);
                            setImgHeight(height);
                            setShowMagnifier(true);
                        }}
                        onMouseMove={(e) => {
                            const elem = e.currentTarget;
                            const { top, left } = elem.getBoundingClientRect();
                            const x = e.pageX - left - window.pageXOffset;
                            const y = e.pageY - top - window.pageYOffset;
                            setXY([x, y]);
                        }}
                        onMouseLeave={() => {
                            setShowMagnifier(false);
                        }}
                    />
                    {showMagnifier && (
                        <div
                            className="absolute pointer-events-none border border-blue rounded"
                            style={{
                                height: `${magnifierHeight}px`,
                                width: `${magnifieWidth}px`,
                                top: `${y - magnifierHeight / 2}px`,
                                left: `${x - magnifieWidth / 2}px`,
                                backgroundImage: `url('${images[currentImage]}')`,
                                backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                                backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                                backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                            }}
                        />
                    )}
                </div>
                <div className="flex lg:flex-col justify-between lg:order-1">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="produktbillede"
                            className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-[72px] xl:h-[72px] 2xl:w-[90px] 2xl:h-[90px] 3xl:w-24 3xl:h-24 py-1 sm:py-2 lg:py-0 lg:px-2 cursor-pointer ${currentImage === index ? 'border-b-2 border-blue lg:border-b-0 lg:border-l-2 3xl:border-l-[3px] ' : ''}`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
