import React from 'react'
import Accordion from '../interactions/Accordion'


export default function HomeFAQ () {
  return (
    <div className="flex flex-col gap-3 md:gap-5 2xl:gap-7">
      <Accordion
        variant='home'
        title="Hvad er rosacea egentlig?"
        answer="Rosacea er en vedvarende hudsygdom. Trods sit poetisk klingende navn dækker det over en reel sygdomstilstand, der kan fremkomme i adskillige udgaver. Den første type af rosacea viser sig ved tilbagevendende tilfælde af rødme (erythema). En anden type indebærer fremtrædende blodkar i ansigtet (couperose). Yderligere varianter af rosacea inkluderer udvikling af pustler eller hævelser. Den kan brede sig over hele ansigtet, inklusiv kinder, næse, hage og pande, hvilket understreger sygdommens omfattende karakter, og hvordan den kan påvirke den visuelle fremtoning."
      />
      <Accordion
        variant='home'
        title="Hvornår kan jeg forvente at se resultater?"
        answer="Det varierer utrolig meget fra person til person, hvor hurtigt resultaterne indtræder. For langt de fleste ses en bedring allerede inden for 7 til 14 dage, mens det, for enkelte, kan tage op til 30 dage. Det er vigtigt at være opmærksom på, at en kortvarig forværring kan forekomme, inden en drastisk bedring. Dette er helt almindeligt og er kendt som udrensningsfase, hvor huden omstiller sig."
      />
      <Accordion 
      variant='home'
      title="Kan cølm hjælpe på mit hudproblem?" 
      answer="Overordnet set har vi rigtig gode erfaringer med cremen mod rosacea, akne og perioral dermatitis. Ikke desto mindre er det ikke alle forekomster, der er nemme at inddele i disse kasser, og der findes også forskellige typer af de enkelte lidelser." />
    </div>
  )
}