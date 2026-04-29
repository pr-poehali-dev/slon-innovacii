import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import LogoImage from "@/components/ui/LogoImage";

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

  // 3D-наклон по мыши
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-12, 12]), { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const letters1 = "ПИОНЕР".split("");
  const letters2 = "ТРЕЙД".split("");

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Фон с параллаксом */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/files/6ad1c92f-4385-45ab-a453-4d8692d0d8fe.jpg"
          alt="Промышленный порт с грузами"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Контент */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        className="relative z-10 text-center text-white px-6"
      >
        {/* Логотип */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LogoImage
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/bucket/64ec4992-014a-4643-9796-69df6bf5ebab.png"
            alt="ГК Пионер Трейд"
            className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Группа компаний · основана в 2007 году
        </motion.p>

        {/* Объёмный заголовок с 3D-наклоном */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="mb-8 cursor-default"
        >
          {/* ПИОНЕР */}
          <div className="flex justify-center gap-1 md:gap-2">
            {letters1.map((l, i) => (
              <motion.span
                key={i}
                className="inline-block text-6xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  textShadow: "2px 4px 0px rgba(0,0,0,0.4), 4px 8px 0px rgba(0,0,0,0.25), 6px 12px 20px rgba(0,0,0,0.3)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                }}
                initial={{ opacity: 0, y: -60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.08, color: "#f97316", transition: { duration: 0.2 } }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* ТРЕЙД — со смещением и другим цветом */}
          <div className="flex justify-center gap-1 md:gap-2 -mt-2 md:-mt-4">
            {letters2.map((l, i) => (
              <motion.span
                key={i}
                className="inline-block text-6xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight select-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  textShadow: "2px 4px 0px rgba(249,115,22,0.5), 4px 8px 0px rgba(249,115,22,0.25), 6px 12px 20px rgba(0,0,0,0.4)",
                  WebkitTextStroke: "1px rgba(249,115,22,0.3)",
                  color: "#fff",
                }}
                initial={{ opacity: 0, y: 60, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.08, color: "#f97316", transition: { duration: 0.2 } }}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.div>

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