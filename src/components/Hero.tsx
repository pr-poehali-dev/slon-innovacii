import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";



export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);







  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Фон с параллаксом */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/6bffbf22-3e12-409c-a4dd-8e3bf89a16b4.jpg"
          alt="Промышленный порт с грузами"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Дневное небо */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to bottom, rgba(30,100,200,0.55) 0%, rgba(80,160,230,0.35) 35%, rgba(180,220,255,0.15) 60%, rgba(5,10,20,0.6) 100%)"
      }} />
      {/* Солнечный блик */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse 60% 25% at 70% 30%, rgba(255,255,220,0.22) 0%, transparent 70%)"
      }} />

      {/* Контент */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        className="relative z-10 text-center text-white px-6"
      >
        <motion.p
          className="uppercase tracking-[0.3em] text-sm md:text-base mb-8 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Группа компаний · основана в 2007 году
        </motion.p>


        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Один из крупнейших поставщиков продукции промышленной химии в России. Более 18 лет — надёжный партнёр для клиентов и поставщиков.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 uppercase tracking-widest text-sm font-bold transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Запросить прайс
        </motion.a>
      </motion.div>
    </div>
  );
}