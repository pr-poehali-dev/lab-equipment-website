import Icon from "@/components/ui/icon";

const CulturesBlock = () => {
  const cultures = [
    { name: "Пшеница", icon: "Wheat" },
    { name: "Ячмень", icon: "Wheat" },
    { name: "Кукуруза", icon: "Corn" },
    { name: "Соя", icon: "Bean" },
    { name: "Подсолнечник", icon: "Sun" },
    { name: "Рапс", icon: "Flower" },
    { name: "Сорго", icon: "Wheat" },
    { name: "Жмыхи и шрота", icon: "Grain" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            Наши приборы подходят для любых культур и задач агробизнеса
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Основные параметры: влажность, белок, клейковина, масличность,
            зольность и др.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {cultures.map((culture) => (
            <div
              key={culture.name}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-700/50 group-hover:bg-slate-600/60 transition-colors">
                {culture.name === "Пшеница" ? (
                  <img
                    src="https://cdn.poehali.dev/files/97e10995-eb0a-41ee-9461-0b7a4c2b9d9b.jpg"
                    alt="Пшеница"
                    className="w-8 h-8 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <Icon
                    name={culture.icon}
                    size={32}
                    className="text-blue-300 group-hover:text-blue-200 transition-colors"
                    fallback="Circle"
                  />
                )}
              </div>
              <span className="text-slate-200 font-medium text-sm leading-tight">
                {culture.name}
              </span>
            </div>
          ))}
        </div>

        {/* Преимущества для клиентов */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-start gap-4">
              <Icon
                name="Zap"
                size={24}
                className="text-yellow-400 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Точная оценка качества
                </h3>
                <p className="text-slate-300 text-sm">
                  Мгновенные результаты без необходимости в лабораторных
                  анализах.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-start gap-4">
              <Icon
                name="Shield"
                size={24}
                className="text-green-400 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Независимость от сторонних услуг
                </h3>
                <p className="text-slate-300 text-sm">
                  Вы получаете полную автономию в процессе контроля качества
                  продукции, без зависимостей от лабораторий.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-start gap-4">
              <Icon
                name="Heart"
                size={24}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Удобство в работе
                </h3>
                <p className="text-slate-300 text-sm">
                  Простота использования, надежность и низкие эксплуатационные
                  расходы.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
            <div className="flex items-start gap-4">
              <Icon
                name="Users"
                size={24}
                className="text-purple-400 mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Мы все сделаем за вас
                </h3>
                <p className="text-slate-300 text-sm">
                  Подберем подходящее оборудование, откалибруем его, привезем и
                  настроим, а также обучим ваших специалистов для эффективной
                  работы с устройствами.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 rounded-full backdrop-blur-sm">
            <Icon name="Shield" size={20} className="text-green-400" />
            <span className="text-slate-200 font-medium">
              Доверие агропроизводителей по всей России
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturesBlock;
