import Header from "../components/semantic/Header";
import Footer from "../components/semantic/Footer";
import ContactForm from "../components/elements/ContactForm";


export default function ContactPage () {
  return (
    <>
    <header>
        <Header />
    </header>
    <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-40 pt-20 md:pt-30 lg:pt-40 2lg:pt-44">
        <ContactForm />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}