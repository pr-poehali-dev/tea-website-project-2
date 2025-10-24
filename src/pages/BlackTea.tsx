import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlackTea() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-amber-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-amber-800 flex justify-center mb-4">
              <Icon name="Coffee" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900">Чёрный чай</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Насыщенный и ароматный чай с полной ферментацией листьев
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
                  <h2 className="text-3xl font-bold mb-6">Что такое чёрный чай?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Чёрный чай проходит полную ферментацию, в отличие от зелёного. После сбора листья завяливают, 
                    скручивают и оставляют на длительное окисление. Это придаёт чаю характерный тёмный цвет, 
                    насыщенный вкус и крепкий аромат.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    В Китае чёрный чай называют "красным" (红茶) из-за цвета настоя. Это самый популярный 
                    вид чая в Европе и один из основных экспортных товаров Индии и Шри-Ланки.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-amber-800">
                        <Icon name="CircleDot" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Полная ферментация</h3>
                      <p className="text-muted-foreground text-sm">
                        Листья полностью окисляются, приобретая тёмный цвет и насыщенный вкус
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-amber-800">
                        <Icon name="Zap" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Высокое содержание кофеина</h3>
                      <p className="text-muted-foreground text-sm">
                        Бодрит и повышает концентрацию внимания
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-amber-800">
                        <Icon name="Clock" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Долгое хранение</h3>
                      <p className="text-muted-foreground text-sm">
                        Благодаря ферментации может храниться годами без потери качества
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="varieties" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Популярные сорта чёрного чая</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Дарджилинг</h3>
                      <p className="text-muted-foreground mb-2">
                        "Шампанское среди чаёв" из индийского региона Дарджилинг у подножия Гималаев. 
                        Собирается в трёх флешах (весенний, летний, осенний), каждый с уникальным вкусом.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: цветочный, мускатный, с фруктовыми нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Ассам</h3>
                      <p className="text-muted-foreground mb-2">
                        Крепкий индийский чай из одноимённого региона. Идеален для завтрака, 
                        часто используется в английских смесях. Отлично сочетается с молоком.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: солодовый, насыщенный, слегка сладковатый</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Цейлонский чай</h3>
                      <p className="text-muted-foreground mb-2">
                        Чай со Шри-Ланки (бывший Цейлон). Яркий, освежающий, с характерной терпкостью. 
                        Выращивается на разных высотах, что влияет на вкусовой профиль.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: яркий, терпкий, с цитрусовыми нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Кимун (祁门红茶)</h3>
                      <p className="text-muted-foreground mb-2">
                        Премиальный китайский чёрный чай из провинции Аньхой. Один из компонентов 
                        знаменитого English Breakfast. Имеет винный аромат и дымные нотки.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: винный, фруктовый, с дымными нотами</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Эрл Грей</h3>
                      <p className="text-muted-foreground mb-2">
                        Классическая английская смесь чёрного чая с маслом бергамота. Назван в честь 
                        графа Чарльза Грея. Один из самых узнаваемых ароматизированных чаёв.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: цитрусовый, ароматный, освежающий</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Лапсанг Сушонг (正山小种)</h3>
                      <p className="text-muted-foreground mb-2">
                        Уникальный копчёный чай из Китая. Листья сушат над сосновым дымом, 
                        что придаёт характерный дымный аромат, похожий на виски или бекон.
                      </p>
                      <p className="text-sm text-amber-700 font-medium">Вкус: дымный, смолистый, древесный</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Польза чёрного чая</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Zap" className="text-yellow-500" size={24} />
                        <h3 className="text-lg font-semibold">Энергия и бодрость</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Высокое содержание кофеина бодрит и улучшает концентрацию внимания
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
                        Флавоноиды снижают риск сердечно-сосудистых заболеваний и инсульта
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
                        Теафлавины защищают клетки от повреждений и замедляют старение
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Activity" className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold">Улучшение пищеварения</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Танины помогают пищеварению и обладают противовоспалительным эффектом
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="TrendingDown" className="text-purple-500" size={24} />
                        <h3 className="text-lg font-semibold">Снижение холестерина</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Регулярное употребление помогает снизить уровень "плохого" холестерина
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Smile" className="text-orange-500" size={24} />
                        <h3 className="text-lg font-semibold">Здоровье полости рта</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Полифенолы подавляют рост бактерий и предотвращают заболевания дёсен
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="brewing" className="space-y-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Как правильно заваривать чёрный чай</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Температура воды: 90-100°C</h4>
                        <p className="text-sm text-muted-foreground">
                          Чёрный чай заваривают кипятком или водой, остывшей 1-2 минуты после кипения.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Количество: 2-3 грамма на 200 мл</h4>
                        <p className="text-sm text-muted-foreground">
                          Одна чайная ложка на чашку. Для крепкого чая можно увеличить до 5 грамм.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Время заваривания: 3-5 минут</h4>
                        <p className="text-sm text-muted-foreground">
                          3 минуты для средней крепости, 5 минут для насыщенного вкуса. Можно заваривать 2-3 раза.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Посуда: фарфоровый или глиняный чайник</h4>
                        <p className="text-sm text-muted-foreground">
                          Фарфор идеален для чёрного чая, глина хорошо держит тепло.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="Coffee" className="text-amber-700 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-amber-900">Совет</h4>
                        <p className="text-sm text-amber-800">
                          Чёрный чай отлично сочетается с молоком, лимоном, мёдом или специями (корица, кардамон). 
                          Идеален для утреннего чаепития и английских традиций five o'clock tea.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-amber-800 hover:bg-amber-900">
                    Купить чёрный чай
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
