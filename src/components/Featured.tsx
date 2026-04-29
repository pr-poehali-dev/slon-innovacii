export default function Featured() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col lg:flex-row" id="about">

      {/* Фото */}
      <div className="flex-1 relative h-[50vh] lg:h-auto overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/79a1a63e-e170-4869-88fd-0d4b742ff551.jpg"
          alt="Промышленное предприятие Пионер Трейд"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-neutral-950/80" />

        {/* Плашка поверх фото */}
        <div className="absolute bottom-8 left-8 flex gap-6">
          <div className="bg-orange-500 px-5 py-4 text-white">
            <p className="text-3xl font-bold leading-none">18</p>
            <p className="text-xs uppercase tracking-wide mt-1">лет опыта</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4 text-white">
            <p className="text-3xl font-bold leading-none">№1</p>
            <p className="text-xs uppercase tracking-wide mt-1">в отрасли</p>
          </div>
        </div>
      </div>

      {/* Текст */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-0">
        <p className="uppercase text-sm tracking-widest text-orange-400 mb-4">
          О компании
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
          18 лет на рынке<br />промышленной химии
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-10">
          Чётко отлаженная логистика и большой опыт ВЭД позволяют компании уверенно держаться на лидирующих позициях в отрасли.
        </p>

        <div className="flex flex-col gap-0 mb-10 border-t border-neutral-800">
          {[
            "Железнодорожные, автомобильные и морские контейнерные перевозки",
            "Работа с таможенными органами и ВЭД под ключ",
            "Оперативный мониторинг рынка и лучшие условия поставок",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 py-4 border-b border-neutral-800 group"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 group-hover:scale-150 transition-transform duration-200" />
              <span className="text-neutral-300 text-base">{item}</span>
            </div>
          ))}
        </div>

        <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300 w-fit">
          Узнать больше
        </button>
      </div>

    </div>
  );
}
