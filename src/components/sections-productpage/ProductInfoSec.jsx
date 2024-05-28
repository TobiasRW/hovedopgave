import { useNavigate } from "react-router-dom"
import Ingredient from "../interactions/Ingredient"
import ProductFAQ from "../elements/ProductFAQ"



export default function ProductInfoSec() {

    const navigate = useNavigate()

    return (
        <div className="w-[90%] sm:w-4/5 mx-auto flex flex-col gap-7 lg:grid lg:grid-cols-[1.3fr,1fr] 2lg:grid-cols-2 2xl:grid-cols-[1.1fr,1fr] 3xl:grid-cols-2 lg:gap-7 2lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-32">
            <div className="flex flex-col gap-7 lg:gap-8 xl:gap-12">
                <div className="border-b-[1px] border-blue lg:border-none flex flex-col gap-2 pb-8 lg:pb-0 lg:pt-3">
                    <h2 className="text-blue text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium">Hudforbedringsgaranti</h2>
                    <p className="font-thin text-sm sm:text-base lg:text-sm xl:text-base 3xl:text-lg">Med vores <span onClick={() => navigate('/hudforbedringsgaranti')} className="cursor-pointer underline italic text-blue">hudforbedringsgaranti</span> får du alle dine penge retur, hvis cremen ikke fungerer for dig.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-blue text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium">Fremhævet indhold</h2>
                    <div className="flex gap-2 md:gap-3">
                        <Ingredient ingredient="Zinkoxid" info="Zinkoxid bidrager til at reducere inflammation og berolige rødme. Zinkoxid har milde antibakterielle egenskaber og virker naturligt antiinflammatorisk" />
                        <Ingredient ingredient="Svovl" info="Svovl arbejder med at udtørre huden, hvilket gør den til den perfekte ingrediens til at bekæmpe udbrud i ekstremt fedtede hudtyper." />
                        <Ingredient ingredient="Salicylsyre" info="Salicylsyre renser porerne og fjerner overskydende olie, hvilket er med til at reducere forekomsten af rødme og betændelse i ansigtet." />
                    </div>
                </div>
            </div>
            <div className="">
                <ProductFAQ />
            </div>
        </div>
    )
}