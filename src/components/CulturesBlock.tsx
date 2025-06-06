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
    { name: "Жмыхи и шрота", icon: "Package" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            Что можно анализировать
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Наши приборы подходят для любых культур
            <br />и задач агробизнеса
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {cultures.map((culture) => (
            <div
              key={culture.name}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-700/50 group-hover:bg-slate-600/60 transition-colors">
                <Icon
                  name={culture.icon}
                  size={32}
                  className="text-blue-300 group-hover:text-blue-200 transition-colors"
                  fallback="Circle"
                />
              </div>
              <span className="text-slate-200 font-medium text-sm leading-tight">
                {culture.name}
              </span>
            </div>
          ))}
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
