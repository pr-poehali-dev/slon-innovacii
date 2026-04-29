export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#advantages"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Преимущества
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Поставки</h3>
                <a
                  href="#catalog"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Каталог сырья
                </a>
                <a
                  href="#geography"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  География
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Запросить прайс
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div className="flex items-end gap-6 mt-4 sm:mt-6 lg:mt-10">
                <img
                  src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/bucket/64ec4992-014a-4643-9796-69df6bf5ebab.png"
                  alt="Пионер Трейд логотип"
                  className="h-14 sm:h-16 w-auto object-contain mb-2"
                  style={{ mixBlendMode: "screen" }}
                />
                <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] text-white font-bold tracking-tight">
                  ПИОНЕР<br />ТРЕЙД
                </h1>
              </div>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ООО Пионер Трейд</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}