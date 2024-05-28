import jar from '../../assets/img/product-pics/coelm-jar.webp';

export default function GarantiTextSec() {
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 2lg:pt-28 flex flex-col gap-10">
      <div className="bg-blue flex justify-center items-center h-24 md:h-32 lg:h-40 2lg:h-44">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-medium">Hudforbedringsgaranti</h1>
      </div>
      <div className="flex flex-col gap-10 lg:w-4/5 lg:mx-auto ">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 2xl:gap-40 lg:items-center">
          <div className="text-sm sm:text-base xl:text-lg font-light flex flex-col gap-5 lg:gap-8 xl:gap-10 w-[90%] md:w-4/5 mx-auto">
            <p>Jeps, du læste rigtigt! Hos cølm har vi stor tillid til virkningen af cølm cremen at vi tilbyder hudforbedringsgaranti med i købet på vores cølm calming cream.</p>
            <p>Er du ikke 100% tilfreds med virkningen af produktet, så giver vi dig alle dine penge retur - No questions asked</p>
            <p className="hidden lg:block">Hudforbedringsgarantien betyder i al sin enkelhed, at du nu har et sikkerhedsnet, der fanger dig, hvis du, mod forventning, ikke oplever nogen forbedring af din hud.</p>
          </div>
          <img src={jar} alt="produktbillede" className='lg:w-80 xl:w-96 2xl:w-[500px]' />
        </div>
        <div className="text-sm sm:text-base xl:text-lg font-light lg:hidden block w-[90%] md:w-4/5 mx-auto">
          <p className="">Hudforbedringsgarantien betyder i al sin enkelhed, at du nu har et sikkerhedsnet, der fanger dig, hvis du, mod forventning, ikke oplever nogen forbedring af din hud.</p>
        </div>
      </div>
    </div>
  )
}