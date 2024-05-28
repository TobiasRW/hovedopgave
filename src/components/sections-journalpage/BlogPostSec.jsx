import BlogPost from "../elements/BlogPost"
import rosacea from "../../assets/img/blog-pics/rosacea-pic.webp";
import smear from "../../assets/img/blog-pics/smear-pic.webp";
import thumb1 from "../../assets/img/some-pics/coelm-some-1.webp";
import thumb2 from "../../assets/img/some-pics/coelm-some-2.webp";

export default function BlogPostSec() {
    return (
        <div className="flex flex-col gap-14 md:gap-20 lg:gap-x-24 md:flex-row md:grid md:grid-cols-2 2xl:grid-cols-3 md:w-4/5 mx-auto md:pb-14 md:border-b-2 md:border-blue">
            <BlogPost
                thumb={rosacea}
                tag="Rosacea"
                headline="Rosacea: En guide til at forstå og behandle hudlidelsen"
                text="Hvad er rosacea? Rosacea er en kronisk betændelse af huden i ansigtet. Sygdommen viser sig i form af rødme, som oftest er koncentreret omkring midten af ansigtet. Rosacea forårsager en ubehagelig..."
            />
            <BlogPost
                thumb={smear}
                tag="Perioral Dermatitis"
                headline="Perioral Dermatitis: En guide til at forstå og behandle hudlidelsen"
                text="Vi er hos cølm opsatte på at hjælpe dig med at få bugt med Perioral dermatitis. Heldigvis er hudlidelsen ikke nødvendigvis kronisk, og med de rette produkter kan den plejes i et omfang, der be..."
            />
            <BlogPost
                thumb={thumb1}
                tag="Rosacea"
                headline="Rundt Om Rosacea: En hurtig oversigt over de oftest stillede spørgsmål"
                text="Rosacea er en hudtilstand, der kan fremkalde både forvirring og frustration. Mange oplever denne tilstand i forskellige former, hvilket kan gøre hudlidelsen svær at genkende og behandle effektivt..."
            />
            <BlogPost
                thumb={thumb2}
                tag="Akne"
                headline="Akne: En guide til at forstå og behandle hudlidelsen"
                text="Akne ses oftest hos unge som er i puberteten, og er derfor en lidt anden situation end rosacea. Det er som regel en betændt hudtilstand som er en konsekvens af de store forandringer som finder sted..."
            />
        </div>
    )
}