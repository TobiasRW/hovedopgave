import Button from "../interactions/Button";


export default function GarantiForm() {
    return (
        <>
            <section className="">
                <form className="container w-[90%] md:w-4/5 lg:w-[60%] xl:w-2/4 py-6  mx-auto space-y-6">
                    <h2 className="text-2xl lg:text-5xl font-bold">Gør krav på din garanti her</h2>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="order" className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">Ordrenummer</label>
                        <input id="order" type="text" placeholder="DK1234" required="" className="block w-full border-blue border py-2 px-2 box-border" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">Email</label>
                        <input id="email" type="email" placeholder="Din e-mail" required="" className="block w-full border-blue border py-2 px-2 box-border" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-cabinet lg:text-lg xl:text-xl font-bold text-blue">Fulde navn</label>
                        <input id="name" type="text" placeholder="Fulde navn" required="" className="block w-full border-blue border py-2 px-2 box-border" />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <Button btnType="thirdBtn" content="Indsend" />
                    </div>
                </form>
            </section>
        </>
    )
}