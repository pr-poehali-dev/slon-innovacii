import Icon from "@/components/ui/icon";

const logisticsItems = [
  {
    icon: "Warehouse",
    title: "Собственные склады",
    description:
      "Современные складские комплексы с соблюдением всех норм хранения химической продукции. Ответственное хранение и оперативная отгрузка.",
  },
  {
    icon: "Train",
    title: "Железнодорожные перевозки",
    description:
      "Доставка цистернами, крытыми вагонами и платформами по всей сети РЖД. Оптимальный выбор для крупных партий.",
  },
  {
    icon: "Truck",
    title: "Автомобильные перевозки",
    description:
      "Собственный и привлечённый автопарк для оперативной доставки по России. Возможность доставки «до двери».",
  },
  {
    icon: "Ship",
    title: "Морские контейнерные перевозки",
    description:
      "Импортные поставки морским путём с полным таможенным сопровождением. Работаем с ведущими международными линиями.",
  },
  {
    icon: "FileCheck",
    title: "Таможенное оформление",
    description:
      "Многолетний опыт ВЭД и работы с таможенными органами. Берём на себя весь пакет документов для импорта.",
  },
  {
    icon: "BarChart2",
    title: "Мониторинг рынка",
    description:
      "Оперативное отслеживание цен и наличия продукции на мировых рынках. Закупаем в нужный момент по лучшей цене.",
  },
];

export default function Logistics() {
  return (
    <div className="bg-neutral-50 py-20 px-6" id="logistics">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="uppercase text-sm tracking-widest text-neutral-500 mb-3">
            Инфраструктура
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight max-w-2xl">
            Склады и логистика
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {logisticsItems.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 flex flex-col gap-4 hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-none">
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden h-64 md:h-96">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/873e2f65-94f6-4e1a-8a09-7d1cfbf5a608.jpg"
            alt="Складской комплекс Пионер Трейд"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-8">
            <p className="text-white text-xl md:text-2xl font-medium max-w-lg">
              Полный цикл — от закупки за рубежом до доставки на ваш склад
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
