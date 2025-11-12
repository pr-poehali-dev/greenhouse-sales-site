import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Доставка и оплата
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Доставим вашу теплицу быстро и в сохранности
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Truck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Доставка по Саранску</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Бесплатная доставка при заказе от 50 000 руб. В остальных случаях стоимость рассчитывается индивидуально
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Доставка по Мордовии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Осуществляем доставку по всей Республике Мордовия. Стоимость зависит от расстояния и объема груза
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Забрать товар можно самостоятельно по адресу: г. Саранск, ул. Рабочая 95а
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Условия доставки</h2>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Сроки доставки</h3>
                      <p className="text-muted-foreground">
                        По Саранску — 1-2 рабочих дня. По Мордовии — 2-5 рабочих дней в зависимости от удаленности
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Разгрузка</h3>
                      <p className="text-muted-foreground">
                        Водитель помогает с разгрузкой на уровне кузова. Занос на участок оплачивается отдельно
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Проверка при получении</h3>
                      <p className="text-muted-foreground">
                        Обязательно проверьте комплектность и целостность товара при получении в присутствии водителя
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Консультация по монтажу</h3>
                      <p className="text-muted-foreground">
                        Наши специалисты дадут рекомендации по установке теплицы при доставке
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-8">Способы оплаты</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Наличными</h3>
                      <p className="text-muted-foreground">
                        Оплата наличными при получении товара или в нашем офисе
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Банковский перевод</h3>
                      <p className="text-muted-foreground">
                        Безналичная оплата для юридических лиц и ИП
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Картой</h3>
                      <p className="text-muted-foreground">
                        Оплата банковской картой в офисе или при доставке
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Позвоните нам, и мы рассчитаем стоимость доставки для вашего заказа
          </p>
          <Button size="lg" asChild>
            <a href="tel:79376722082">+7 (937) 672-20-82</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Delivery;
