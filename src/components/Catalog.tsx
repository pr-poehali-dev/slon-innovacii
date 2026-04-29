import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Manager {
  name: string;
  phone: string;
  email: string;
}

const categories = [
  {
    id: "petrochemistry",
    name: "Нефтехимия",
    icon: "🛢️",
    bg: "bg-amber-500",
    text: "text-amber-400",
    border: "border-amber-500",
    gradient: "from-amber-500/20 to-amber-900/40",
    manager: { name: "Алексей Соколов", phone: "+7 (495) 123-45-01", email: "sokolov@pioneer-trade.ru" },
    products: [
      "Этилен (C₂H₄)", "Пропилен (C₃H₆)", "Бензол (C₆H₆)", "Толуол (C₇H₈)",
      "Ксилол (орто, мета, пара)", "Стирол", "Нафталин", "Антрацен",
      "Битумы нефтяные", "Парафин технический", "Нефтяные смолы", "Циклогексан",
    ],
  },
  {
    id: "polymers",
    name: "Полимеры",
    icon: "🧱",
    bg: "bg-blue-500",
    text: "text-blue-400",
    border: "border-blue-500",
    gradient: "from-blue-500/20 to-blue-900/40",
    manager: { name: "Марина Волкова", phone: "+7 (495) 123-45-02", email: "volkova@pioneer-trade.ru" },
    products: [
      "Полиэтилен высокого давления (ПЭВД)", "Полиэтилен низкого давления (ПЭНД)",
      "Полипропилен (ПП)", "Поливинилхлорид (ПВХ)", "Полистирол (ПС)",
      "ПЭТФ (полиэтилентерефталат)", "Полиуретан (ПУ)", "Полиамид (нейлон)",
      "Поликарбонат", "АБС-пластик", "Поливинилацетат (ПВА)", "Эпоксидные смолы",
      "Полиакрилаты", "Фторопласт (ПТФЭ)", "Каучук синтетический",
    ],
  },
  {
    id: "solvents",
    name: "Растворители",
    icon: "🧪",
    bg: "bg-cyan-500",
    text: "text-cyan-400",
    border: "border-cyan-500",
    gradient: "from-cyan-500/20 to-cyan-900/40",
    manager: { name: "Дмитрий Орлов", phone: "+7 (495) 123-45-03", email: "orlov@pioneer-trade.ru" },
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
    bg: "bg-red-500",
    text: "text-red-400",
    border: "border-red-500",
    gradient: "from-red-500/20 to-red-900/40",
    manager: { name: "Екатерина Зайцева", phone: "+7 (495) 123-45-04", email: "zaitseva@pioneer-trade.ru" },
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
    name: "Щёлочи",
    icon: "🔬",
    bg: "bg-violet-500",
    text: "text-violet-400",
    border: "border-violet-500",
    gradient: "from-violet-500/20 to-violet-900/40",
    manager: { name: "Павел Морозов", phone: "+7 (495) 123-45-05", email: "morozov@pioneer-trade.ru" },
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
    bg: "bg-emerald-500",
    text: "text-emerald-400",
    border: "border-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-900/40",
    manager: { name: "Ольга Петрова", phone: "+7 (495) 123-45-06", email: "petrova@pioneer-trade.ru" },
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
    name: "Пигменты",
    icon: "🎨",
    bg: "bg-pink-500",
    text: "text-pink-400",
    border: "border-pink-500",
    gradient: "from-pink-500/20 to-pink-900/40",
    manager: { name: "Наталья Сидорова", phone: "+7 (495) 123-45-07", email: "sidorova@pioneer-trade.ru" },
    products: [
      "Диоксид титана (TiO₂)", "Оксид железа красный (Fe₂O₃)",
      "Оксид железа жёлтый", "Оксид железа чёрный (Fe₃O₄)",
      "Ультрамарин синий", "Берлинская лазурь", "Технический углерод (сажа)",
      "Литопон", "Цинковые белила (ZnO)", "Хромоксид зелёный",
      "Фталоцианиновый синий", "Фталоцианиновый зелёный",
      "Азопигменты", "Перламутровые пигменты", "Люминесцентные пигменты",
    ],
  },
  {
    id: "surfactants",
    name: "ПАВ",
    icon: "🫧",
    bg: "bg-sky-500",
    text: "text-sky-400",
    border: "border-sky-500",
    gradient: "from-sky-500/20 to-sky-900/40",
    manager: { name: "Игорь Лебедев", phone: "+7 (495) 123-45-08", email: "lebedev@pioneer-trade.ru" },
    products: [
      "Лаурилсульфат натрия (SLS)", "Лаурилэфирсульфат натрия (SLES)",
      "Алкилбензолсульфонат (АБС)", "Нефтяной сульфонат",
      "АПАВ анионный", "Катионные ПАВ (КПАВ)",
      "Неионогенные ПАВ (НПАВ)", "Оксиэтилированные спирты",
      "Оксиэтилированные алкилфенолы", "Бетаины амфотерные",
      "Лецитин соевый", "Полисорбаты (Твин)", "Сорбитаны (Спан)",
    ],
  },
  {
    id: "salts",
    name: "Неорг. соли",
    icon: "🧂",
    bg: "bg-orange-500",
    text: "text-orange-400",
    border: "border-orange-500",
    gradient: "from-orange-500/20 to-orange-900/40",
    manager: { name: "Сергей Николаев", phone: "+7 (495) 123-45-09", email: "nikolaev@pioneer-trade.ru" },
    products: [
      "Хлорид натрия (соль техническая)", "Сульфат натрия (Na₂SO₄)",
      "Нитрат натрия", "Нитрат кальция", "Хлорид кальция (CaCl₂)",
      "Сульфат магния (MgSO₄)", "Хлорид аммония (NH₄Cl)",
      "Сульфат алюминия", "Хлорид железа (FeCl₃)", "Медный купорос",
      "Сульфат цинка (ZnSO₄)", "Нитрат цинка", "Перманганат калия",
      "Гипохлорит натрия", "Бихромат калия",
    ],
  },
  {
    id: "catalysts",
    name: "Катализаторы",
    icon: "⚡",
    bg: "bg-yellow-500",
    text: "text-yellow-400",
    border: "border-yellow-500",
    gradient: "from-yellow-500/20 to-yellow-900/40",
    manager: { name: "Андрей Козлов", phone: "+7 (495) 123-45-10", email: "kozlov@pioneer-trade.ru" },
    products: [
      "Активированный уголь", "Силикагель", "Цеолиты",
      "Оксид алюминия (γ-Al₂O₃)", "Диоксид кремния (аэросил)",
      "Никелевый катализатор", "Платиновый катализатор",
      "Палладиевый катализатор", "Оксид ванадия (V₂O₅)",
      "Оксид марганца", "Молибденовый катализатор",
      "Катализатор Циглера-Натта",
    ],
  },
  {
    id: "special",
    name: "Спецхимия",
    icon: "🔧",
    bg: "bg-rose-500",
    text: "text-rose-400",
    border: "border-rose-500",
    gradient: "from-rose-500/20 to-rose-900/40",
    manager: { name: "Виктория Смирнова", phone: "+7 (495) 123-45-11", email: "smirnova@pioneer-trade.ru" },
    products: [
      "Антиоксиданты для полимеров", "Стабилизаторы ПВХ",
      "Пластификаторы (ДОФ, ДОА, ДБФ)", "Антипирены",
      "Нуклеаторы и зародышеобразователи", "Антистатики",
      "Пигментные концентраты (мастербатчи)", "Вспенивающие агенты",
      "Сшивающие агенты", "Ускорители вулканизации",
      "Смазки технологические", "Фотоинициаторы УФ-отверждения",
    ],
  },
  {
    id: "rubber",
    name: "Резинохимия",
    icon: "⭕",
    bg: "bg-neutral-500",
    text: "text-neutral-400",
    border: "border-neutral-500",
    gradient: "from-neutral-500/20 to-neutral-900/40",
    manager: { name: "Роман Фёдоров", phone: "+7 (495) 123-45-12", email: "fedorov@pioneer-trade.ru" },
    products: [
      "Сера техническая", "Каолин (белая сажа)",
      "Диоксид кремния (наполнитель)", "Нафтенат цинка",
      "Стеариновая кислота", "Оксид цинка (активатор)",
      "Дифенилгуанидин (ДФГ)", "Меркаптобензтиазол (МБТ)",
      "Тетраметилтиурамдисульфид (ТМТД)", "Технический углерод (N220, N330)",
      "Мел технический", "Тальк технический",
      "Антиозонанты", "Ингибиторы скорчинга",
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
          .map((p) => ({ product: p, category: c.name, icon: c.icon, text: c.text, bg: c.bg }))
      )
    : null;

  const totalProducts = categories.reduce((a, c) => a + c.products.length, 0);

  return (
    <div className="bg-neutral-950 py-20 px-6" id="catalog">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-400 mb-3">Ассортимент</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Каталог<br />продукции
            </h2>
            <p className="text-neutral-500 mt-3 text-sm">
              {categories.length} категорий · {totalProducts}+ позиций
            </p>
          </div>
          {/* Поиск */}
          <div className="relative md:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Найти продукт..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 focus:border-orange-500 px-4 py-3 pl-10 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xl leading-none"
              >×</button>
            )}
          </div>
        </div>

        {/* Режим поиска */}
        {filtered ? (
          <div>
            <p className="text-neutral-500 text-sm mb-6">
              Найдено: <span className="font-semibold text-white">{filtered.length}</span> позиций
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-neutral-900 border border-neutral-800 px-4 py-3 flex items-start gap-3 hover:border-orange-500/50 transition-colors"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{item.product}</p>
                    <p className={`text-xs mt-0.5 ${item.text}`}>{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-neutral-500 text-center py-16 text-lg">Ничего не найдено</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Категории — плитки */}
            <div className="lg:w-72 shrink-0">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`relative flex flex-col items-start gap-2 p-4 text-left transition-all duration-200 border overflow-hidden
                      ${active === cat.id
                        ? `bg-neutral-800 ${cat.border} ${cat.text}`
                        : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                      }`}
                  >
                    {active === cat.id && (
                      <motion.div
                        layoutId="activeBg"
                        className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} pointer-events-none`}
                      />
                    )}
                    <span className="text-2xl relative z-10">{cat.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide leading-tight relative z-10">{cat.name}</span>
                    <span className="text-[10px] text-neutral-500 relative z-10">{cat.products.length} поз.</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Продукты */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.22 }}
                >
                  {/* Шапка */}
                  <div className={`relative overflow-hidden p-6 mb-4 bg-gradient-to-r ${current.gradient} border ${current.border}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{current.icon}</span>
                        <div>
                          <h3 className="text-white text-2xl font-bold">{current.name}</h3>
                          <p className={`text-sm mt-0.5 ${current.text}`}>{current.products.length} позиций в каталоге</p>
                        </div>
                      </div>
                      <button className={`shrink-0 border ${current.border} ${current.text} text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white/10 transition-colors hidden sm:block`}>
                        Запросить прайс
                      </button>
                    </div>

                    {/* Менеджер */}
                    <div className={`mt-4 pt-4 border-t ${current.border} border-opacity-40 flex flex-col sm:flex-row sm:items-center gap-3`}>
                      <div className={`w-9 h-9 rounded-full ${current.bg} bg-opacity-20 border ${current.border} flex items-center justify-center shrink-0`}>
                        <span className="text-base">👤</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold">{current.manager.name}</p>
                        <p className="text-neutral-500 text-xs">Ответственный менеджер</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={`tel:${current.manager.phone.replace(/\D/g, "")}`}
                          className={`flex items-center gap-1.5 text-xs ${current.text} border ${current.border} border-opacity-50 px-3 py-1.5 hover:bg-white/10 transition-colors`}
                        >
                          📞 {current.manager.phone}
                        </a>
                        <a
                          href={`mailto:${current.manager.email}`}
                          className={`flex items-center gap-1.5 text-xs ${current.text} border ${current.border} border-opacity-50 px-3 py-1.5 hover:bg-white/10 transition-colors`}
                        >
                          ✉️ {current.manager.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Список продуктов */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.products.map((product, i) => (
                      <motion.div
                        key={product}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-4 py-3.5 transition-all duration-200 cursor-default"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${current.bg} shrink-0 group-hover:scale-150 transition-transform duration-200`} />
                        <span className="text-neutral-300 group-hover:text-white text-sm transition-colors">{product}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-px">
          <div className="flex-1 bg-neutral-900 border border-neutral-800 p-6">
            <p className="text-white font-bold text-lg">Не нашли нужную позицию?</p>
            <p className="text-neutral-500 text-sm mt-1">Поставляем широкий ассортимент — уточним наличие и цену</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-400 text-white px-10 py-6 text-sm uppercase tracking-widest font-bold transition-colors whitespace-nowrap">
            Запросить прайс →
          </button>
        </div>

      </div>
    </div>
  );
}