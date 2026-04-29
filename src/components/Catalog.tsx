import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "petrochemistry",
    name: "Нефтехимия",
    icon: "🛢️",
    color: "from-amber-600 to-amber-800",
    products: [
      "Этилен (C₂H₄)", "Пропилен (C₃H₆)", "Бензол (C₆H₆)", "Толуол (C₇H₈)",
      "Ксилол (орто, мета, пара)", "Стирол", "Нафталин", "Антрацен",
      "Битумы нефтяные", "Парафин технический", "Нефтяные смолы", "Циклогексан",
    ],
  },
  {
    id: "polymers",
    name: "Полимеры и пластмассы",
    icon: "🧱",
    color: "from-blue-600 to-blue-800",
    products: [
      "Полиэтилен высокого давления (ПЭВД)", "Полиэтилен низкого давления (ПЭНД)",
      "Полипропилен (ПП)", "Поливинилхлорид (ПВХ)", "Полистирол (ПС)",
      "ПЭТФ (полиэтилентерефталат)", "Полиуретан (ПУ)", "Полиамид (нейлон)",
      "Поликарбонат", "АБС-пластик", "Поливинилацетат (ПВА)", "Эпоксидные смолы",
      "Полиакрилаты", "Фторопласт (ПТФЭ)", "Каучук синтетический (СКС, СКД, СКЭП)",
    ],
  },
  {
    id: "solvents",
    name: "Растворители",
    icon: "🧪",
    color: "from-cyan-600 to-cyan-800",
    products: [
      "Ацетон", "Этанол технический", "Изопропиловый спирт (ИПС)",
      "Метанол", "Этилацетат", "Бутилацетат", "Н-бутанол", "Изобутанол",
      "Диметилформамид (ДМФА)", "N-метил-2-пирролидон (NMP)",
      "Диметилсульфоксид (ДМСО)", "Метиленхлорид (ДХМ)",
      "Хлороформ", "Тетрахлорэтилен", "Нефрас (уайт-спирит)", "Гексан",
    ],
  },
  {
    id: "acids",
    name: "Кислоты",
    icon: "⚗️",
    color: "from-red-600 to-red-800",
    products: [
      "Серная кислота (H₂SO₄)", "Соляная кислота (HCl)", "Азотная кислота (HNO₃)",
      "Фосфорная кислота (H₃PO₄)", "Уксусная кислота ледяная",
      "Муравьиная кислота", "Щавелевая кислота", "Борная кислота",
      "Плавиковая кислота (HF)", "Лимонная кислота", "Молочная кислота",
      "Адипиновая кислота", "Малеиновый ангидрид", "Фталевый ангидрид",
    ],
  },
  {
    id: "alkalis",
    name: "Щёлочи и основания",
    icon: "🔬",
    color: "from-violet-600 to-violet-800",
    products: [
      "Гидроксид натрия (NaOH, каустик)", "Гидроксид калия (KOH)",
      "Гидроксид кальция (Ca(OH)₂)", "Аммиак технический (NH₃)",
      "Карбонат натрия (сода кальцинированная)", "Гидрокарбонат натрия",
      "Карбонат калия (поташ)", "Гидроксид лития", "Гидроксид магния",
      "Тринатрийфосфат", "Силикат натрия (жидкое стекло)",
    ],
  },
  {
    id: "fertilizers",
    name: "Удобрения",
    icon: "🌱",
    color: "from-emerald-600 to-emerald-800",
    products: [
      "Мочевина (карбамид)", "Аммиачная селитра", "Сульфат аммония",
      "Хлорид калия", "Сульфат калия", "Калийная селитра",
      "Суперфосфат простой", "Суперфосфат двойной", "Диаммонийфосфат (ДАФ)",
      "Моноаммонийфосфат (МАФ)", "Нитроаммофос (NPK)", "Диаммофос",
      "Комплексные удобрения NPK", "Нитрат кальция",
    ],
  },
  {
    id: "pigments",
    name: "Пигменты и красители",
    icon: "🎨",
    color: "from-pink-600 to-pink-800",
    products: [
      "Диоксид титана (TiO₂)", "Оксид железа красный (Fe₂O₃)",
      "Оксид железа жёлтый", "Оксид железа чёрный (Fe₃O₄)",
      "Ультрамарин синий", "Берлинская лазурь", "Технический углерод (сажа)",
      "Литопон", "Цинковые белила (ZnO)", "Хромоксид зелёный",
      "Свинцовый крон жёлтый", "Фталоцианиновый синий", "Фталоцианиновый зелёный",
      "Азопигменты", "Перламутровые пигменты (слюда)", "Люминесцентные пигменты",
    ],
  },
  {
    id: "surfactants",
    name: "ПАВ и эмульгаторы",
    icon: "🫧",
    color: "from-sky-500 to-sky-700",
    products: [
      "Лаурилсульфат натрия (SLS)", "Лаурилэфирсульфат натрия (SLES)",
      "Алкилбензолсульфонат (АБС)", "Нефтяной сульфонат",
      "АПАВ анионный (для стирки)", "Катионные ПАВ (КПАВ)",
      "Неионогенные ПАВ (НПАВ)", "Оксиэтилированные спирты",
      "Оксиэтилированные алкилфенолы", "Бетаины амфотерные",
      "Лецитин соевый", "Полисорбаты (Твин)", "Сорбитаны (Спан)",
      "Амфолитные ПАВ",
    ],
  },
  {
    id: "salts",
    name: "Неорганические соли",
    icon: "🧂",
    color: "from-orange-500 to-orange-700",
    products: [
      "Хлорид натрия (соль техническая)", "Сульфат натрия (Na₂SO₄)",
      "Нитрат натрия", "Нитрат кальция", "Хлорид кальция (CaCl₂)",
      "Сульфат магния (MgSO₄)", "Хлорид аммония (NH₄Cl)",
      "Сульфат алюминия", "Хлорид железа (FeCl₃)", "Сульфат меди (медный купорос)",
      "Сульфат цинка (ZnSO₄)", "Нитрат цинка", "Хлорид марганца",
      "Бихромат калия", "Перманганат калия", "Гипохлорит натрия",
    ],
  },
  {
    id: "catalysts",
    name: "Катализаторы и адсорбенты",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-700",
    products: [
      "Активированный уголь", "Силикагель", "Цеолиты",
      "Оксид алюминия (γ-Al₂O₃)", "Диоксид кремния (аэросил)",
      "Никелевый катализатор", "Платиновый катализатор",
      "Палладиевый катализатор", "Оксид ванадия (V₂O₅)",
      "Оксид марганца", "Молибденовый катализатор",
      "Катализатор Циглера-Натта", "Цеолитные катализаторы",
    ],
  },
  {
    id: "special",
    name: "Спецхимия и добавки",
    icon: "🔧",
    color: "from-rose-600 to-rose-800",
    products: [
      "Антиоксиданты для полимеров", "Стабилизаторы ПВХ (Pb, Ca/Zn, Ba/Zn)",
      "Пластификаторы (ДОФ, ДОА, ДБФ)", "Антипирены (ТХЭФ, пентабромдифенол)",
      "Нуклеаторы и зародышеобразователи", "Антистатики",
      "Пигментные концентраты (мастербатчи)", "Вспенивающие агенты",
      "Сшивающие агенты", "Ускорители вулканизации",
      "Смазки технологические", "Разделительные агенты",
      "Флуоресцентные отбеливатели", "Фотоинициаторы для УФ-отверждения",
    ],
  },
  {
    id: "rubber",
    name: "Резинотехническая химия",
    icon: "⭕",
    color: "from-neutral-600 to-neutral-800",
    products: [
      "Сера техническая (вулканизация)", "Каолин (белая сажа)",
      "Диоксид кремния (наполнитель)", "Нафтенат цинка",
      "Стеариновая кислота", "Оксид цинка (активатор)",
      "Дифенилгуанидин (ДФГ)", "Меркаптобензтиазол (МБТ)",
      "Тетраметилтиурамдисульфид (ТМТД)", "Технический углерод (N220, N330, N550)",
      "Мел технический", "Тальк технический",
      "Антиозонанты (ПАФ-Д, Диафен)", "Ингибиторы скорчинга",
    ],
  },
];

export default function Catalog() {
  const [active, setActive] = useState<string>(categories[0].id);
  const [search, setSearch] = useState("");

  const current = categories.find((c) => c.id === active)!;

  const filtered = search.trim()
    ? categories.flatMap((c) =>
        c.products
          .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
          .map((p) => ({ product: p, category: c.name, icon: c.icon }))
      )
    : null;

  return (
    <div className="bg-white py-20 px-6" id="catalog">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-500 mb-3">Ассортимент</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Каталог<br />продукции
            </h2>
          </div>
          {/* Поиск */}
          <div className="relative md:w-72">
            <input
              type="text"
              placeholder="Найти продукт..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors pr-10"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-lg leading-none"
              >×</button>
            )}
          </div>
        </div>

        {/* Режим поиска */}
        {filtered ? (
          <div>
            <p className="text-neutral-500 text-sm mb-6">Найдено позиций: <span className="font-semibold text-neutral-900">{filtered.length}</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border border-neutral-200 px-4 py-3 flex items-start gap-3 hover:border-orange-300 transition-colors"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-neutral-900 text-sm font-medium">{item.product}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-neutral-400 text-center py-16">Ничего не найдено. Попробуйте другой запрос.</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Категории */}
            <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 lg:shrink lg:whitespace-normal
                    ${active === cat.id
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.name}</span>
                  {active === cat.id && (
                    <span className="ml-auto text-xs text-neutral-400 hidden lg:block">{cat.products.length}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Продукты */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Шапка категории */}
                  <div className={`bg-gradient-to-r ${current.color} p-6 mb-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{current.icon}</span>
                      <div>
                        <h3 className="text-white text-xl font-bold">{current.name}</h3>
                        <p className="text-white/70 text-sm">{current.products.length} позиций</p>
                      </div>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 text-white text-xs uppercase tracking-widest px-4 py-2 transition-colors">
                      Запросить прайс
                    </button>
                  </div>

                  {/* Список */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200">
                    {current.products.map((product, i) => (
                      <motion.div
                        key={product}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="bg-white px-5 py-4 flex items-center gap-3 hover:bg-neutral-50 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-neutral-800 text-sm">{product}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-neutral-950 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">Не нашли нужную позицию?</p>
            <p className="text-neutral-400 text-sm mt-1">Мы поставляем широкий ассортимент — свяжитесь с нами для уточнения наличия и цены</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 text-sm uppercase tracking-widest font-bold transition-colors whitespace-nowrap shrink-0">
            Запросить прайс
          </button>
        </div>

      </div>
    </div>
  );
}
