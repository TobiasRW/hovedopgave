import VelocityScroll from "../elements/VelocityScroll";
import altLogo from "../../assets/svg/magazine-logos/alt-for-damerne.svg";
import elleLogo from "../../assets/svg/magazine-logos/elle-logo.svg";
import euro from "../../assets/svg/magazine-logos/eurowoman.svg";
import MagCard from "../elements/MagCard";

export default function AboutMagSection() {
  return (
    <div className="lg:pt-20 pb-20 flex flex-col gap-10">
      <VelocityScroll />
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:w-[90%] lg:mx-auto xl:gap-14 lg:pt-10">
        <MagCard logo={altLogo} quote=" En gamechanger inden for rosaceabehandling " from="Alt for damerne" width="w-14 xsm:w-16 sm:w-20"/>
        <MagCard logo={elleLogo} quote=" Nyhed! cølm lancerer kur mod rosacea " from="Elle" width="w-20 sm:w-32"/>
        <MagCard logo={euro} quote=" cølm er et af de mest effektive produkter mod rosacea " from="Eurowoman" width="w-24 sm:w-60" />
      </div>
    </div>
  )
}