import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive cards count
  const getCardsToShow = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    if (window.innerWidth < 1280) return 3; // small desktop
    return 5; // large desktop
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow);

  // Update cards count on resize
  useState(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const products = [
    {
      name: "Инфракрасный портативный анализатор IAS-3120",
      description: "Быстрый анализ влажности, белка, жира в зерне",
      price: "от 650 000 ₽",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
    },
    {
      name: "БИК-анализатор Инфраматик 9500",
      description: "Профессиональный анализ качества зерна",
      price: "от 1 200 000 ₽",
      image:
        "https://images.unsplash.com/photo-1586281010281-0b82b0b60c1a?w=400&h=250&fit=crop",
    },
    {
      name: "Инфракрасный портативный экспресс анализатор зерна IAS-5100",
      description: "Компактный прибор для полевых условий",
      price: "от 750 000 ₽",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
    {
      name: "Инфракрасный портативный экспресс анализатор зерна Инфраматик Perten IM8800",
      description: "Высокоточный анализ с встроенной калибровкой",
      price: "от 980 000 ₽",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop",
    },
    {
      name: "Портативный ИК анализатор зерна Инфраматик 8800",
      description: "Надежный анализ основных параметров",
      price: "от 850 000 ₽",
      image:
        "https://images.unsplash.com/photo-1583912267550-3ee94c8cb5c9?w=400&h=250&fit=crop",
    },
    {
      name: "Анализатор зерна инфракрасный Infratec",
      description: "Стационарный прибор для лабораторий",
      price: "от 1 100 000 ₽",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=250&fit=crop",
    },
  ];

  const maxIndex = Math.max(0, products.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

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

        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-slate-500 bg-slate-700/80 backdrop-blur-sm text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border-slate-500 bg-slate-700/80 backdrop-blur-sm text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-3 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 group overflow-hidden bg-slate-700/50 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)]"
                >
                  <div className="aspect-[4/3] bg-slate-600/30 overflow-hidden flex items-center justify-center">
                    <div className="w-16 h-16 text-slate-400">
                      <svg
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        className="w-full h-full"
                      >
                        {index === 0 && (
                          <path d="M20 20h60v10H20zm5 15h50v5H25zm-5 10h60v5H20zm5 10h50v5H25zm-5 10h60v10H20zm10 15h40v15H30z" />
                        )}
                        {index === 1 && (
                          <rect x="30" y="25" width="40" height="50" rx="5" />
                        )}
                        {index === 2 && (
                          <path d="M25 30h50v40H25zm15 10h20v5H40zm-10 10h40v5H30zm5 10h30v5H35z" />
                        )}
                        {index === 3 && (
                          <circle
                            cx="50"
                            cy="40"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                        )}
                        {index === 4 && (
                          <rect x="35" y="30" width="30" height="40" rx="3" />
                        )}
                        {index === 5 && (
                          <path d="M30 25h40v10H30zm5 15h30v30H35zm10 10h10v10H45z" />
                        )}
                      </svg>
                    </div>
                  </div>
                  <CardHeader className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-lg font-medium text-white mb-2 leading-tight">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                      {product.description}
                    </CardDescription>
                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="text-xl font-light text-blue-300">
                        {product.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-200"
                      >
                        Заказать
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
