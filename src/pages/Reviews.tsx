import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Reviews = () => {
  const reviews = [
    {
      name: 'Сергей Иванов',
      date: 'Октябрь 2024',
      rating: 5,
      text: 'Отличная теплица! Купил арочную 3×6 метров. Качество материалов на высоте, поликарбонат толстый, каркас прочный. Ребята помогли с доставкой и дали подробные рекомендации по установке. Очень доволен покупкой!'
    },
    {
      name: 'Мария Петрова',
      date: 'Сентябрь 2024',
      rating: 5,
      text: 'Заказывала теплицу "Капля" для дачи. Менеджеры грамотно проконсультировали, помогли выбрать размер. Доставили точно в срок. Муж собрал за день. Уже посадили помидоры, растут отлично!'
    },
    {
      name: 'Александр Смирнов',
      date: 'Август 2024',
      rating: 5,
      text: 'Беру уже не первую теплицу в этом магазине. Цены адекватные, качество всегда стабильное. В этот раз взял усиленную арочную под снеговые нагрузки. Рекомендую!'
    },
    {
      name: 'Елена Васильева',
      date: 'Июль 2024',
      rating: 5,
      text: 'Купили поликарбонат для замены старого покрытия. Взяли 6мм цветной. Отличное качество, хорошо режется, легко монтируется. Спасибо за консультацию по выбору!'
    },
    {
      name: 'Дмитрий Козлов',
      date: 'Июнь 2024',
      rating: 5,
      text: 'Заказывал беседку "Пион" для дачи. Быстро доставили, все детали на месте. Собирал с другом за полдня. Качество отличное, выглядит красиво. Жена довольна!'
    },
    {
      name: 'Ольга Николаева',
      date: 'Май 2024',
      rating: 5,
      text: 'Прекрасный магазин! Вежливое обслуживание, качественный товар, адекватные цены. Теплица стоит уже второй сезон — никаких нареканий. Урожай огурцов превзошел все ожидания!'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Отзывы наших клиентов
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Более 1000 довольных покупателей за 10 лет работы
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Станьте нашим клиентом</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к тысячам довольных покупателей теплиц в Саранске
          </p>
          <Button size="lg" asChild>
            <a href="tel:79376722082">Получить консультацию</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
