import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-slate-800 leading-tight mb-6">
              Лабораторное оборудование для аграрного бизнеса
            </h1>
            <p className="text-xl text-slate-600 mb-8 font-light">
              точно, быстро, под ключ
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
              <span className="bg-white px-4 py-2 rounded-full">
                ✓ Гарантия качества
              </span>
              <span className="bg-white px-4 py-2 rounded-full">
                ✓ Быстрая доставка
              </span>
              <span className="bg-white px-4 py-2 rounded-full">
                ✓ Техподдержка 24/7
              </span>
            </div>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <h3 className="text-2xl font-light text-slate-800 mb-6">
              Получить консультацию
            </h3>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="border-slate-200" />
              <Input placeholder="Телефон" className="border-slate-200" />
              <Input placeholder="Компания" className="border-slate-200" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Заказать звонок
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
