import Accordion from '../interactions/Accordion'

export default function FAQ() {
    return (
        <>
            <div className="flex flex-col gap-3 md:gap-5 xl:gap-7 2xl:gap-10 md:w-[80%] 2lg:w-[70%] md:mx-auto">
                <Accordion
                    variant='default'
                    title="Hvornår kan forvente at se resultater?"
                    answer="Det varierer utrolig meget fra person til person, hvor hurtigt resultaterne indtræder. For langt de fleste ses en bedring allerede inden for 7 til 14 dage, mens det, for enkelte, kan tage op til 30 dage. Det er vigtigt at være opmærksom på, at en kortvarig forværring kan forekomme, inden en drastisk bedring. Dette er helt almindeligt og er kendt som udrensningsfase, hvor huden omstiller sig."
                />
                <Accordion
                    variant='default'
                    title="Kan cølm hjælpe på mit hudproblem??"
                    answer="Overordnet set har vi rigtig gode erfaringer med cremen mod rosacea, akne og perioral dermatitis. Ikke desto mindre er det ikke alle forekomster, der er nemme at inddele i disse kasser, og der findes også forskellige typer af de enkelte lidelser."
                />
                <Accordion
                    variant='default'
                    title="Min creme er ikke fyldt op til kanten. Er der sket en fejl?"
                    answer={(
                        <p>
                            Det er helt forståeligt, at du undrer dig over, at det modtagede produkt ikke er fyldt helt op. Der er faktisk en meget god grund til dette: <br /><br />

                            Når produktet fyldes, efterlades der bevidst en lille mængde luft i emballagen. Dette er ikke et tegn på, at der mangler produkt, men en nødvendig foranstaltning for at beskytte produktets kvalitet og integritet. Luften fungerer som en buffer, der hjælper med at forhindre produktet i at blive beskadiget eller lække under transport, samt sikrer, at det forbliver frisk og effektivt længere ved at minimere eksponeringen for ilt, som kan fremskynde nedbrydningen af aktive ingredienser. <br /><br />

                            Vi forsikrer dig, at der er den angivne mængde i bøtten, selvom det kan se ud som om, at der 'mangler noget'.
                        </p>
                    )} />
                <Accordion
                    variant='default'
                    title="Hjælp! Min hud er blevet værre efter jeg er startet på cølm. Skal jeg stoppe?"
                    answer={(
                        <p>
                            Vi forstår godt, at det kan være foruroligende og en smule skræmmende, at hudens tilstand nogle gange forværres i starten af brugsperioden. <br /><br />

                            Ikke desto mindre er dette helt normalt, og der er mange, der oplever både markant tørhed, rødme og spænding i huden efter de første par dage. Dette sker oftest som en naturlig del af en tilvænningsperiode for huden. Her er det vigtigt at væbne sig med tålmodighed og eventuelt supplere med en god fugtighedscreme. <br /><br />

                            For en god ordens skyld anbefaler vi, at du smører en beskeden mængde af produktet på håndryggen for at sikrer, at hudens opblussen ikke skyldes en allergisk reaktion. Hvis ikke dette er tilfældet, skal du endelig fortsætte med cremen - også selvom huden i øjeblikket ser værre ud.
                        </p>
                    )} />
                <Accordion
                    variant='default'
                    title="Hvor hurtigt leverer I?"
                    answer="Vi bestræber os på at sende din ordre afsted samme dag, som du har bestilt, såfremt bestillingen er afgivet inden kl. 14 på hverdage. Leveringstiden er typisk 1-2 hverdage. Du vil modtage en mail med et trackingnummer, så du kan følge din pakke hele vejen til døren." />
                <Accordion
                    variant='default'
                    title="Hvad er rosacea egentlig?"
                    answer="Rosacea er en vedvarende hudsygdom. Trods sit poetisk klingende navn dækker det over en reel sygdomstilstand, der kan fremkomme i adskillige udgaver. Den første type af rosacea viser sig ved tilbagevendende tilfælde af rødme (erythema). En anden type indebærer fremtrædende blodkar i ansigtet (couperose). Yderligere varianter af rosacea inkluderer udvikling af pustler eller hævelser. Den kan brede sig over hele ansigtet, inklusiv kinder, næse, hage og pande, hvilket understreger sygdommens omfattende karakter, og hvordan den kan påvirke den visuelle fremtoning." />
                <Accordion
                    variant='default'
                    title="Hvad er demodex-mider?"
                    answer={(
                        <p>
                            Demodex-mider er små mikroskopiske mider, der lever i hårsækkene og talgkirtlerne på menneskers hud. De er en normal del af hudens mikroflora og findes i større antal på ansigtet, især omkring næsen, kinderne, øjenbrynene og øjenvipperne. Disse mider fodrer sig med hudceller og talg, og selvom de generelt er harmløse, kan de i visse tilfælde bidrage til hudproblemer. <br /><br />

                            Forbindelsen mellem demodex-mider og rosacea er et område af omfattende igangværende forskning, men der er beviser, der tyder på, at miderne kan spille en rolle i udviklingen af denne hudtilstand. Disse beviser indikerer, at personer med rosacea synes at have en højere koncentration af demodex-mider på deres hud sammenlignet med personer uden denne tilstand.
                        </p>
                    )} />

            </div>
        </>
    )
}