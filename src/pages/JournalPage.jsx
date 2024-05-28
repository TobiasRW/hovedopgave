import BlogPostSec from "../components/sections-journalpage/BlogPostSec";
import Journalheading from "../components/sections-journalpage/JournalHeading";
import Footer from "../components/semantic/Footer";
import Header from "../components/semantic/Header";


export default function JournalPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-40">
        <Journalheading />
        <BlogPostSec />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}