import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
              О компании
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Мы — магазин "Поликарбонат&теплицы" в Саранске, эксперты в сфере тепличного хозяйства
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Более 10 лет мы помогаем садоводам и фермерам Мордовии выращивать здоровые и обильные урожаи. 
                  За это время мы накопили огромный опыт в подборе и установке теплиц, который позволяет нам 
                  предлагать нашим клиентам только лучшие решения.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Наши специалисты помогут вам подобрать оптимальную теплицу и дадут профессиональные консультации 
                  по её установке и эксплуатации. Мы работаем только с проверенными поставщиками и гарантируем 
                  качество всех материалов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">10+ лет опыта</h3>
                <p className="text-muted-foreground">
                  Работаем на рынке с 2014 года
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">1000+ клиентов</h3>
                <p className="text-muted-foreground">
                  Довольных покупателей по всей Мордовии
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  100% гарантия на все материалы
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Лучшие цены</h3>
                <p className="text-muted-foreground">
                  Работаем напрямую с производителями
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Широкий ассортимент теплиц</h3>
                      <p className="text-muted-foreground">
                        Арочные, каплевидные, домиком — любые формы и размеры для ваших задач
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Качественный поликарбонат</h3>
                      <p className="text-muted-foreground">
                        Различная толщина (4мм, 6мм, 8мм) и цветовые решения
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Профессиональная консультация</h3>
                      <p className="text-muted-foreground">
                        Поможем подобрать оптимальное решение и расскажем о правильной эксплуатации
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Доставка и помощь в установке</h3>
                      <p className="text-muted-foreground">
                        Оперативная доставка по Мордовии и консультации по монтажу
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
