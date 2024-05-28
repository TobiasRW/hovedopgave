import Accordion from '../interactions/Accordion'

export default function GarantiFAQ() {
    return (
        <>
            <div className="flex flex-col gap-3 md:gap-5 xl:gap-7 2xl:gap-10 md:w-[80%] 2lg:w-[70%] md:mx-auto">
                <Accordion
                    variant='default'
                    title="Hvor mange billeder skal jeg sende?"
                    answer="Du behøver kun at sende to billeder i alt; Ét billede før du er begyndt at anvende produktet og ét billede efter 30 dage. Vi opfordrer dog til, at du tager flere billeder løbende, så du selv kan følge med i processen."
                />
                <Accordion
                    variant='default'
                    title="Hvor lang tid har jeg til at gøre mit krav?"
                    answer="Hvis cremen mod forventning ikke forbedrer din huds tilstand inden for 30 dage, og du vil gøre krav på din hudforbedringsgaranti, får du ydereligere 30 dage til dette. Det vil sige: 30 dages brug af produktet, og derefter 30 dage til at gøre krav på garantien"
                />
                <Accordion 
                variant='default'
                title="Jeg har brugt cølm cremen i mindre end 30 dage. Kan jeg få en refundering?" 
                answer="Hvis du har anvendt cremen i mindre end 30 dage, kan du endnu ikke gøre krav på din hudforbedringsgaranti." />
            </div>
        </>
    )
}