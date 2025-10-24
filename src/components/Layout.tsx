import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О чае" },
    { path: "/history", label: "История" },
    { path: "/green-tea", label: "Зелёный чай" },
    { path: "/black-tea", label: "Чёрный чай" },
    { path: "/white-tea", label: "Белый чай" },
    { path: "/oolong", label: "Улун" },
    { path: "/puer", label: "Пуэр" },
    { path: "/ceremony", label: "Церемония" },
    { path: "/benefits", label: "Польза" },
    { path: "/recipes", label: "Рецепты" },
    { path: "/shop", label: "Магазин" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              🍵 <span>Мир Чая</span>
            </Link>
            <div className="hidden lg:flex gap-4 flex-wrap justify-end">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button variant="outline" size="sm" className="lg:hidden">
              Меню
            </Button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-secondary border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">🍵 Мир Чая</h3>
              <p className="text-sm text-muted-foreground">
                Откройте для себя древнее искусство чаепития и погрузитесь в культуру чая
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Виды чая</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/green-tea" className="text-muted-foreground hover:text-primary">Зелёный чай</Link></li>
                <li><Link to="/black-tea" className="text-muted-foreground hover:text-primary">Чёрный чай</Link></li>
                <li><Link to="/white-tea" className="text-muted-foreground hover:text-primary">Белый чай</Link></li>
                <li><Link to="/oolong" className="text-muted-foreground hover:text-primary">Улун</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">О чае</Link></li>
                <li><Link to="/history" className="text-muted-foreground hover:text-primary">История</Link></li>
                <li><Link to="/benefits" className="text-muted-foreground hover:text-primary">Польза</Link></li>
                <li><Link to="/ceremony" className="text-muted-foreground hover:text-primary">Церемония</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@tea-world.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Чайная, 1</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Мир Чая. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
