import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PopularProducts = () => {
  const products = [
    {
      name: "ИК-анализатор зерна SpectraStar 2400",
      description: "Быстрый анализ влажности, белка, клейковины",
      price: "от 850 000 ₽",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
    },
    {
      name: "Влагомер зерна Wile 78",
      description: "Портативный измеритель влажности",
      price: "от 45 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586281010281-0b82b0b60c1a?w=400&h=250&fit=crop",
    },
    {
      name: "Весы лабораторные AND GX-6000",
      description: "Точность 0.01г, калибровка встроенная",
      price: "от 125 000 ₽",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
    {
      name: "Анализатор клейковины Glutomatic 2200",
      description: "Автоматическое определение клейковины",
      price: "от 320 000 ₽",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop",
    },
    {
      name: "pH-метр портативный HI-2020",
      description: "Водонепроницаемый, автокалибровка",
      price: "от 25 000 ₽",
      image:
        "https://images.unsplash.com/photo-1583912267550-3ee94c8cb5c9?w=400&h=250&fit=crop",
    },
    {
      name: "Микроскоп цифровой DigiMicro 2.0",
      description: "Увеличение до 500x, USB-подключение",
      price: "от 65 000 ₽",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-light text-white tracking-tight">
            Популярные товары
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Проверенное оборудование от ведущих производителей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-slate-700/50 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl"
            >
              <div className="aspect-[4/3] bg-slate-600 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-8">
                <CardTitle className="text-xl font-medium text-white mb-3 leading-tight">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-slate-300 mb-6 leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-light text-blue-300">
                    {product.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-500 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
