import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Поликарбонат&теплицы</h3>
            <p className="text-primary-foreground/80">
              Эксперты в сфере тепличного хозяйства в Саранске
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">г. Саранск, ул. Рабочая 95а</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:79376722082" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +7 (937) 672-20-82
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:Ooo.tri@inbox.ru" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ooo.tri@inbox.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p>Пн-Пт: 9:00-17:00</p>
                <p>Сб: 9:00-14:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Поликарбонат&теплицы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
