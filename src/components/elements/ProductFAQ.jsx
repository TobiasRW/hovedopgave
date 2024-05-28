import React from 'react'
import Accordion from '../interactions/Accordion'
import { useNavigate } from 'react-router-dom'


export default function ProductFAQ() {

    const navigate = useNavigate()

    return (
        <>
            <Accordion
                variant='product'
                title="Produktbeskrivelse"
                answer={(
                    <p>
                        Cølm calming cream er en fantastisk Svovl-Zink-baseret salve, som er særligt egnet mod hudlidelser, der forårsager rødme og betændelse, herunder rosacea og perioral dermatitis såvel som flere typer af akne, hårsækmider og hudbetændelse ved talgkirtlerne. Cremen hjælper den røde og ofte varme eller brændende hud med at genfinde balancen og vende tilbage til en sund, blød og ikke mindst beroliget tilstand. <br /><br />
                        Ingredienser som zinkoxid og forarbejdet svovl er kendt for deres antiinflammatoriske kvaliteter, der hjælper med at reducere rødme og irritation i huden, mens produktets eksfolierende egenskaber eliminerer dårlige hudceller og frigør porerne for snavs og overskydende sebum. Hertil bekæmper cremen demodex-mider, som primært er aktive om aftenen og i nattetimerne. <br /><br />
                        For at opnå de bedste resultater, bør cremen derfor påsmøres om aftenen og efterlades på huden henover natten. <br /><br />
                        <span className='font-light' >OBS! </span>Det anbefales, at produktet anvendes kontinuerligt i minimum 2 uger, men mange oplever resultater allerede før. Det kan forekomme, at hudens tilstand kortvarigt forværres, inden bedringen indtræder. Dette er helt almindeligt og er kendt som en udrensningsfase. Derfor er det rigtig vigtigt at være tålmodig!
                    </p>
                )}
            />
            <Accordion 
            variant='product'
            title="Indhold"
                answer={(
                    <p>
                        <span className='font-light' >20ml.</span> <br />
                        Vand, Propylenglycol, Stearyl alkohol, Stearinsyre, Zinkoxid, forarbejdet svovl, sulfur, glycerin, isopropylmyristat, vaseline, dimethicone, menthol, lanolina, polysorbate 80, natriumhypochorit, sorbitanstearat, hvedekimolie, Natrium lauret sulfat, salicylsyre og kinesiske urter.
                    </p>
                )}
            />
            <Accordion 
            variant='product'
            title="Anvendelse"
                answer={(
                    <p>
                        Læs altid indlægssedlen før brug. <br /> <br /> Vask huden med vand og en mild sæbe inden produktet påsmøres. <br /><br /> Dub ansigtet tørt med et håndklæde. <br /><br /> Påfør cremen på de områder, som er ramt. Salven kan for nogle føles sviende eller kølende på huden - dette er helt normalt. <br /><br /> Vask salven af den efterfølgende morgen med en mild ansigtsrens og fortsæt med din sædvanlige hudplejerutine.
                    </p>
                )} />
            <Accordion 
            variant='product'
            title="Ydeligere info"
                answer={(
                    <p>
                         For yderligere oplysninger om Cølm calming cream er du velkommen til at kontakte vores kundeservice eller tjekke vores <span onClick={()=> navigate('/faq')} className='underline text-blue italic'>FAQ.</span> <br /> <br />Vi står altid klar til at hjælpe med spørgsmål om ingredienser, anvendelse og resultater. Derudover kan du også finde nyttige tips, vejledninger og anmeldelser på <span onClick={()=> navigate('/journal')} className='underline italic text-blue'>cølm journal</span> eller på vores sociale mediekanaler.<br /><br /> Vi værdsætter din interesse i vores produkt og ser frem til at hjælpe dig med at opnå den bedst mulige hudplejeoplevelse.
                    </p>
                )} />
        </>
    )
}