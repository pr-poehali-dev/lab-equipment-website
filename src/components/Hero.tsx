
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                Лабораторное
                <span className="block text-blue-300 font-normal">оборудование</span>
                <span className="block text-3xl lg:text-4xl text-slate-300 font-light mt-2">
                  для аграрного бизнеса
                </span>
              </h1>
              <p className="text-2xl text-slate-300 font-light tracking-wide">
                точно • быстро • под ключ
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {[
                "Гарантия качества",
                "Быстрая доставка", 
                "Техподдержка 24/7"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-10 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-light text-white">
                  Получить консультацию
                </h3>
                <p className="text-slate-400">Свяжемся в течение 15 минут</p>
              </div>
              
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
                />
                <Input
                  placeholder="Телефон"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
                />
                <Input
                  placeholder="Компания"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Заказать звонок
                </Button>
              </div>
              
              <p className="text-xs text-slate-400 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
