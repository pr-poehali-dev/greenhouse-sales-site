import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const Index = () => {
  const greenhouseTypes = [
    {
      name: 'Стрелка',
      profile: '25/25',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/bba25ef3-2715-4d98-93e9-0b27d93aa424.jpg'
    },
    {
      name: 'Домик',
      profile: '20/40',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/9be2017b-b645-45b6-b7d5-126cd1f5fb1c.jpg'
    },
    {
      name: 'Кремлёвская сказка',
      profile: '25/25',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/bba25ef3-2715-4d98-93e9-0b27d93aa424.jpg'
    },
    {
      name: 'Урожайная',
      profile: '25/25',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/9be2017b-b645-45b6-b7d5-126cd1f5fb1c.jpg'
    },
    {
      name: 'Оптима',
      profile: '20/30',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/bba25ef3-2715-4d98-93e9-0b27d93aa424.jpg'
    },
    {
      name: 'Волжанка',
      profile: '20/40',
      width: '3м',
      step: '1м/0,65м',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/9be2017b-b645-45b6-b7d5-126cd1f5fb1c.jpg'
    }
  ];

  const polycarbonate = [
    { name: '4мм', type: 'Премиум' },
    { name: '6мм', type: 'Премиум' },
    { name: '6мм цветной', type: 'Премиум' },
    { name: '8мм', type: 'Премиум' },
    { name: '8мм цветной', type: 'Премиум' }
  ];

  const accessories = [
    'Торцевые вставки 4мм',
    'Торцевые вставки 6мм',
    'Торцевые вставки 8мм',
    'Соединительный профиль 4мм',
    'Соединительный профиль 6мм',
    'Соединительный профиль 8мм',
    'Термошайбы цветные',
    'Термошайбы прозрачные'
  ];

  const gazebos = [
    {
      name: 'Пион',
      description: 'Сварной элемент беседки - 3 шт; соединительные перемычки - 6 шт; Доска 25×200×2000 - 12 шт; Поликарбонат - 6 метров. Каркас: оцинкованная труба'
    },
    {
      name: 'Астра',
      description: 'Размер: ширина по основанию 1,73 м, ширина по верху 2,43 м, высота 2,02 м, длина 1,9 м. Каркас: оцинкованная труба 40×20 мм'
    }
  ];

  const carports = [
    {
      name: 'Автонавес',
      profile: '25/25',
      width: '3,5м',
      height: '2,6м',
      arcStep: '1м',
      description: 'Дуги двойные разъемные',
      lengths: ['4м', '6м', '8м', '10м'],
      image: 'https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/bba25ef3-2715-4d98-93e9-0b27d93aa424.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Теплицы и поликарбонат в Саранске
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Более 10 лет помогаем садоводам и фермерам Мордовии выращивать здоровые и обильные урожаи
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="tel:79376722082">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#catalog">Смотреть каталог</a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия качества</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/07213bc3-ac38-408f-b976-5536284732e0/files/9be2017b-b645-45b6-b7d5-126cd1f5fb1c.jpg"
                alt="Теплицы"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Качественные материалы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Используем только проверенный поликарбонат и надежные металлические каркасы
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Профессиональная консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наши специалисты помогут подобрать оптимальную теплицу под ваши задачи
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Доставка и установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Оперативная доставка по Мордовии и помощь в установке теплиц
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Каталог продукции</h2>
          
          <Tabs defaultValue="greenhouses" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4">
              <TabsTrigger value="greenhouses">Теплицы</TabsTrigger>
              <TabsTrigger value="polycarbonate">Поликарбонат</TabsTrigger>
              <TabsTrigger value="gazebos">Беседки</TabsTrigger>
              <TabsTrigger value="carports">Автонавесы</TabsTrigger>
            </TabsList>

            <TabsContent value="greenhouses" className="mt-8">
              <div className="mb-6 text-center">
                <Badge variant="default" className="text-base px-4 py-2">Все теплицы с оцинкованным каркасом</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {greenhouseTypes.map((greenhouse, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={greenhouse.image}
                      alt={greenhouse.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{greenhouse.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Профиль {greenhouse.profile}</Badge>
                        <Badge variant="outline">Ширина {greenhouse.width}</Badge>
                        <Badge variant="outline">Шаг {greenhouse.step}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">Доступные длины:</p>
                      <div className="flex flex-wrap gap-2">
                        {greenhouse.lengths.map((length) => (
                          <Badge key={length} variant="secondary">{length}</Badge>
                        ))}
                      </div>
                      <Button className="w-full mt-6" asChild>
                        <a href="tel:79376722082">Узнать цену</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="polycarbonate" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Поликарбонат</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {polycarbonate.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span className="font-medium">{item.name}</span>
                          <Badge>{item.type}</Badge>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" asChild>
                      <a href="tel:79376722082">Заказать</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Комплектующие</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {accessories.map((item, index) => (
                        <div key={index} className="flex items-start p-3 bg-muted rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" asChild>
                      <a href="tel:79376722082">Заказать</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gazebos" className="mt-8">
              <div className="mb-6 text-center">
                <Badge variant="default" className="text-base px-4 py-2">Все беседки с оцинкованным каркасом</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {gazebos.map((gazebo, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{gazebo.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{gazebo.description}</p>
                      <Button className="w-full" asChild>
                        <a href="tel:79376722082">Узнать цену</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="carports" className="mt-8">
              <div className="mb-6 text-center">
                <Badge variant="default" className="text-base px-4 py-2">Оцинкованный каркас</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {carports.map((carport, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={carport.image}
                      alt={carport.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{carport.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-2">{carport.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary">Труба {carport.profile}</Badge>
                        <Badge variant="outline">Ширина {carport.width}</Badge>
                        <Badge variant="outline">Высота {carport.height}</Badge>
                        <Badge variant="outline">Шаг дуг {carport.arcStep}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">Доступные длины:</p>
                      <div className="flex flex-wrap gap-2">
                        {carport.lengths.map((length) => (
                          <Badge key={length} variant="secondary">{length}</Badge>
                        ))}
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <a href="tel:79376722082">Заказать</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы заказать теплицу?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Позвоните нам или оставьте заявку — мы свяжемся с вами в течение 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:79376722082">+7 (937) 672-20-82</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="mailto:Ooo.tri@inbox.ru">Написать на почту</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;