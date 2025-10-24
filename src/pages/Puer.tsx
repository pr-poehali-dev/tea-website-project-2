import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Puer() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-red-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-red-900 flex justify-center mb-4">
              <Icon name="Mountain" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-red-950">Пуэр</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Постферментированный чай с многолетней выдержкой и землистым вкусом
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
                <TabsTrigger value="varieties">Виды</TabsTrigger>
                <TabsTrigger value="benefits">Польза</TabsTrigger>
                <TabsTrigger value="brewing">Заваривание</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">Что такое пуэр?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Пуэр (普洱) - уникальный постферментированный чай из провинции Юньнань. В отличие от других 
                    чаёв, пуэр не только не портится со временем, но и становится лучше с годами выдержки. 
                    Некоторые пуэры могут храниться 50-100 лет, увеличиваясь в цене как хорошее вино.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Название происходит от города Пуэр, который был центром торговли чаем. Традиционно пуэр 
                    прессуется в блины (бинча), кирпичи, гнёзда или тыквы для удобства транспортировки и хранения. 
                    Это единственный чай, проходящий микробиологическую ферментацию.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-red-900">
                        <Icon name="Calendar" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Выдержка</h3>
                      <p className="text-muted-foreground text-sm">
                        С годами вкус становится мягче, глубже и сложнее
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-red-900">
                        <Icon name="CircleDot" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Прессованный</h3>
                      <p className="text-muted-foreground text-sm">
                        Традиционно прессуется в блины, кирпичи или гнёзда
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-red-900">
                        <Icon name="Flame" size={40} />
                      </div>
                      <h3 className="text-xl font-bold">Землистый вкус</h3>
                      <p className="text-muted-foreground text-sm">
                        Глубокий, древесный, с нотами земли и осеннего леса
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="varieties" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Виды пуэра</h2>
                
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-800">Шэн пуэр (生普洱, Сырой/Зелёный пуэр)</h3>
                  <p className="text-muted-foreground mb-4">
                    Традиционный пуэр естественной ферментации. После обработки листья прессуют и оставляют 
                    стареть естественным образом на годы и десятилетия. Молодой шэн похож на зелёный чай, 
                    с годами темнеет и приобретает землистые ноты.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Выдержка: от 5 до 100+ лет</p>
                        <p className="text-sm text-muted-foreground">Чем старше, тем дороже и мягче вкус</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Droplet" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Цвет настоя: от светло-жёлтого до янтарного</p>
                        <p className="text-sm text-muted-foreground">Зависит от возраста чая</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Wind" className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Вкус: свежий, терпкий, с дымными нотами (молодой)</p>
                        <p className="text-sm text-muted-foreground">Или мягкий, сладкий, древесный (выдержанный)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-red-900">Шу пуэр (熟普洱, Готовый/Чёрный пуэр)</h3>
                  <p className="text-muted-foreground mb-4">
                    Изобретён в 1970-х годах для имитации вкуса выдержанного шэн пуэра. Проходит ускоренную 
                    ферментацию влажным скирдованием (водуй). За 45-60 дней достигается вкус 10-летнего шэн пуэра. 
                    Готов к употреблению сразу, дальнейшая выдержка практически не меняет вкус.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" className="text-red-700 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Производство: ускоренная ферментация 45-60 дней</p>
                        <p className="text-sm text-muted-foreground">Технология водуй имитирует многолетнее старение</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Coffee" className="text-red-700 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Цвет настоя: тёмно-коричневый, почти чёрный</p>
                        <p className="text-sm text-muted-foreground">Насыщенный и плотный</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mountain" className="text-red-700 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Вкус: землистый, древесный, шоколадный</p>
                        <p className="text-sm text-muted-foreground">Мягкий, без терпкости, с нотами коры и опавших листьев</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Формы прессовки</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Бинча (饼茶) - Блин</h4>
                        <p className="text-sm text-muted-foreground">Круглый диск весом 357г, 400г или 500г. Самая популярная форма.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Туоча (沱茶) - Гнездо</h4>
                        <p className="text-sm text-muted-foreground">Форма чаши с углублением. Удобен для индивидуальных порций.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Чжуаньча (砖茶) - Кирпич</h4>
                        <p className="text-sm text-muted-foreground">Прямоугольная форма. Удобен для длительного хранения.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Цзиньча (紧茶) - Гриб</h4>
                        <p className="text-sm text-muted-foreground">Форма гриба или тыквы. Традиционная форма для экспорта.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Польза пуэра</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="TrendingDown" className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold">Снижение веса</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ускоряет метаболизм и расщепление жиров эффективнее других чаёв. "Чай для похудения" в Китае.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Activity" className="text-orange-500" size={24} />
                        <h3 className="text-lg font-semibold">Улучшение пищеварения</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Помогает переваривать жирную пищу, снимает тяжесть в желудке. Традиционно пьют после еды.
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
                        Снижает холестерин и триглицериды, улучшает кровообращение
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Droplet" className="text-blue-500" size={24} />
                        <h3 className="text-lg font-semibold">Детоксикация</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Выводит токсины, очищает печень, нейтрализует алкоголь
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Smile" className="text-yellow-500" size={24} />
                        <h3 className="text-lg font-semibold">Бодрость без нервозности</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Мягко тонизирует, улучшает настроение и концентрацию
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-purple-500" size={24} />
                        <h3 className="text-lg font-semibold">Укрепление иммунитета</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Микроорганизмы ферментации создают пробиотический эффект
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="brewing" className="space-y-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-6">Как правильно заваривать пуэр</h2>
                  
                  <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="Info" className="text-amber-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-amber-900">Подготовка прессованного пуэра</h4>
                        <p className="text-sm text-amber-800">
                          Аккуратно отделите нужное количество листьев ножом для пуэра (пуэрным ножом). 
                          Отламывайте по слоям, не крошите. Дайте листьям "подышать" 5-10 минут перед завариванием.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Температура воды: 95-100°C</h4>
                        <p className="text-sm text-muted-foreground">
                          Пуэр любит крутой кипяток. Шэн можно заваривать при 90-95°C, шу - обязательно кипятком.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Количество: 5-7 грамм на 150 мл</h4>
                        <p className="text-sm text-muted-foreground">
                          Для прессованного - кусочек размером с грецкий орех. Для рассыпного - 2 чайные ложки.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Промывка: обязательно!</h4>
                        <p className="text-sm text-muted-foreground">
                          Залейте кипятком и сразу слейте. Это "пробуждает" чай и смывает пыль. Для шу пуэра промойте 2 раза.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Время заваривания: 10-30 секунд</h4>
                        <p className="text-sm text-muted-foreground">
                          Метод пролива: 10-15 сек первые 3-4 заварки, затем увеличивайте. Выдерживает 8-12 проливов.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Посуда: глиняный чайник или гайвань</h4>
                        <p className="text-sm text-muted-foreground">
                          Исинская глина идеальна для шу пуэра, впитывает запахи и улучшает вкус. Для шэн подойдёт фарфор.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex gap-3">
                      <Icon name="Coffee" className="text-red-700 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1 text-red-900">Особенности</h4>
                        <p className="text-sm text-red-800">
                          Шу пуэр не горчит даже при долгом настаивании - можно заваривать и в термосе для дороги. 
                          Шэн пуэр более капризный, требует точности времени. Пуэр отлично пьётся после жирной еды, 
                          помогает пищеварению. В Китае его называют "чай, который растворяет жир".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-red-900 hover:bg-red-950">
                    Купить пуэр
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
