import ProductImages from "../elements/ProductImages";
import star from "../../assets/svg/icons/star.svg";
import Button from "../interactions/Button";
import check from "../../assets/svg/icons/checkmark-blue.svg";


export default function ProductSec() {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto pt-24 md:pt-28 lg:pt-32 2lg:pt-40 2xl:pt-52 flex flex-col gap-5 sm:gap-7 2lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-32 lg:grid lg:grid-cols-[1.3fr,1fr] 2lg:grid-cols-2 2xl:grid-cols-[1.1fr,1fr] 3xl:grid-cols-2">
      <ProductImages />
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-5 2lg:gap-4 2xl:gap-8 3xl:gap-12">
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-2 2lg:gap-3 2xl:gap-5 3xl:gap-8">
          <h1 className="font-medium text-3xl xsm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 3xl:text-6xl">cølm calming cream</h1>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <img src={star} alt="stjerne" className="w-4 xl:w-5" />
              <img src={star} alt="stjerne" className="w-4 xl:w-5" />
              <img src={star} alt="stjerne" className="w-4 xl:w-5" />
              <img src={star} alt="stjerne" className="w-4 xl:w-5" />
              <img src={star} alt="stjerne" className="w-4 xl:w-5" />
            </div>
            <p className="font-thin italic text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg sm:pt-1">6 anmeldelser</p>
          </div>
          <p className="font-light text-2xl md:text-3xl lg:text-2xl xl:text-3xl">399 kr</p>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-5 2lg:gap-6 2xl:gap-8">
          <Button btnType="thirdBtn" content="Læg i kurv" />
          <p className="font-thin text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg leading-normal">Skab ro og balance i huden med cølm calming cream fra cølm. Cremen er et fantastisk produkt designet til at hjælpe mod en række af de hårdføre hudlidelser, mange af os går med i hverdagen.</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-3 2lg:gap-4 2xl:gap-6 3xl:gap-8">
          <div className="flex gap-4">
            <img src={check} alt="flueben" className="w-4 md:w-5 lg:w-4 2xl:w-5 3xl:w-7" />
            <p className="font-thin italic text-sm sm:text-base lg:text-sm xl:text-base">Effektiv mod akne</p>
          </div>
          <div className="flex gap-4">
            <img src={check} alt="flueben" className="w-4 md:w-5 lg:w-4 2xl:w-5 3xl:w-7" />
            <p className="font-thin italic text-sm sm:text-base lg:text-sm xl:text-base">Effektiv mod rosacea</p>
          </div>
          <div className="flex gap-4">
            <img src={check} alt="flueben" className="w-4 md:w-5 lg:w-4 2xl:w-5 2xl:w- 3xl:w-7" />
            <p className="font-thin italic text-sm sm:text-base lg:text-sm xl:text-base">Effektiv mod perioral dermatitis</p>
          </div>
        </div>
      </div>
    </div>
  )
}