import Icon from "@/components/ui/icon";

const logisticsItems = [
  {
    icon: "Warehouse",
    title: "Собственные склады",
    description:
      "Современные складские комплексы с соблюдением всех норм хранения химической продукции. Ответственное хранение и оперативная отгрузка.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: "Train",
    title: "Железнодорожные перевозки",
    description:
      "Доставка цистернами, крытыми вагонами и платформами по всей сети РЖД. Оптимальный выбор для крупных партий.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: "Truck",
    title: "Автомобильные перевозки",
    description:
      "Собственный и привлечённый автопарк для оперативной доставки по России. Возможность доставки «до двери».",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    icon: "Ship",
    title: "Морские контейнерные перевозки",
    description:
      "Импортные поставки морским путём с полным таможенным сопровождением. Работаем с ведущими международными линиями.",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    icon: "FileCheck",
    title: "Таможенное оформление",
    description:
      "Многолетний опыт ВЭД и работы с таможенными органами. Берём на себя весь пакет документов для импорта.",
    color: "from-violet-600 to-violet-800",
  },
  {
    icon: "BarChart2",
    title: "Мониторинг рынка",
    description:
      "Оперативное отслеживание цен и наличия продукции на мировых рынках. Закупаем в нужный момент по лучшей цене.",
    color: "from-rose-600 to-rose-800",
  },
];

export default function Logistics() {
  return (
    <div className="bg-neutral-950 py-20 px-6" id="logistics">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-400 mb-3">
              Инфраструктура
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Склады<br />и логистика
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-base leading-relaxed">
            Полный цикл — от закупки за рубежом до доставки на ваш склад. Три вида транспорта, таможня под ключ.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {logisticsItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg bg-neutral-900 p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white`}>
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Баннер */}
        <div className="relative overflow-hidden rounded-lg h-72 md:h-[420px]">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/98d88e35-d46c-437b-b553-101c90e1a765.jpg"
            alt="Логистический хаб Пионер Трейд"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
            <div>
              <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">18 лет опыта</p>
              <p className="text-white text-2xl md:text-4xl font-bold max-w-xl leading-tight">
                Доставляем в любую точку России
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
