
import Header from "../components/semantic/Header";
import GarantiTextSec from "../components/sections-garantipage/GarantiTextSec";
import StepsSec from "../components/sections-garantipage/StepsSec";
import GarantiFAQ from "../components/elements/GarantiFAQ";
import Footer from "../components/semantic/Footer";


export default function GarantiPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-40">
        <GarantiTextSec />
        <StepsSec />
        <GarantiFAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}