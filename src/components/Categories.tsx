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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-slate-800 text-center mb-16">
          Категории оборудования
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-white border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl font-medium text-slate-800 mb-2">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-slate-600 mb-3">
                  {category.description}
                </CardDescription>
                <span className="text-sm text-blue-600 font-medium">
                  {category.count}
                </span>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
