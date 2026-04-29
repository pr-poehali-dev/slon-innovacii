import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    number: "300+",
    label: "сотрудников",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/5a61967c-8d60-41a7-b3af-37157320b9e6.jpg",
  },
  {
    number: "1000+",
    label: "поставляемых позиций",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/27dfad22-006a-4b8d-9029-c7ea9fbed0cd.jpg",
  },
  {
    number: "",
    label: "Собственные терминалы",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/7f104eda-960f-4792-9c3a-574a580bffc1.jpg",
  },
  {
    number: "",
    label: "Подвижной состав",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/9a1ba80e-17d1-49d7-9eec-56c556961fe1.jpg",
  },
  {
    number: "",
    label: "Автомобильные перевозки",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/decec463-8528-4b26-8b69-083c17095760.jpg",
  },
  {
    number: "",
    label: "Контейнерные перевозки",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/2ab5757f-8edb-4017-9565-dde9a048cb3a.jpg",
  },
  {
    number: "",
    label: "Танк-контейнеры",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/a3c7c799-b10b-4b35-b0b2-b9c08fd948ec.jpg",
  },
  {
    number: "",
    label: "Складские помещения",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/77f0dc05-9c61-4776-addd-fedc24fe0be4.jpg",
  },
  {
    number: "",
    label: "Деловые переговоры",
    image: "https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/42e1e555-a195-4954-bc62-5233f0fc3883.jpg",
  },
];

function Card({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative overflow-hidden bg-neutral-900 cursor-default"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      </div>
      <div className="p-5">
        {item.number && (
          <p className="text-orange-500 text-3xl font-black leading-none mb-1">{item.number}</p>
        )}
        <p className="text-white text-base font-semibold uppercase tracking-wide">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default function CompanyStructure() {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-orange-500 uppercase tracking-widest text-xs font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Структура компании
        </motion.p>
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Пионер Трейд —<br />полный цикл поставок
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
