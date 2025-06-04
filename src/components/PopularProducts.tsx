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
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
    },
    {
      name: "Влагомер зерна Wile 78",
      description: "Портативный измеритель влажности",
      price: "от 45 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586281010281-0b82b0b60c1a?w=300&h=200&fit=crop",
    },
    {
      name: "Весы лабораторные AND GX-6000",
      description: "Точность 0.01г, калибровка встроенная",
      price: "от 125 000 ₽",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    },
    {
      name: "Анализатор клейковины Glutomatic 2200",
      description: "Автоматическое определение клейковины",
      price: "от 320 000 ₽",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop",
    },
    {
      name: "pH-метр портативный HI-2020",
      description: "Водонепроницаемый, автокалибровка",
      price: "от 25 000 ₽",
      image:
        "https://images.unsplash.com/photo-1583912267550-3ee94c8cb5c9?w=300&h=200&fit=crop",
    },
    {
      name: "Микроскоп цифровой DigiMicro 2.0",
      description: "Увеличение до 500x, USB-подключение",
      price: "от 65 000 ₽",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-slate-800 text-center mb-16">
          Популярные товары
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-medium text-slate-800 mb-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-slate-600 mb-4">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-light text-blue-600">
                    {product.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
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
