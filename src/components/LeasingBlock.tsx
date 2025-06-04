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
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-slate-800 mb-6">
              Лизинг оборудования
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-light">
              Получите необходимое оборудование сегодня, платите частями
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">0%</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">
                    Первоначальный взнос
                  </h4>
                  <p className="text-slate-600">
                    Начните использовать оборудование сразу
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">7%</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">
                    Ставка от 7% годовых
                  </h4>
                  <p className="text-slate-600">
                    Выгодные условия финансирования
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">5</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Срок до 5 лет</h4>
                  <p className="text-slate-600">Гибкие сроки погашения</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-light text-slate-800">
                Заявка на лизинг
              </CardTitle>
              <CardDescription>
                Заполните форму и получите одобрение в течение 24 часов
              </CardDescription>
            </CardHeader>

            <div className="space-y-4">
              <Input
                placeholder="Название компании"
                className="border-slate-200"
              />
              <Input
                placeholder="Контактное лицо"
                className="border-slate-200"
              />
              <Input placeholder="Телефон" className="border-slate-200" />
              <Input placeholder="Email" className="border-slate-200" />
              <Textarea
                placeholder="Какое оборудование интересует?"
                className="border-slate-200 min-h-[80px]"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                Отправить заявку
              </Button>
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Рассмотрение заявки — бесплатно
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeasingBlock;
