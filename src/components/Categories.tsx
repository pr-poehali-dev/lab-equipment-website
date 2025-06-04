import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      title: "ИК-анализаторы",
      description:
        "Инфракрасные анализаторы для определения влажности, белка, жира",
      count: "25+ моделей",
      icon: "🔬",
    },
    {
      title: "Влагомеры",
      description: "Портативные и стационарные влагомеры для зерна и кормов",
      count: "15+ моделей",
      icon: "💧",
    },
    {
      title: "Весы лабораторные",
      description: "Аналитические и технические весы высокой точности",
      count: "30+ моделей",
      icon: "⚖️",
    },
    {
      title: "pH-метры",
      description: "Портативные и настольные pH-метры для почвы и растворов",
      count: "12+ моделей",
      icon: "🧪",
    },
    {
      title: "Микроскопы",
      description: "Цифровые и оптические микроскопы для исследований",
      count: "20+ моделей",
      icon: "🔍",
    },
    {
      title: "Анализаторы качества",
      description: "Приборы для анализа клейковины, числа падения, зольности",
      count: "18+ моделей",
      icon: "📊",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-light text-white tracking-tight">
            Категории оборудования
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Полный спектр лабораторного оборудования для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group p-8 bg-slate-800/60 border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <CardHeader className="p-0 space-y-6">
                <div className="w-16 h-16 text-slate-400 group-hover:text-blue-300 transition-colors duration-300">
                  <img
                    src="https://cdn.poehali.dev/files/17d61b28-8e47-414e-95f5-8a35610c0dbd.png"
                    alt={category.title}
                    className="w-full h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-medium text-white group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <div className="pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-300 border border-blue-500/30">
                      {category.count}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
