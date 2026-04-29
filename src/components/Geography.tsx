const regions = [
  {
    name: "Азия",
    countries: "Китай, Япония, Южная Корея, Индия, Тайвань",
    count: "12+",
    label: "стран",
  },
  {
    name: "Европа",
    countries: "Германия, Нидерланды, Бельгия, Франция, Италия",
    count: "15+",
    label: "стран",
  },
  {
    name: "Америка",
    countries: "США, Канада, Бразилия, Мексика",
    count: "6+",
    label: "стран",
  },
  {
    name: "Россия",
    countries: "Москва, Санкт-Петербург, Урал, Сибирь, Дальний Восток",
    count: "85",
    label: "регионов",
  },
];

export default function Geography() {
  return (
    <div className="bg-neutral-950 overflow-hidden" id="geography">

      {/* Карта */}
      <div className="relative h-[420px] md:h-[560px]">
        <img
          src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/e9712aa5-7f06-444f-b604-76a9bbec1f0e.jpg"
          alt="География поставок Пионер Трейд"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-neutral-950" />

        {/* Заголовок поверх карты */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="uppercase text-sm tracking-widest text-orange-400 mb-4">
            Международные поставки
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            География<br />поставок
          </h2>
        </div>
      </div>

      {/* Регионы */}
      <div className="px-6 pb-20 -mt-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-neutral-950 p-8 flex flex-col gap-3 group hover:bg-neutral-900 transition-colors duration-300"
              >
                <p className="text-5xl font-bold text-orange-500 leading-none">
                  {region.count}
                </p>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">
                  {region.label}
                </p>
                <h3 className="text-white text-xl font-bold mt-1">
                  {region.name}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-3">
                  {region.countries}
                </p>
              </div>
            ))}
          </div>

          {/* Нижняя строка */}
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-neutral-800 pt-8">
            <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
              Прямые контракты с производителями в более чем <span className="text-white font-semibold">33 странах</span>. Собственная экспертиза по каждому направлению.
            </p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap">
              Запросить прайс
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
