import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Импортные поставки",
    description: "Закупаем химическую продукцию у ведущих мировых производителей и организуем доставку морским путём",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/19963341-40a0-4e42-b252-bac1d16af55d.jpg",
  },
  {
    number: "02",
    title: "Погрузка на платформы",
    description: "Контейнеры с продукцией перегружаются на железнодорожные платформы для отправки по всей России",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/1b3f0b0f-ccce-4a53-89ee-8617c88884eb.jpg",
  },
  {
    number: "03",
    title: "Доставка по ЖД",
    description: "Железнодорожный транспорт обеспечивает надёжную и своевременную доставку груза в любую точку страны",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/e5dd06cc-83f1-4ce6-a6b0-ac871d294ab4.jpg",
  },
  {
    number: "04",
    title: "Вывоз покупателю",
    description: "Финальная доставка продукции непосредственно на склад покупателя с полным документальным сопровождением",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/7c191a2e-2e18-4b2e-a911-5366d7159253.jpg",
  },
  {
    number: "05",
    title: "Заключение договора",
    description: "Ведём переговоры, заключаем договора и выстраиваем долгосрочные партнёрские отношения с клиентами",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/2b482281-cf02-4faa-97d8-e3c69a8250bc.jpg",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 overflow-hidden`}
    >
      {/* Изображение */}
      <div className="md:w-3/5 relative overflow-hidden h-72 md:h-auto">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
      </div>

      {/* Текст */}
      <div className={`md:w-2/5 bg-neutral-900 flex flex-col justify-center px-10 py-12 relative`}>
        <div
          className="absolute top-6 right-8 text-7xl font-black text-neutral-800 select-none leading-none"
        >
          {step.number}
        </div>
        <p className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-3">
          Шаг {step.number}
        </p>
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
          {step.title}
        </h3>
        <p className="text-neutral-400 text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <motion.p
          className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Как мы работаем
        </motion.p>
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          От поставщика<br />до покупателя
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
