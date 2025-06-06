import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CulturesBlock = () => {
  const cultures = [
    { name: "Пшеница", icon: "Wheat" },
    { name: "Ячмень", icon: "Cherry" },
    { name: "Кукуруза", icon: "Corn" },
    { name: "Соя", icon: "Bean" },
    { name: "Подсолнечник", icon: "Sun" },
    { name: "Рапс", icon: "Flower2" },
    { name: "Сорго", icon: "Sprout" },
    { name: "Жмыхи", icon: "Package" },
  ];

  const parameters = [
    "Влажность",
    "Белок",
    "Клейковина",
    "Масличность",
    "Зольность",
    "Крахмал",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
            Подходит для любых культур
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Наши анализаторы обеспечивают{" "}
            <span className="font-semibold text-amber-600">
              быстрый и точный анализ
            </span>{" "}
            широкого спектра сельскохозяйственных культур и продуктов их
            переработки
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Культуры */}
          <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <Icon name="Sprout" size={28} className="text-green-600" />
              Анализируемые культуры
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cultures.map((culture) => (
                <div
                  key={culture.name}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  <Icon
                    name={culture.icon}
                    size={20}
                    className="text-amber-600 flex-shrink-0"
                    fallback="Circle"
                  />
                  <span className="text-slate-700 font-medium">
                    {culture.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Показатели */}
          <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <Icon name="BarChart3" size={28} className="text-blue-600" />
              Определяемые показатели
            </h3>
            <div className="space-y-4">
              {parameters.map((param) => (
                <div
                  key={param}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-blue-600"
                  />
                  <span className="text-slate-700 font-medium">{param}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg">
              <p className="text-sm text-slate-600 flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-amber-600" />
                Результат анализа готов за несколько минут с высокой точностью
              </p>
            </div>
          </Card>
        </div>

        {/* Призыв к действию */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full">
            <Icon name="Shield" size={20} className="text-green-600" />
            <span className="text-slate-700 font-medium">
              Доверие агропроизводителей по всей России
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturesBlock;
