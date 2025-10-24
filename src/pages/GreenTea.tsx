import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GreenTea() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-green-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-green-600 flex justify-center mb-4">
              <Icon name="Leaf" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-700">Зелёный чай</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Самый натуральный и полезный вид чая с минимальной обработкой листьев
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
                  <h2 className="text-3xl font-bold mb-6">Что такое зелёный чай?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Зелёный чай производится из тех же листьев, что и другие виды чая, но проходит минимальную 
                    обработку. Свежесобранные листья подвергаются тепловой обработке (пропариванию или прожарке), 
                    что останавливает процесс окисления и сохраняет зелёный цвет и свежий вкус.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Благодаря щадящей обработке в зелёном чае сохраняется максимальное количество полезных веществ, 
                    антиоксидантов и витаминов. Это делает его одним из самых полезных напитков в мире.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-green-600">
                        <Icon name="Sparkles" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Минимальная обработка</h3>
                      <p className="text-muted-foreground text-sm">
                        Листья обрабатываются паром или прожариваются сразу после сбора
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-green-600">
                        <Icon name="Heart" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Максимум пользы</h3>
                      <p className="text-muted-foreground text-sm">
                        Богат антиоксидантами, катехинами и витаминами
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-green-600">
                        <Icon name="Wind" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Свежий вкус</h3>
                      <p className="text-muted-foreground text-sm">
                        Травянистые, сладковатые ноты с лёгкой терпкостью
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="varieties" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Популярные сорта зелёного чая</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-700">Лунцзин (龙井, Колодец Дракона)</h3>
                      <p className="text-muted-foreground mb-2">
                        Один из самых известных китайских зелёных чаёв из провинции Чжэцзян. Плоские листья 
                        обжариваются вручную, что придаёт им характерную форму и нежный каштановый аромат.
                      </p>
                      <p className="text-sm text-green-600 font-medium">Вкус: сладковатый, с нотами каштана и свежей зелени</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-700">Билочунь (碧螺春, Изумрудные спирали весны)</h3>
                      <p className="text-muted-foreground mb-2">
                        Премиальный чай с гор Дунтин. Молодые почки скручиваются в спирали, создавая 
                        изысканный фруктовый аромат с нотами персика и абрикоса.
                      </p>
                      <p className="text-sm text-green-600 font-medium">Вкус: цветочно-фруктовый, сладкий, освежающий</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-700">Сенча (煎茶)</h3>
                      <p className="text-muted-foreground mb-2">
                        Самый популярный японский зелёный чай. Листья пропариваются и скручиваются в иглы. 
                        Обладает ярким травянистым вкусом с морскими нотами.
                      </p>
                      <p className="text-sm text-green-600 font-medium">Вкус: свежий, травянистый, с лёгкой сладостью</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-700">Матча (抹茶)</h3>
                      <p className="text-muted-foreground mb-2">
                        Японский порошковый чай церемониального качества. Листья выращивают в тени, 
                        что увеличивает содержание хлорофилла и аминокислот. Перемалывается в мелкий порошок.
                      </p>
                      <p className="text-sm text-green-600 font-medium">Вкус: насыщенный, сливочный, с умами и лёгкой горчинкой</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-700">Маофэн (毛峰, Ворсистые пики)</h3>
                      <p className="text-muted-foreground mb-2">
                        Элитный чай с гор Хуаншань. Собирается только ранней весной из молодых почек. 
                        Листья покрыты белым пушком, напоминающим утренний туман в горах.
                      </p>
                      <p className="text-sm text-green-600 font-medium">Вкус: нежный, цветочный, с орхидеевыми нотами</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Польза зелёного чая</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Heart" className="text-red-500" size={24} />
                        <h3 className="text-lg font-semibold">Здоровье сердца</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Снижает уровень холестерина и риск сердечно-сосудистых заболеваний. Катехины укрепляют стенки сосудов.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Brain" className="text-purple-500" size={24} />
                        <h3 className="text-lg font-semibold">Улучшение мозговой активности</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Кофеин и L-теанин улучшают концентрацию, память и когнитивные функции без нервозности.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Activity" className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold">Ускорение метаболизма</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Способствует снижению веса и сжиганию жира. Увеличивает энергозатраты организма.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-blue-500" size={24} />
                        <h3 className="text-lg font-semibold">Мощные антиоксиданты</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Защищает клетки от свободных радикалов, замедляет старение и снижает риск онкологии.
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
                        Катехины подавляют рост бактерий полости рта, предотвращая кариес и освежая дыхание.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Droplet" className="text-cyan-500" size={24} />
                        <h3 className="text-lg font-semibold">Улучшение кожи</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Антиоксиданты защищают кожу от UV-лучей, уменьшают воспаления и улучшают цвет лица.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="brewing" className="space-y-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Как правильно заваривать зелёный чай</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Температура воды: 70-80°C</h4>
                        <p className="text-sm text-muted-foreground">
                          Слишком горячая вода может сделать чай горьким. Дайте кипятку остыть 3-5 минут.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Количество: 2-3 грамма на 150 мл</h4>
                        <p className="text-sm text-muted-foreground">
                          Примерно одна чайная ложка сухого чая на чашку воды.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Время заваривания: 1-3 минуты</h4>
                        <p className="text-sm text-muted-foreground">
                          Первая заварка - 1-2 минуты. Качественный зелёный чай выдерживает 3-5 проливов.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Посуда: глиняный или стеклянный чайник</h4>
                        <p className="text-sm text-muted-foreground">
                          Стекло позволяет наблюдать раскрытие листьев, глина сохраняет температуру.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="AlertCircle" className="text-yellow-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-yellow-800">Важно!</h4>
                        <p className="text-sm text-yellow-700">
                          Не добавляйте сахар или молоко в зелёный чай - это перебьёт его нежный вкус. 
                          Пейте чай через 30-60 минут после еды для лучшего усвоения полезных веществ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Купить зелёный чай
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
