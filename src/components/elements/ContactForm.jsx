import pic from '../../assets/img/some-pics/coelm-some-3.webp'
import Button from '../interactions/Button'

export default function ContactForm() {
    return (
        <>
            <section className="py-6  ">
                <div className="grid w-[90%] md:w-4/5 grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-10">
                    <div className="py-6 lg:py-0 lg:px-6">
                        <div className="">
                            <h1 className="text-4xl lg:text-5xl font-bold">Kontakt os</h1>
                            <p className="pt-2 pb-4 font-light xl:text-lg">Har du et sprøgsmål? Så kontakt os her.</p>
                        </div>
                        <div className="">
                            <img src={pic} alt="Billede af cølm creme" className='rounded drop-shadow-md' />
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 lg:py-0 lg:px-6 justify-center">
                        <label className="flex flex-col gap-2">
                            <span className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">Fulde navn</span>
                            <input type="text" placeholder="Fulde navn" className="block w-full border-blue border py-2 px-2 box-border" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">E-mail</span>
                            <input type="email" placeholder="Din e-mail" className="block w-full border-blue border py-2 px-2 box-border" />
                        </label>
                        <label className="flex flex-col gap-2 ">
                            <span className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">Besked</span>
                            <textarea rows="4" className="block w-full border-blue border py-2 px-2 box-border"></textarea>
                        </label>
                        <Button btnType="thirdBtn" content="Send meddelelse" />
                    </form>
                </div>
            </section>
        </>
    )
}