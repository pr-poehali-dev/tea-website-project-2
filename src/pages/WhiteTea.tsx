import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WhiteTea() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-slate-400 flex justify-center mb-4">
              <Icon name="CloudSun" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-700">Белый чай</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Редкий и изысканный чай из молодых почек с нежнейшим вкусом
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="about" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">О чае</TabsTrigger>
                <TabsTrigger value="varieties">Сорта</TabsTrigger>
                <TabsTrigger value="benefits">Польза</TabsTrigger>
                <TabsTrigger value="brewing">Заваривание</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">Что такое белый чай?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Белый чай - самый деликатный и наименее обработанный вид чая. Производится исключительно 
                    из молодых почек и верхних листьев чайного куста, покрытых серебристым пушком. 
                    Собирается вручную всего несколько дней в году ранней весной.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Название "белый чай" происходит от серебристо-белых ворсинок на нераспустившихся почках. 
                    После сбора листья просто завяливают и высушивают на солнце, минимизируя обработку. 
                    Это сохраняет максимум полезных веществ и создаёт нежнейший вкус.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-slate-400">
                        <Icon name="Feather" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Минимальная обработка</h3>
                      <p className="text-muted-foreground text-sm">
                        Только завяливание и сушка - никакого скручивания и ферментации
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-slate-400">
                        <Icon name="Gem" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Редкость и ценность</h3>
                      <p className="text-muted-foreground text-sm">
                        Собирается вручную несколько дней в году из отборных почек
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-slate-400">
                        <Icon name="Sparkles" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Нежный вкус</h3>
                      <p className="text-muted-foreground text-sm">
                        Сладкий, цветочный, едва уловимый - настоящая элегантность
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="varieties" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Популярные сорта белого чая</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Бай Хао Инь Чжэнь (白毫银针, Серебряные иглы)</h3>
                      <p className="text-muted-foreground mb-2">
                        Самый премиальный белый чай, производится только из почек. Собирается в течение 
                        двух дней ранней весной. Почки покрыты серебристым пушком, напоминающим иглы.
                      </p>
                      <p className="text-sm text-slate-600 font-medium">Вкус: сладкий, медовый, с цветочными нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Бай Му Дань (白牡丹, Белый пион)</h3>
                      <p className="text-muted-foreground mb-2">
                        Состоит из почек и верхних двух листьев. Более доступный, чем Серебряные иглы, 
                        но с более насыщенным вкусом. Листья напоминают цветки пиона.
                      </p>
                      <p className="text-sm text-slate-600 font-medium">Вкус: фруктовый, цветочный, с нотами дыни</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Шоу Мэй (寿眉, Брови старца)</h3>
                      <p className="text-muted-foreground mb-2">
                        Производится из более зрелых листьев, собранных позже в сезоне. 
                        Имеет более тёмный цвет и насыщенный вкус по сравнению с другими белыми чаями.
                      </p>
                      <p className="text-sm text-slate-600 font-medium">Вкус: более насыщенный, фруктовый, с древесными нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-700">Гун Мэй (贡眉, Подношение бровей)</h3>
                      <p className="text-muted-foreground mb-2">
                        Похож на Шоу Мэй, но более высокого качества. Раньше поставлялся императорскому двору. 
                        Листья длинные и изогнутые, напоминающие брови.
                      </p>
                      <p className="text-sm text-slate-600 font-medium">Вкус: сладкий, фруктовый, с лёгкой терпкостью</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Польза белого чая</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-blue-500" size={24} />
                        <h3 className="text-lg font-semibold">Максимум антиоксидантов</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Самое высокое содержание антиоксидантов среди всех видов чая благодаря минимальной обработке
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Sparkles" className="text-pink-500" size={24} />
                        <h3 className="text-lg font-semibold">Красота и молодость кожи</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Замедляет старение, защищает от UV-лучей, улучшает эластичность кожи
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Heart" className="text-red-500" size={24} />
                        <h3 className="text-lg font-semibold">Здоровье сердца</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Снижает давление, укрепляет сосуды, уменьшает риск инфаркта и инсульта
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="TrendingDown" className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold">Снижение веса</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ускоряет метаболизм и способствует расщеплению жировых клеток
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Brain" className="text-purple-500" size={24} />
                        <h3 className="text-lg font-semibold">Защита мозга</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Снижает риск нейродегенеративных заболеваний (Альцгеймер, Паркинсон)
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Smile" className="text-yellow-500" size={24} />
                        <h3 className="text-lg font-semibold">Здоровье зубов</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Антибактериальные свойства защищают от кариеса и заболеваний дёсен
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="brewing" className="space-y-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Как правильно заваривать белый чай</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Температура воды: 70-80°C</h4>
                        <p className="text-sm text-muted-foreground">
                          Горячая вода разрушит нежный вкус. Дайте кипятку остыть 5-7 минут.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Количество: 3-5 грамм на 150 мл</h4>
                        <p className="text-sm text-muted-foreground">
                          Белый чай объёмный, нужно больше листьев. Примерно 2 чайные ложки.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Время заваривания: 3-7 минут</h4>
                        <p className="text-sm text-muted-foreground">
                          Первый пролив 3-4 минуты. Качественный белый чай выдерживает 5-7 заварок с увеличением времени.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Посуда: стеклянный или фарфоровый чайник</h4>
                        <p className="text-sm text-muted-foreground">
                          Стекло позволяет наблюдать красоту раскрывающихся почек.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="Info" className="text-blue-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-blue-900">Важно знать</h4>
                        <p className="text-sm text-blue-800">
                          Белый чай требует терпения и внимания. Не спешите - дайте почкам полностью раскрыться. 
                          Пейте без добавок, чтобы насладиться тонким естественным вкусом. Лучшее время - 
                          утро или дневное чаепитие в спокойной обстановке.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-slate-500 hover:bg-slate-600">
                    Купить белый чай
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
}
