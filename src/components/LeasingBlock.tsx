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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Лизинг оборудования
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Получите необходимое оборудование сегодня, платите частями
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">0%</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Первоначальный взнос
                  </h4>
                  <p className="text-gray-600">
                    Начните использовать оборудование сразу
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">7%</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Ставка от 7% годовых
                  </h4>
                  <p className="text-gray-600">
                    Выгодные условия финансирования
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">5</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Срок до 5 лет</h4>
                  <p className="text-gray-600">Гибкие сроки погашения</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white border border-gray-200 shadow-xl">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-light text-gray-800">
                Заявка на лизинг
              </CardTitle>
              <CardDescription>
                Заполните форму и получите одобрение в течение 24 часов
              </CardDescription>
            </CardHeader>

            <div className="space-y-4">
              <Input
                placeholder="Название компании"
                className="border-gray-300 focus:border-gray-500"
              />
              <Input
                placeholder="Контактное лицо"
                className="border-gray-300 focus:border-gray-500"
              />
              <Input
                placeholder="Телефон"
                className="border-gray-300 focus:border-gray-500"
              />
              <Input
                placeholder="Email"
                className="border-gray-300 focus:border-gray-500"
              />
              <Textarea
                placeholder="Какое оборудование интересует?"
                className="border-gray-300 focus:border-gray-500 min-h-[80px]"
              />
              <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3">
                Отправить заявку
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Рассмотрение заявки — бесплатно
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeasingBlock;
