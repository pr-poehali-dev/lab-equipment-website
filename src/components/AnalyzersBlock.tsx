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
    <section className="relative py-16 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          В продаже оригинальные анализаторы от ведущих брендов:
        </h2>

        {/* Секция с текстом и изображением */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Прямые поставки от ведущих мировых производителей, под любой
              бюджет — от базовых моделей до профессиональных решений
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/3188fe10-595a-4a27-aefd-a79075c97070.jpg"
                alt="Анализатор FOSS с образцами зерна"
                className="w-full max-w-md rounded-xl shadow-2xl ring-1 ring-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Секция партнеров */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Наши партнеры
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 flex items-center justify-center hover:border-green-500/50 hover:bg-slate-700/50 transition-all duration-300 ring-1 ring-white/5">
                  {partner === "FOSS" ? (
                    <img
                      src="https://cdn.poehali.dev/files/1476f4aa-91da-4d3e-8b12-ca21304d2eb6.jpg"
                      alt="FOSS логотип"
                      className="w-16 h-16 object-contain rounded-full"
                    />
                  ) : partner === "Perten" ? (
                    <img
                      src="https://cdn.poehali.dev/files/61d0ff5c-4c47-47fc-91bf-3f583c1c1274.jpg"
                      alt="Perten логотип"
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      LOGO
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-slate-300">
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
