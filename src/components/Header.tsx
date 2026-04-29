import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const location = useLocation();
  const isCatalog = location.pathname === "/catalog";

  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/7dae44f0-6f80-4467-8e57-681afb14cfd8/bucket/logos/pioneer-trade-transparent.png"
            alt="Пионер Трейд логотип"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <nav className="flex gap-8">
          <a
            href={isCatalog ? "/" : "#about"}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О компании
          </a>
          <Link
            to="/catalog"
            className={`transition-colors duration-300 uppercase text-sm ${isCatalog ? "text-orange-400" : "text-white hover:text-orange-400"}`}
          >
            Каталог
          </Link>
          <a
            href={isCatalog ? "/" : "#contact"}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}