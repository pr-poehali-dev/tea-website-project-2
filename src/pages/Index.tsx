import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🍵 Чайная Культура</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Церемония', 'Виды', 'География', 'Рецепты', 'Сравнение'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Искусство чая
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Путешествие в мир древних традиций и современной культуры чаепития. 
                Откройте для себя философию покоя и осознанности в каждой чашке.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('церемония')} size="lg" className="bg-primary hover:bg-primary/90">
                  Начать путешествие
                </Button>
                <Button onClick={() => scrollToSection('виды')} variant="outline" size="lg">
                  Виды чая
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/55035072-e7e5-42af-a8b7-af31ab3e5b1f.jpg"
                alt="Чайная церемония"
                className="rounded-2xl shadow-2xl w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="церемония" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Чайная церемония</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Традиционное искусство, где каждое движение наполнено смыслом и уважением
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Flame",
                title: "Подготовка",
                desc: "Очищение посуды кипятком, создание правильной температуры воды для каждого сорта чая"
              },
              {
                icon: "Leaf",
                title: "Заваривание",
                desc: "Точное количество листьев и время настаивания раскрывают истинный вкус и аромат"
              },
              {
                icon: "Heart",
                title: "Наслаждение",
                desc: "Медленное смакование, осознанность момента, единение с природой через чай"
              }
            ].map((step, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={step.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="виды" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Виды чая</h2>
            <p className="text-muted-foreground">Шесть основных категорий по степени ферментации</p>
          </div>
          <div className="relative mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/452e75f8-87d1-4f1a-a1a5-965fb21b763f.jpg"
              alt="Виды чая"
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Белый чай", color: "bg-stone-100", desc: "Минимальная обработка, нежный вкус", fermentation: "5-10%" },
              { name: "Зелёный чай", color: "bg-green-100", desc: "Свежий, травянистый аромат", fermentation: "0%" },
              { name: "Жёлтый чай", color: "bg-yellow-100", desc: "Редкий, мягкий и сладковатый", fermentation: "10-20%" },
              { name: "Улун", color: "bg-amber-100", desc: "Полуферментированный, сложный букет", fermentation: "30-70%" },
              { name: "Чёрный чай", color: "bg-orange-100", desc: "Насыщенный, терпкий вкус", fermentation: "100%" },
              { name: "Пуэр", color: "bg-stone-200", desc: "Выдержанный, земляные нотки", fermentation: "Постферментация" }
            ].map((tea) => (
              <Card key={tea.name} className="hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className={`w-full h-24 rounded-lg ${tea.color} mb-4 flex items-center justify-center`}>
                    <span className="text-3xl">🍵</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tea.desc}</p>
                  <p className="text-xs text-primary font-medium">Ферментация: {tea.fermentation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="география" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">География чая</h2>
            <p className="text-muted-foreground">Основные чайные регионы мира</p>
          </div>
          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/9807bffa-129b-43d8-8cd5-4cec995df878.jpg"
              alt="Карта чайных регионов"
              className="rounded-2xl shadow-xl w-full max-w-5xl mx-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                country: "🇨🇳 Китай",
                regions: "Фуцзянь, Юньнань, Чжэцзян",
                specialty: "Родина чая, все виды",
                famous: "Лунцзин, Те Гуаньинь, Пуэр"
              },
              {
                country: "🇮🇳 Индия",
                regions: "Ассам, Дарджилинг, Нилгири",
                specialty: "Чёрные чаи",
                famous: "Дарджилинг, Ассамский чай"
              },
              {
                country: "🇯🇵 Япония",
                regions: "Сидзуока, Кагосима, Уджи",
                specialty: "Зелёные чаи",
                famous: "Сенча, Матча, Генмайча"
              },
              {
                country: "🇱🇰 Шри-Ланка",
                regions: "Нувара Элия, Димбула, Канди",
                specialty: "Цейлонский чай",
                famous: "Оранж Пеко, Серебряные типсы"
              }
            ].map((region) => (
              <Card key={region.country} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">{region.country}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Регионы:</span> {region.regions}</p>
                    <p><span className="font-medium">Специализация:</span> {region.specialty}</p>
                    <p><span className="font-medium">Известные сорта:</span> {region.famous}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="рецепты" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Рецепты заваривания</h2>
            <p className="text-muted-foreground">Правильная температура и время для идеального вкуса</p>
          </div>
          <Tabs defaultValue="green" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
              <TabsTrigger value="green">Зелёный</TabsTrigger>
              <TabsTrigger value="black">Чёрный</TabsTrigger>
              <TabsTrigger value="white">Белый</TabsTrigger>
              <TabsTrigger value="oolong">Улун</TabsTrigger>
              <TabsTrigger value="puer">Пуэр</TabsTrigger>
              <TabsTrigger value="herbal">Травяной</TabsTrigger>
            </TabsList>
            <TabsContent value="green" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Зелёный чай</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">70-80°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">2-3 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">2-3 г / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Важно не перегреть воду — кипяток разрушит нежные листья и даст горечь. 
                    Можно заваривать 2-3 раза, увеличивая время на 30 секунд.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="black" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Чёрный чай</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">95-100°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">3-5 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">2-3 г / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Чёрный чай любит кипяток. Крепость регулируйте временем заваривания. 
                    Отлично сочетается с молоком, лимоном, мёдом.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="white" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Белый чай</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">65-75°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">4-5 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">3-4 г / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Самый нежный из чаёв требует особого внимания. Низкая температура 
                    и терпение раскроют цветочные и медовые ноты.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="oolong" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Улун (Оолонг)</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">85-95°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">3-4 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">3 г / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Улун можно заваривать до 7 раз! Каждая заварка раскрывает новые 
                    грани вкуса — от цветочных до фруктовых нот.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="puer" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Пуэр</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">95-100°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">1-2 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">4-5 г / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Первую заварку (промывку) обычно сливают за 10 секунд. Выдержанный 
                    пуэр даёт глубокий, бархатистый вкус с древесными нотами.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="herbal" className="mt-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold">Травяной чай</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Icon name="Thermometer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Температура</p>
                      <p className="text-2xl font-bold text-primary">95-100°C</p>
                    </div>
                    <div>
                      <Icon name="Timer" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Время</p>
                      <p className="text-2xl font-bold text-primary">5-7 мин</p>
                    </div>
                    <div>
                      <Icon name="Droplet" className="text-primary mb-2" size={32} />
                      <p className="font-medium">Пропорции</p>
                      <p className="text-2xl font-bold text-primary">1 ч.л. / 200 мл</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Не содержит кофеина, можно пить в любое время. Ромашка, мята, 
                    шиповник — каждая травка имеет свои целебные свойства.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="сравнение" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Сравнение сортов</h2>
            <p className="text-muted-foreground">Основные характеристики разных видов чая</p>
          </div>
          <div className="overflow-x-auto">
            <Table className="bg-card rounded-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px] font-semibold">Вид чая</TableHead>
                  <TableHead className="font-semibold">Ферментация</TableHead>
                  <TableHead className="font-semibold">Кофеин</TableHead>
                  <TableHead className="font-semibold">Температура</TableHead>
                  <TableHead className="font-semibold">Время</TableHead>
                  <TableHead className="font-semibold">Вкус</TableHead>
                  <TableHead className="font-semibold">Польза</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Белый</TableCell>
                  <TableCell>5-10%</TableCell>
                  <TableCell>Низкий</TableCell>
                  <TableCell>65-75°C</TableCell>
                  <TableCell>4-5 мин</TableCell>
                  <TableCell>Нежный, сладковатый</TableCell>
                  <TableCell>Антиоксиданты</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Зелёный</TableCell>
                  <TableCell>0%</TableCell>
                  <TableCell>Средний</TableCell>
                  <TableCell>70-80°C</TableCell>
                  <TableCell>2-3 мин</TableCell>
                  <TableCell>Свежий, травянистый</TableCell>
                  <TableCell>Ускоряет метаболизм</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Жёлтый</TableCell>
                  <TableCell>10-20%</TableCell>
                  <TableCell>Средний</TableCell>
                  <TableCell>75-85°C</TableCell>
                  <TableCell>3 мин</TableCell>
                  <TableCell>Мягкий, цветочный</TableCell>
                  <TableCell>Пищеварение</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Улун</TableCell>
                  <TableCell>30-70%</TableCell>
                  <TableCell>Средний</TableCell>
                  <TableCell>85-95°C</TableCell>
                  <TableCell>3-4 мин</TableCell>
                  <TableCell>Сложный, фруктовый</TableCell>
                  <TableCell>Снижает холестерин</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Чёрный</TableCell>
                  <TableCell>100%</TableCell>
                  <TableCell>Высокий</TableCell>
                  <TableCell>95-100°C</TableCell>
                  <TableCell>3-5 мин</TableCell>
                  <TableCell>Терпкий, насыщенный</TableCell>
                  <TableCell>Бодрость, энергия</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Пуэр</TableCell>
                  <TableCell>Пост-фермент.</TableCell>
                  <TableCell>Средний-высокий</TableCell>
                  <TableCell>95-100°C</TableCell>
                  <TableCell>1-2 мин</TableCell>
                  <TableCell>Землистый, глубокий</TableCell>
                  <TableCell>Очищение, тонус</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <Icon name="Leaf" className="text-green-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Для похудения</h3>
                <p className="text-sm text-muted-foreground">Зелёный чай и улун ускоряют метаболизм</p>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <Icon name="Zap" className="text-orange-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Для энергии</h3>
                <p className="text-sm text-muted-foreground">Чёрный чай и пуэр дают бодрость</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <Icon name="Moon" className="text-purple-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Для релаксации</h3>
                <p className="text-sm text-muted-foreground">Белый чай успокаивает нервную систему</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🍵 Чайная Культура</h3>
          <p className="text-primary-foreground/80 mb-6">
            Погрузитесь в мир чая — древнее искусство для современной жизни
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <button onClick={() => scrollToSection('главная')} className="hover:underline">Главная</button>
            <button onClick={() => scrollToSection('церемония')} className="hover:underline">Церемония</button>
            <button onClick={() => scrollToSection('виды')} className="hover:underline">Виды</button>
            <button onClick={() => scrollToSection('geografia')} className="hover:underline">География</button>
            <button onClick={() => scrollToSection('рецепты')} className="hover:underline">Рецепты</button>
            <button onClick={() => scrollToSection('сравнение')} className="hover:underline">Сравнение</button>
          </div>
          <div className="mt-8 text-xs text-primary-foreground/60">
            © 2025 Чайная Культура. Сделано с любовью к чаю
          </div>
        </div>
      </footer>
    </div>
  );
}
