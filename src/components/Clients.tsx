import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "СИБУР", sector: "Нефтехимия", country: "🇷🇺", desc: "Крупнейший нефтехимический холдинг России" },
  { name: "Лукойл", sector: "Нефтепереработка", country: "🇷🇺", desc: "Одна из крупнейших нефтяных компаний мира" },
  { name: "Роснефть", sector: "Нефтехимия", country: "🇷🇺", desc: "Лидер российской нефтяной отрасли" },
  { name: "Газпром нефтехим", sector: "Химия", country: "🇷🇺", desc: "Производство нефтехимической продукции" },
  { name: "Уралхим", sector: "Удобрения", country: "🇷🇺", desc: "Крупнейший производитель удобрений в России" },
  { name: "ФосАгро", sector: "Агрохимия", country: "🇷🇺", desc: "Ведущий производитель фосфорных удобрений" },
  { name: "Нижнекамскнефтехим", sector: "Нефтехимия", country: "🇷🇺", desc: "Один из крупнейших химических комплексов СНГ" },
  { name: "Пластик", sector: "Полимеры", country: "🇷🇺", desc: "Производство пластмасс и химволокна" },
  { name: "Henkel Россия", sector: "Спецхимия", country: "🇩🇪", desc: "Международный концерн, производство клеёв и покрытий" },
  { name: "BASF Россия", sector: "Химия", country: "🇩🇪", desc: "Ведущий мировой химический концерн" },
  { name: "Акрон", sector: "Удобрения", country: "🇷🇺", desc: "Крупный производитель комплексных удобрений" },
  { name: "КуйбышевАзот", sector: "Азотная химия", country: "🇷🇺", desc: "Производство капролактама, удобрений, полиамида" },
];

const stats = [
  { value: "200+", label: "клиентов по России" },
  { value: "18", label: "лет партнёрства" },
  { value: "33", label: "страны поставок" },
  { value: "98%", label: "повторных заказов" },
];

const sectors = ["Все отрасли", "Нефтехимия", "Удобрения", "Полимеры", "Химия", "Спецхимия"];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-neutral-950 py-20 px-6" id="clients">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-400 mb-3">Доверие рынка</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Наши<br />клиенты
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-base leading-relaxed">
            Среди наших партнёров — ведущие промышленные предприятия России и международные корпорации.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-950 p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-orange-500">{s.value}</p>
              <p className="text-neutral-400 text-sm mt-2 uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Баннер */}
        <div className="relative h-52 md:h-64 overflow-hidden mb-12 rounded-lg">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/293f7386-8924-4892-b695-77b51d1401a5.jpg"
            alt="Наши клиенты"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent flex items-center px-8 md:px-14">
            <div>
              <p className="text-orange-400 uppercase tracking-widest text-xs mb-2">Долгосрочные отношения</p>
              <p className="text-white text-xl md:text-3xl font-bold max-w-lg leading-tight">
                Более 80% клиентов работают с нами свыше 5 лет
              </p>
            </div>
          </div>
        </div>

        {/* Карточки клиентов */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 p-6 flex flex-col gap-3 transition-all duration-300 hover:bg-neutral-800"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{client.country}</span>
                    <span className="text-[10px] uppercase tracking-widest text-orange-400 border border-orange-500/30 px-2 py-0.5">
                      {client.sector}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                    {client.name}
                  </h3>
                </div>
                <span className="text-neutral-700 group-hover:text-orange-500 transition-colors text-2xl font-light">→</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed border-t border-neutral-800 pt-3">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-stretch gap-px">
          <div className="flex-1 bg-neutral-900 border border-neutral-800 p-6">
            <p className="text-white font-bold text-lg">Станьте нашим партнёром</p>
            <p className="text-neutral-500 text-sm mt-1">Индивидуальные условия для каждого клиента — обсудим ваши задачи</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-400 text-white px-10 py-6 text-sm uppercase tracking-widest font-bold transition-colors whitespace-nowrap">
            Связаться →
          </button>
        </div>

      </div>
    </div>
  );
}
