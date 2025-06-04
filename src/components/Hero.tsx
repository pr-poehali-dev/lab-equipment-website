import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/files/2350217f-10f6-45fb-b9c9-8c9c49c07a4f.jpg"
          alt="Зерно в поле"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Лабораторное оборудование для аграрного бизнеса
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-light">
              точно, быстро, под ключ
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-8">
              <span className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600">
                ✓ Гарантия качества
              </span>
              <span className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600">
                ✓ Быстрая доставка
              </span>
              <span className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600">
                ✓ Техподдержка 24/7
              </span>
            </div>
          </div>

          <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-300 shadow-2xl">
            <h3 className="text-2xl font-light text-gray-800 mb-6">
              Получить консультацию
            </h3>
            <div className="space-y-4">
              <Input
                placeholder="Ваше имя"
                className="border-gray-300 focus:border-gray-500"
              />
              <Input
                placeholder="Телефон"
                className="border-gray-300 focus:border-gray-500"
              />
              <Input
                placeholder="Компания"
                className="border-gray-300 focus:border-gray-500"
              />
              <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3">
                Заказать звонок
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
