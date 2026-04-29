interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/bucket/logos/pioneer-trade-transparent.png"
            alt="Пионер Трейд логотип"
            className="h-8 w-auto object-contain"
          />
        </div>
        <nav className="flex gap-8">
          <a href="#about" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            О компании
          </a>
          <a href="#contact" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}