import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Logistics from "@/components/Logistics";
import Geography from "@/components/Geography";
import Delivery from "@/components/Delivery";
import Exhibitions from "@/components/Exhibitions";
import Catalog from "@/components/Catalog";
import Clients from "@/components/Clients";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Logistics />
      <Geography />
      <Delivery />
      <Exhibitions />
      <Catalog />
      <Clients />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;