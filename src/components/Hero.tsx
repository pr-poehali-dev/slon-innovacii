import { useScroll, useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";



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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [18, -18]), { stiffness: 80, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-18, 18]), { stiffness: 80, damping: 18 });
  const lightX = useSpring(useTransform(mouseX, [-600, 600], [0, 100]), { stiffness: 80, damping: 18 });
  const lightY = useSpring(useTransform(mouseY, [-300, 300], [0, 100]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);





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

        {/* Логотип 3D */}
        <motion.div
          className="mb-8 flex justify-center"
          style={{ perspective: 900 }}
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Тень под логотипом */}
            <motion.div
              style={{ rotateX, rotateY }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full"
              animate={{ scaleX: [1, 0.85, 1], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />

            {/* Световой блик */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none z-10"
              style={{
                background: useTransform(
                  [lightX, lightY],
                  ([lx, ly]) =>
                    `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.25) 0%, transparent 60%)`
                ),
              }}
            />

            <img
              src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/bucket/logos/pioneer-trade-transparent.png"
              alt="ГК Пионер Трейд"
              className="h-36 md:h-56 lg:h-72 w-auto object-contain relative z-[1]"
              style={{
                filter: "contrast(1.25) brightness(1.35) saturate(1.6) drop-shadow(0 0 18px rgba(249,115,22,0.55)) drop-shadow(0 24px 48px rgba(0,0,0,0.7))",
              }}
            />
          </motion.div>
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