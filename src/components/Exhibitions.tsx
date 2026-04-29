import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const exhibitions = [
  {
    year: "2024",
    name: "China International Chemical Industry Fair",
    city: "Шанхай, Китай",
    desc: "Крупнейшая химическая выставка Азии. Переговоры с ведущими производителями, новые контракты на поставку.",
  },
  {
    year: "2024",
    name: "ACHEMA",
    city: "Франкфурт, Германия",
    desc: "Мировой форум химической промышленности. Презентация новых направлений поставок европейского сырья.",
  },
  {
    year: "2023",
    name: "Khimia — Химия",
    city: "Москва, Россия",
    desc: "Главная отраслевая выставка России. Встречи с клиентами, демонстрация расширенного ассортимента.",
  },
  {
    year: "2023",
    name: "Korea Chem",
    city: "Сеул, Южная Корея",
    desc: "Ведущая выставка химической отрасли АТР. Укрепление партнёрства с корейскими производителями.",
  },
  {
    year: "2022",
    name: "Interplastica",
    city: "Москва, Россия",
    desc: "Международная выставка пластмасс и каучука. Расширение линейки полимерного сырья для клиентов.",
  },
  {
    year: "2022",
    name: "ChemSpec Europe",
    city: "Барселона, Испания",
    desc: "Специализированная выставка тонкой и специальной химии. Новые направления в сегменте специального сырья.",
  },
];

export default function Exhibitions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-neutral-950 py-20 px-6" id="exhibitions">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-16">
          <p className="uppercase text-sm tracking-widest text-orange-400 mb-3">
            Международная экспертиза
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Участие в выставках
          </h2>
        </div>

        {/* Фото-баннер */}
        <div className="relative h-64 md:h-80 overflow-hidden mb-12 rounded-lg">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/47341f61-e867-45d4-853b-34488b8063de.jpg"
            alt="Международная выставка"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Присутствие на мировых рынках</p>
            <p className="text-white text-2xl md:text-4xl font-bold max-w-lg leading-tight">
              Ежегодно участвуем в&nbsp;10+ выставках по всему миру
            </p>
          </div>
        </div>

        {/* Список выставок */}
        <div ref={ref} className="flex flex-col divide-y divide-neutral-800">
          {exhibitions.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 py-6 hover:bg-neutral-900 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
            >
              {/* Год */}
              <div className="shrink-0 w-16">
                <span className="text-orange-500 font-bold text-lg">{ex.year}</span>
              </div>

              {/* Название */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{ex.name}</h3>
                <p className="text-neutral-500 text-sm mt-0.5 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-orange-500 inline-block" />
                  {ex.city}
                </p>
              </div>

              {/* Описание */}
              <p className="text-neutral-400 text-sm leading-relaxed md:max-w-xs lg:max-w-sm">
                {ex.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Второе фото */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-52 overflow-hidden rounded-lg">
            <img
              src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/5afb370a-fab6-4d39-a163-f940417a479d.jpg"
              alt="Стенд компании на выставке"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="bg-orange-500 p-8 rounded-lg flex flex-col justify-between h-52">
            <p className="text-white/80 uppercase tracking-widest text-xs">Наша цель</p>
            <div>
              <p className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">
                Быть там, где формируются тренды мировой химической индустрии
              </p>
              <button className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-2.5 text-sm uppercase tracking-widest font-bold transition-colors duration-300">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
