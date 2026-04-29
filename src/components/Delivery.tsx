import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Порт отправления",
    description: "Закупаем продукцию напрямую у производителей. Контроль качества и упаковки ещё на месте отгрузки.",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/697d8b65-852c-4d0e-b44d-3b1187aa8ca9.jpg",
  },
  {
    number: "02",
    title: "Морская доставка",
    description: "Перевозка морскими контейнерами. Работаем с ведущими международными линиями, отслеживаем груз в режиме реального времени.",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/1f70d617-b813-46e8-84d1-ab7f86f85d9e.jpg",
  },
  {
    number: "03",
    title: "Выгрузка и таможня",
    description: "Принимаем груз в российских портах. Полное таможенное оформление, сертификация и документальное сопровождение под ключ.",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/037758e8-b55c-4928-bf9d-d9c69c4efa26.jpg",
  },
  {
    number: "04",
    title: "Отгрузка по ЖД",
    description: "Перегружаем в железнодорожные цистерны и вагоны. Охватываем всю сеть РЖД — от Калининграда до Владивостока.",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/ecf73439-b49c-48ad-8d39-4a843b2ddce0.jpg",
  },
  {
    number: "05",
    title: "Доставка клиенту",
    description: "Финальная доставка автотранспортом прямо на склад клиента. Подписание документов, сдача груза — точно в срок.",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/6352a571-df8c-4dfa-a265-95499e5ca676.jpg",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Линия-коннектор */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-[140px] left-[calc(50%+120px)] w-[calc(100%-240px)] h-px bg-gradient-to-r from-orange-500/60 to-orange-500/10 z-10" />
      )}

      <div className="flex flex-col">
        {/* Изображение */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

          {/* Номер */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
            <span className="text-6xl font-black text-white/10 leading-none select-none">
              {step.number}
            </span>
            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {index + 1}
            </span>
          </div>
        </div>

        {/* Текст */}
        <div className="bg-neutral-900 p-6 flex-1">
          <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Delivery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-neutral-950 py-20 px-6" id="delivery">
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase text-sm tracking-widest text-orange-400 mb-3">
              Как это работает
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Путь груза<br />до вашего склада
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-base leading-relaxed">
            От завода-производителя в любой точке мира — до ворот вашего предприятия. Полный контроль на каждом этапе.
          </p>
        </div>

        {/* Прогресс-бар */}
        <div className="relative h-px bg-neutral-800 mb-12 overflow-hidden">
          <motion.div
            style={{ width: lineWidth }}
            className="absolute inset-y-0 left-0 bg-orange-500"
          />
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Итог */}
        <div className="mt-12 bg-orange-500 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl md:text-2xl">Готовы начать поставки?</p>
            <p className="text-orange-100 text-sm mt-1">Рассчитаем стоимость и сроки под ваш запрос</p>
          </div>
          <button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 text-sm uppercase tracking-widest font-bold transition-colors duration-300 whitespace-nowrap shrink-0">
            Запросить прайс
          </button>
        </div>

      </div>
    </div>
  );
}
