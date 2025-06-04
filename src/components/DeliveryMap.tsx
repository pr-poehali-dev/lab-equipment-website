import { Card, CardHeader } from "@/components/ui/card";

const DeliveryMap = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-light text-white tracking-tight">
            География доставки
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Доставляем лабораторное оборудование по всей России
          </p>
        </div>

        <Card className="overflow-hidden bg-slate-800/60 border border-slate-700/50 rounded-2xl shadow-2xl backdrop-blur-sm">
          <CardHeader className="p-0">
            <div className="relative">
              <div className="bg-slate-700/50 p-8 rounded-t-2xl">
                <img
                  src="https://cdn.poehali.dev/files/c7582469-f1f5-4ae7-878a-9ef9e94f1d1e.png"
                  alt="Карта доставки по России"
                  className="w-full h-auto rounded-xl opacity-90 filter contrast-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent rounded-t-2xl"></div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { region: "Москва и МО", time: "от 1-4 дней" },
            { region: "Центральная Россия", time: "от 4-8 дней" },
            { region: "Сибирь", time: "от 8-12 дней" },
            { region: "Дальний Восток", time: "от 16-24 дней" },
          ].map((delivery, index) => (
            <Card
              key={index}
              className="p-6 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-center group hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <img
                  src="https://cdn.poehali.dev/files/148f9c9b-8123-4160-b83e-0642e9662fd8.png"
                  alt=""
                  className="w-full h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <h4 className="font-medium text-white text-lg mb-2">
                {delivery.region}
              </h4>
              <p className="text-blue-300 font-light">{delivery.time}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Доставляем во все регионы России. Стоимость доставки рассчитывается
            индивидуально.
          </p>
          <p className="text-sm text-slate-400">
            * Сроки доставки могут варьироваться в зависимости от габаритов
            оборудования
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;
