import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Oolong() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-teal-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-teal-600 flex justify-center mb-4">
              <Icon name="Wind" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-teal-700">Улун (Оолонг)</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Полуферментированный чай - золотая середина между зелёным и чёрным
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
                  <h2 className="text-3xl font-bold mb-6">Что такое улун?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Улун (乌龙, "Чёрный дракон") - это полуферментированный чай, занимающий промежуточное положение 
                    между зелёным и чёрным. Степень окисления может варьироваться от 10% до 70%, что создаёт 
                    невероятное разнообразие вкусов - от цветочных и свежих до насыщенных и медовых.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Производство улуна - сложный процесс, требующий мастерства. После сбора листья завяливают 
                    на солнце, затем встряхивают для частичного окисления краёв, останавливают ферментацию 
                    нагревом и скручивают в шарики или полоски. Это самый трудоёмкий вид чая.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-teal-600">
                        <Icon name="Percent" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Гибкая ферментация</h3>
                      <p className="text-muted-foreground text-sm">
                        От 10% до 70% окисления создаёт уникальное разнообразие вкусов
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-teal-600">
                        <Icon name="Layers" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Сложность вкуса</h3>
                      <p className="text-muted-foreground text-sm">
                        Многогранный вкус раскрывается от заварки к заварке
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-teal-600">
                        <Icon name="Repeat" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Множество проливов</h3>
                      <p className="text-muted-foreground text-sm">
                        Качественный улун выдерживает 7-10 заварок
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="varieties" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Популярные сорта улуна</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Те Гуаньинь (铁观音, Железная Богиня Милосердия)</h3>
                      <p className="text-muted-foreground mb-2">
                        Самый известный светлый улун из провинции Фуцзянь. Листья скручены в плотные шарики, 
                        при заваривании раскрываются в целые листья. Названа в честь буддийской богини.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: орхидеевый, сливочный, с цветочными нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Да Хун Пао (大红袍, Большой красный халат)</h3>
                      <p className="text-muted-foreground mb-2">
                        Легендарный утёсный улун из гор Уишань. Один из самых дорогих чаёв в мире. 
                        Насыщенная ферментация придаёт богатый минеральный вкус с древесными нотами.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: минеральный, древесный, с нотами жареных орехов</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Дун Дин (冻顶, Морозный пик)</h3>
                      <p className="text-muted-foreground mb-2">
                        Тайваньский улун средней обжарки с гор Дун Дин. Листья скручены в плотные шарики. 
                        Имеет карамельно-медовый вкус с лёгкой кислинкой.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: медовый, карамельный, с нотами спелых фруктов</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Алишань (阿里山)</h3>
                      <p className="text-muted-foreground mb-2">
                        Высокогорный тайваньский улун с гор Алишань (2000+ метров). Прохладный климат 
                        и туманы создают нежный цветочно-сливочный вкус.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: сливочный, цветочный, с нотами сирени</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Габа улун (GABA)</h3>
                      <p className="text-muted-foreground mb-2">
                        Особый улун с высоким содержанием гамма-аминомасляной кислоты (GABA). 
                        Ферментируется в бескислородной среде. Помогает снять стресс и улучшить сон.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: фруктовый, с кислинкой, освежающий</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-teal-700">Молочный улун (Най Сян Цзинь Сюань)</h3>
                      <p className="text-muted-foreground mb-2">
                        Тайваньский улун с естественным сливочно-молочным ароматом. Вопреки мифам, 
                        настоящий молочный улун не ароматизируется - вкус создаётся особыми условиями выращивания.
                      </p>
                      <p className="text-sm text-teal-600 font-medium">Вкус: сливочный, молочный, сладкий</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Польза улуна</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="TrendingDown" className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold">Эффективное снижение веса</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Полифенолы ускоряют метаболизм на 10-15% и расщепляют жиры эффективнее других чаёв
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
                        Снижает холестерин, укрепляет сосуды, нормализует давление
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Brain" className="text-purple-500" size={24} />
                        <h3 className="text-lg font-semibold">Ясность ума</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        L-теанин и кофеин улучшают концентрацию без нервозности
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-blue-500" size={24} />
                        <h3 className="text-lg font-semibold">Антиоксиданты</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Защищает клетки от старения и снижает риск онкологии
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Activity" className="text-orange-500" size={24} />
                        <h3 className="text-lg font-semibold">Контроль сахара</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Регулирует уровень глюкозы и инсулина в крови
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Sparkles" className="text-pink-500" size={24} />
                        <h3 className="text-lg font-semibold">Красота кожи</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Улучшает цвет лица, борется с акне и замедляет старение
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="brewing" className="space-y-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Как правильно заваривать улун</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Температура воды: 85-95°C</h4>
                        <p className="text-sm text-muted-foreground">
                          Светлые улуны 85-90°C, тёмные 90-95°C. Дайте кипятку остыть 2-3 минуты.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Количество: 5-7 грамм на 150 мл</h4>
                        <p className="text-sm text-muted-foreground">
                          Улун заваривают проливами, поэтому чая нужно больше - 1/3 чайника.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Время заваривания: 10-60 секунд</h4>
                        <p className="text-sm text-muted-foreground">
                          Метод пролива: первая заварка 10-15 сек, затем +5-10 сек с каждым проливом. 7-10 заварок.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Посуда: глиняный или фарфоровый чайник (гайвань)</h4>
                        <p className="text-sm text-muted-foreground">
                          Традиционно улун заваривают в гайвани (чашка с крышкой) методом пин ча.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="Info" className="text-teal-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-teal-900">Чайная церемония</h4>
                        <p className="text-sm text-teal-800">
                          Улун идеален для китайской чайной церемонии гунфу ча. Первую заварку (промывку) 
                          сливают - она "пробуждает" чай. Со второго пролива наслаждайтесь раскрывающимся вкусом. 
                          Каждая заварка дарит новые оттенки - от цветочных до медовых и древесных.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Купить улун
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
