import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const DeliveryMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
          География доставки
        </h2>

        <Card className="overflow-hidden border-gray-200">
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/c7582469-f1f5-4ae7-878a-9ef9e94f1d1e.png"
                alt="Карта доставки по России"
                className="w-full h-auto"
              />
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <h4 className="font-medium text-gray-800 mb-2">Москва и МО</h4>
            <p className="text-gray-600">от 1-4 дней</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-gray-800 mb-2">
              Центральная Россия
            </h4>
            <p className="text-gray-600">от 4-8 дней</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-gray-800 mb-2">Сибирь</h4>
            <p className="text-gray-600">от 8-12 дней</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-gray-800 mb-2">Дальний Восток</h4>
            <p className="text-gray-600">от 16-24 дней</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Доставляем во все регионы России. Стоимость доставки рассчитывается
            индивидуально.
          </p>
          <p className="text-sm text-gray-500">
            * Сроки доставки могут варьироваться в зависимости от габаритов
            оборудования
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;
