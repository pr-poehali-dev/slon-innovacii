import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const services = [
  { icon: "Plane", label: "Экспедирование грузов" },
  { icon: "Truck", label: "Транспортировка" },
  { icon: "ClipboardCheck", label: "Таможенное оформление" },
  { icon: "Ship", label: "Морские перевозки" },
  { icon: "PackageOpen", label: "Доставка «от двери до двери»" },
];

export default function WhyUs() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/files/c92a8c73-08ba-48e9-b17d-7040343f1259.jpg"
          alt="Контейнеровоз в порту"
          className="w-full h-full object-cover"
        />
        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Левая часть — заголовок */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start"
        >
          <h2
            className="text-white font-black uppercase leading-none select-none"
            style={{ fontSize: "clamp(5rem, 14vw, 11rem)", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.05em" }}
          >
            Почему мы?
          </h2>
        </motion.div>

        {/* Правая часть — список услуг */}
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 group"
            >
              {/* Стрелка */}
              <div className="flex items-center gap-2 text-orange-400 shrink-0">
                <div className="w-8 h-[2px] bg-orange-400" />
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M1 1L9 8L1 15" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Иконка */}
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/30 transition-colors duration-300">
                <Icon name={service.icon} size={22} className="text-white" />
              </div>

              {/* Название */}
              <span className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide">
                {service.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
