import Header from "../components/semantic/Header";
import Footer from "../components/semantic/Footer";
import FAQ from "../components/elements/FAQ";
import { useNavigate } from "react-router-dom";


export default function FAQPage() {

  const navigate = useNavigate();

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-40">
        <div className="bg-blue flex justify-center items-center h-24 md:h-32 lg:h-40 2lg:h-44 pt-16 md:pt-20 lg:pt-24 2lg:pt-28">
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-medium">FAQ</h1>
        </div>
        <div className="">
          <FAQ />
        </div>
        <p className="text-sm sm:text-base xl:text-lg font-light text-center w-4/5 mx-auto">Kan du ikke finde svar på dine spørgsmål, kan du <span onClick={() => navigate('/kontakt-os')} className="italic text-blue underline cursor-pointer">kontakte</span> vores kundeservice mellem 8-18 mandag-fredag.</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}