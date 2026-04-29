export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/0e150051-3487-45f8-8e45-f6db3fac387c.jpg"
          alt="Промышленное предприятие"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">18 лет на рынке промышленной химии</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Чётко отлаженная логистика и большой опыт ВЭД позволяют компании уверенно держаться на лидирующих позициях в отрасли.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block shrink-0" />
            <span>Железнодорожные, автомобильные и морские контейнерные перевозки</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block shrink-0" />
            <span>Работа с таможенными органами и ВЭД под ключ</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block shrink-0" />
            <span>Оперативный мониторинг рынка и лучшие условия поставок</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}