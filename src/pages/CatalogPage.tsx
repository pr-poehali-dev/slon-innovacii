import Header from "@/components/Header";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";

const CatalogPage = () => {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />
      <div className="pt-24">
        <Catalog />
      </div>
      <Footer />
    </main>
  );
};

export default CatalogPage;
