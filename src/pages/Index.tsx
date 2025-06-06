import Hero from "@/components/Hero";
import CulturesBlock from "@/components/CulturesBlock";
import PopularProducts from "@/components/PopularProducts";
import Categories from "@/components/Categories";
import LeasingBlock from "@/components/LeasingBlock";
import DeliveryMap from "@/components/DeliveryMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CulturesBlock />
      <PopularProducts />
      <Categories />
      <LeasingBlock />
      <DeliveryMap />
    </div>
  );
};

export default Index;
