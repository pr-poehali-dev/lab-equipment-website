const AnalyzersBlock = () => {
  const partners = [
    "FOSS",
    "Perten",
    "SpectraStar",
    "IAS",
    "Инфраскан",
    "Спектран",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          В продаже оригинальные анализаторы от ведущих брендов:
        </h2>

        {/* Секция с текстом и изображением */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Прямые поставки от ведущих мировых производителей, под любой
              бюджет — от базовых моделей до профессиональных решений
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.poehali.dev/files/3188fe10-595a-4a27-aefd-a79075c97070.jpg"
              alt="Анализатор FOSS с образцами зерна"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Секция партнеров */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">
            Наши партнеры
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-green-500 transition-colors">
                  <span className="text-xs font-medium text-gray-400">
                    LOGO
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyzersBlock;
