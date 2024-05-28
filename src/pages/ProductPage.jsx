import Header from "../components/semantic/Header";
import Footer from "../components/semantic/Footer";
import ProductSec from "../components/sections-productpage/ProductSec";
import ProductInfoSec from "../components/sections-productpage/ProductInfoSec";
import ProductReviewSec from "../components/sections-productpage/ProductReviewSec";


export default function ProdutPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-10 lg:gap-20 pb-20 lg:pb-32">
        <ProductSec />
        <ProductInfoSec />
        <ProductReviewSec />
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}