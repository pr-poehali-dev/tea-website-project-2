import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">О чае</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Чай - это не просто напиток. Это культура, философия и искусство, которое объединяет миллионы людей по всему миру
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Что такое чай?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Чай - это напиток, получаемый путём заваривания листьев чайного куста (Camellia sinensis). 
                Все основные виды чая - зелёный, чёрный, белый, улун и пуэр - производятся из одного и того же 
                растения, но различаются методами обработки листьев.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                История чая насчитывает более 5000 лет, начавшись в древнем Китае и распространившись по всему миру. 
                Сегодня чай является вторым по популярности напитком в мире после воды.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary">
                    <Icon name="Leaf" size={40} />
                  </div>
                  <h3 className="text-xl font-bold">Одно растение</h3>
                  <p className="text-muted-foreground text-sm">
                    Все виды чая происходят из одного растения - Camellia sinensis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary">
                    <Icon name="Sparkles" size={40} />
                  </div>
                  <h3 className="text-xl font-bold">Разная обработка</h3>
                  <p className="text-muted-foreground text-sm">
                    Различия во вкусе и свойствах зависят от способа обработки листьев
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary">
                    <Icon name="Globe" size={40} />
                  </div>
                  <h3 className="text-xl font-bold">Мировая культура</h3>
                  <p className="text-muted-foreground text-sm">
                    Чай пьют во всех уголках планеты, в каждой стране - свои традиции
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Основные виды чая</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-green-600 flex-shrink-0">
                    <Icon name="Leaf" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Зелёный чай</h3>
                    <p className="text-muted-foreground">
                      Минимальная обработка, сохраняет свежий вкус и максимум полезных веществ
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-amber-800 flex-shrink-0">
                    <Icon name="Coffee" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Чёрный чай</h3>
                    <p className="text-muted-foreground">
                      Полная ферментация придаёт насыщенный вкус и тёмный цвет настоя
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-slate-400 flex-shrink-0">
                    <Icon name="CloudSun" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Белый чай</h3>
                    <p className="text-muted-foreground">
                      Деликатная обработка молодых почек создаёт нежный и изысканный вкус
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-teal-600 flex-shrink-0">
                    <Icon name="Wind" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Улун</h3>
                    <p className="text-muted-foreground">
                      Полуферментированный чай сочетает свежесть зелёного и глубину чёрного
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-red-900 flex-shrink-0">
                    <Icon name="Mountain" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Пуэр</h3>
                    <p className="text-muted-foreground">
                      Постферментированный чай с уникальным землистым вкусом и выдержкой
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Чайная культура</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Китай</h3>
                  <p className="text-muted-foreground">
                    Родина чая и чайной церемонии гунфу ча. Здесь чай - это медитация, искусство и способ достижения гармонии.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Япония</h3>
                  <p className="text-muted-foreground">
                    Японская чайная церемония - это духовная практика дзен-буддизма, где каждое движение имеет глубокий смысл.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Англия</h3>
                  <p className="text-muted-foreground">
                    Традиция пятичасового чая (five o'clock tea) стала символом британской культуры и аристократизма.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Индия</h3>
                  <p className="text-muted-foreground">
                    Масала-чай с молоком и специями - национальный напиток, который пьют на каждом углу.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
