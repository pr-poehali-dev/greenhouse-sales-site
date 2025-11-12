import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Саранск, ул. Рабочая 95а
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <a 
                      href="tel:79376722082" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +7 (937) 672-20-82
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:Ooo.tri@inbox.ru" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Ooo.tri@inbox.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Понедельник - Пятница: 9:00 - 17:00</p>
                      <p>Суббота: 9:00 - 14:00</p>
                      <p>Воскресенье: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Как нас найти</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-6">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Наш магазин находится в промышленной зоне Саранска на ул. Рабочая. 
                  Удобный подъезд, есть парковка для легковых автомобилей и грузовиков.
                </p>
                <Button className="w-full" asChild>
                  <a 
                    href="https://yandex.ru/maps/?text=Саранск, ул. Рабочая 95а" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Открыть на карте
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Как сделать заказ?</h3>
                  <p className="text-muted-foreground">
                    Позвоните нам по телефону +7 (937) 672-20-82 или напишите на почту. 
                    Наш специалист поможет подобрать теплицу и оформит заказ.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Есть ли доставка?</h3>
                  <p className="text-muted-foreground">
                    Да, доставляем по Саранску и всей Мордовии. Бесплатная доставка при заказе от 50 000 руб.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Какая гарантия на теплицы?</h3>
                  <p className="text-muted-foreground">
                    Предоставляем гарантию на все материалы. Конкретные сроки зависят от типа теплицы и производителя.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Можно ли приехать и посмотреть?</h3>
                  <p className="text-muted-foreground">
                    Конечно! Приезжайте в наш офис по адресу ул. Рабочая 95а. Лучше предварительно позвонить, 
                    чтобы наш специалист был на месте.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Позвоните нам прямо сейчас и получите профессиональную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:79376722082">+7 (937) 672-20-82</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <a href="mailto:Ooo.tri@inbox.ru">Написать на почту</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
