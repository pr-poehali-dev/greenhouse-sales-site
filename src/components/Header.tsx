import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Поликарбонат&теплицы
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              О компании
            </Link>
            <Link to="/delivery" className="text-foreground hover:text-primary transition-colors font-medium">
              Доставка
            </Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors font-medium">
              Отзывы
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:79376722082" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden lg:block font-semibold">+7 (937) 672-20-82</span>
            </a>
            <Button asChild>
              <a href="tel:79376722082">Позвонить</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
