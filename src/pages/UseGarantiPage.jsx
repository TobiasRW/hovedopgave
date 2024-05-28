import Header from '../components/semantic/Header'
import Footer from '../components/semantic/Footer'
import GarantiForm from '../components/elements/GarantiForm'

export default function UseGarantiPage () {
  return (
    <>
        <header>
        <Header />
    </header>
    <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-40 pt-20 md:pt-30 lg:pt-40 2lg:pt-44">
        <GarantiForm />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}