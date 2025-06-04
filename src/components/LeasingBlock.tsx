import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LeasingBlock = () => {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-white tracking-tight leading-tight">
                Лизинг оборудования
              </h2>
              <p className="text-2xl text-slate-300 font-light leading-relaxed">
                Получите необходимое оборудование сегодня, платите частями
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  value: "0%",
                  title: "Первоначальный взнос",
                  description: "Начните использовать оборудование сразу",
                },
                {
                  value: "7%",
                  title: "Ставка от 7% годовых",
                  description: "Выгодные условия финансирования",
                },
                {
                  value: "5",
                  title: "Срок до 5 лет",
                  description: "Гибкие сроки погашения",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center relative">
                    <img
                      src="https://cdn.poehali.dev/files/148f9c9b-8123-4160-b83e-0642e9662fd8.png"
                      alt=""
                      className="w-8 h-8 object-contain brightness-0 invert opacity-30 absolute"
                    />
                    <span className="text-blue-300 font-semibold text-lg relative z-10">
                      {item.value}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-white text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-10 bg-slate-700/50 border border-slate-600/50 shadow-2xl rounded-2xl">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-3xl font-light text-white mb-2">
                Заявка на лизинг
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Заполните форму и получите одобрение в течение 24 часов
              </CardDescription>
            </CardHeader>

            <div className="space-y-5">
              <Input
                placeholder="Название компании"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Input
                placeholder="Контактное лицо"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Input
                placeholder="Телефон"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Input
                placeholder="Email"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 h-12 rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Textarea
                placeholder="Какое оборудование интересует?"
                className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400 min-h-[100px] rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Отправить заявку
              </Button>
            </div>

            <p className="text-sm text-slate-400 mt-6 text-center">
              Рассмотрение заявки — бесплатно
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeasingBlock;
