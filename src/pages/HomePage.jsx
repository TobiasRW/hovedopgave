import ContactSection from "../components/sections-frontpage/ContactSection";
import FAQSection from "../components/sections-frontpage/FAQSection";
import HeroSection from "../components/sections-frontpage/HeroSection";
import IntroSection from "../components/sections-frontpage/IntroSection";
import JournalSection from "../components/sections-frontpage/JournalSection";
import ProductSection from "../components/sections-frontpage/ProductSection";
import SoMeSection from "../components/sections-frontpage/SoMeSection";
import TestimonialSection from "../components/sections-frontpage/TestimonialSection";
import Footer from "../components/semantic/Footer";
import Header from "../components/semantic/Header";



export default function HomePage() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <HeroSection />
                <IntroSection />
                <ProductSection />
                <JournalSection />
                <TestimonialSection />
                <FAQSection />
                <SoMeSection />
                <ContactSection />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}