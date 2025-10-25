import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Recipe {
  id: string;
  title: string;
  description: string;
  time: string;
  difficulty: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  category: string;
}

const recipes: Record<string, Recipe> = {
  "classic-green-tea": {
    id: "classic-green-tea",
    title: "Классический зелёный чай",
    description: "Традиционный способ заваривания зелёного чая для раскрытия всех его полезных свойств",
    time: "5 минут",
    difficulty: "Легко",
    servings: "1 порция",
    ingredients: [
      "2 г качественного зелёного чая",
      "150 мл воды (80°C)",
      "Чайник из стекла или фарфора"
    ],
    instructions: [
      "Нагрейте воду до 80°C (не кипятите!)",
      "Прогрейте чайник кипятком и слейте воду",
      "Положите чайные листья в прогретый чайник",
      "Залейте горячей водой и настаивайте 2-3 минуты",
      "Перелейте в чашку через ситечко"
    ],
    tips: [
      "Не заваривайте кипятком - разрушатся витамины",
      "Можно заваривать повторно 2-3 раза",
      "Лучшее время для зелёного чая - утро"
    ],
    category: "classic"
  },
  "english-breakfast": {
    id: "english-breakfast",
    title: "Английский завтрак",
    description: "Крепкий чёрный чай с молоком - традиция британского чаепития",
    time: "7 минут",
    difficulty: "Легко",
    servings: "1 порция",
    ingredients: [
      "3 г чёрного чая (Ассам или Цейлон)",
      "200 мл кипятка",
      "50 мл молока",
      "Сахар по вкусу"
    ],
    instructions: [
      "Вскипятите воду до 100°C",
      "Прогрейте заварочный чайник",
      "Засыпьте чай и залейте кипятком",
      "Настаивайте 5 минут под крышкой",
      "Налейте молоко в чашку",
      "Добавьте заваренный чай",
      "При желании добавьте сахар"
    ],
    tips: [
      "Молоко добавляют первым - английская традиция",
      "Подавайте с печеньем или булочками",
      "Идеален для утреннего бодрящего чаепития"
    ],
    category: "classic"
  },
  "moroccan-mint-tea": {
    id: "moroccan-mint-tea",
    title: "Марокканский мятный чай",
    description: "Освежающий зелёный чай с мятой и сахаром - символ марокканского гостеприимства",
    time: "10 минут",
    difficulty: "Средне",
    servings: "4 порции",
    ingredients: [
      "2 ч.л. зелёного чая (Ганпаудер)",
      "Пучок свежей мяты",
      "4-6 кусочков сахара",
      "800 мл кипятка"
    ],
    instructions: [
      "Ошпарьте заварник кипятком",
      "Положите зелёный чай и немного кипятка",
      "Взболтайте и слейте первую заварку",
      "Добавьте свежую мяту и сахар",
      "Залейте кипятком и настаивайте 5 минут",
      "Наливайте с высоты для образования пенки"
    ],
    tips: [
      "Традиционно наливают 3 раза - каждый со своим вкусом",
      "Чем выше наливаете - тем лучше аромат",
      "Подавайте в высоких стеклянных стаканах"
    ],
    category: "classic"
  },
  "masala-chai": {
    id: "masala-chai",
    title: "Масала чай",
    description: "Индийский пряный чай со специями и молоком - напиток с душой",
    time: "15 минут",
    difficulty: "Средне",
    servings: "2 порции",
    ingredients: [
      "2 ч.л. чёрного чая",
      "300 мл воды",
      "200 мл молока",
      "2 см свежего имбиря",
      "4 коробочки кардамона",
      "2 бутона гвоздики",
      "1 палочка корицы",
      "2 ч.л. сахара"
    ],
    instructions: [
      "Раздавите специи в ступке",
      "Вскипятите воду со специями и имбирём",
      "Добавьте чай и варите 2-3 минуты",
      "Влейте молоко и доведите до кипения",
      "Добавьте сахар и снимите с огня",
      "Процедите через ситечко в чашки"
    ],
    tips: [
      "Специи можно варьировать по вкусу",
      "Традиционно варят в медной посуде",
      "Идеален для холодного времени года"
    ],
    category: "classic"
  },
  "iced-tea": {
    id: "iced-tea",
    title: "Холодный чай",
    description: "Освежающий холодный чай с лимоном - спасение в жару",
    time: "20 минут",
    difficulty: "Легко",
    servings: "4 порции",
    ingredients: [
      "3 ч.л. чёрного чая",
      "1 литр воды",
      "1 лимон",
      "Мёд по вкусу",
      "Лёд",
      "Листья мяты"
    ],
    instructions: [
      "Заварите крепкий чай и остудите",
      "Добавьте сок половины лимона",
      "Подсластите мёдом по вкусу",
      "Охладите в холодильнике 10 минут",
      "Подавайте со льдом",
      "Украсьте долькой лимона и мятой"
    ],
    tips: [
      "Можно заварить заранее и хранить в холодильнике",
      "Экспериментируйте с фруктами - персик, малина",
      "Без сахара - отличный диетический напиток"
    ],
    category: "classic"
  },
  "matcha-latte": {
    id: "matcha-latte",
    title: "Матча латте",
    description: "Японский зелёный чай матча с молоком - модный и полезный напиток",
    time: "5 минут",
    difficulty: "Средне",
    servings: "1 порция",
    ingredients: [
      "1 ч.л. порошка матча",
      "50 мл горячей воды (80°C)",
      "200 мл молока",
      "1 ч.л. мёда (по желанию)"
    ],
    instructions: [
      "Просейте матча в чашку",
      "Добавьте немного горячей воды",
      "Взбейте бамбуковым венчиком до пены",
      "Подогрейте молоко и взбейте в пену",
      "Влейте матча в молоко",
      "При желании добавьте мёд"
    ],
    tips: [
      "Используйте церемониальный матча высшего качества",
      "Можно приготовить холодную версию со льдом",
      "Бодрит лучше кофе, но мягче"
    ],
    category: "classic"
  },
  "lavender-dream": {
    id: "lavender-dream",
    title: "Лавандовая мечта",
    description: "Нежный белый чай с ароматом лаванды и сладостью мёда",
    time: "8 минут",
    difficulty: "Средне",
    servings: "1 порция",
    ingredients: [
      "2 г белого чая",
      "1 ч.л. сушёной лаванды",
      "150 мл воды (75°C)",
      "1 ч.л. мёда",
      "Долька лимона"
    ],
    instructions: [
      "Смешайте белый чай и лаванду",
      "Залейте водой 75°C",
      "Настаивайте 5-7 минут",
      "Процедите в чашку",
      "Добавьте мёд и лимон",
      "Наслаждайтесь ароматом"
    ],
    tips: [
      "Лаванда успокаивает и помогает уснуть",
      "Идеален для вечернего чаепития",
      "Можно добавить щепотку ванили"
    ],
    category: "author"
  },
  "citrus-sunrise": {
    id: "citrus-sunrise",
    title: "Цитрусовый восход",
    description: "Бодрящий зелёный чай с цитрусами и имбирём",
    time: "10 минут",
    difficulty: "Легко",
    servings: "1 порция",
    ingredients: [
      "2 г зелёного чая",
      "2 дольки апельсина",
      "2 дольки лимона",
      "1 см свежего имбиря",
      "200 мл воды (80°C)",
      "Мёд по вкусу"
    ],
    instructions: [
      "Нарежьте имбирь тонкими пластинками",
      "Заварите зелёный чай водой 80°C",
      "Добавьте имбирь и цитрусы",
      "Настаивайте 5 минут",
      "Добавьте мёд",
      "Подавайте горячим"
    ],
    tips: [
      "Укрепляет иммунитет",
      "Идеален для утра",
      "Можно добавить мяту для свежести"
    ],
    category: "author"
  },
  "berry-bliss": {
    id: "berry-bliss",
    title: "Ягодное наслаждение",
    description: "Улун с ягодами и базиликом - необычное сочетание",
    time: "12 минут",
    difficulty: "Средне",
    servings: "1 порция",
    ingredients: [
      "3 г улуна",
      "5 ягод малины",
      "5 ягод черники",
      "2 листика базилика",
      "180 мл воды (90°C)",
      "Мёд по вкусу"
    ],
    instructions: [
      "Разомните ягоды вилкой",
      "Заварите улун водой 90°C",
      "Добавьте ягоды и базилик",
      "Настаивайте 7 минут",
      "Процедите",
      "Добавьте мёд"
    ],
    tips: [
      "Летом можно подавать холодным",
      "Базилик придаёт пикантность",
      "Богат антиоксидантами"
    ],
    category: "author"
  },
  "spiced-autumn": {
    id: "spiced-autumn",
    title: "Пряная осень",
    description: "Насыщенный пуэр с осенними специями и яблоком",
    time: "15 минут",
    difficulty: "Сложно",
    servings: "2 порции",
    ingredients: [
      "5 г пуэра",
      "1 яблоко",
      "1 палочка корицы",
      "3 бутона гвоздики",
      "1 звёздочка бадьяна",
      "400 мл воды (95°C)",
      "Коричневый сахар"
    ],
    instructions: [
      "Нарежьте яблоко кубиками",
      "Промойте пуэр кипятком",
      "Заварите пуэр водой 95°C",
      "Добавьте специи и яблоко",
      "Настаивайте 10 минут",
      "Процедите и подсластите"
    ],
    tips: [
      "Согревает в холода",
      "Можно варить на плите",
      "Идеален для осенних вечеров"
    ],
    category: "author"
  },
  "rose-garden": {
    id: "rose-garden",
    title: "Розовый сад",
    description: "Романтичный зелёный чай с розой и личи",
    time: "7 минут",
    difficulty: "Легко",
    servings: "1 порция",
    ingredients: [
      "2 г зелёного чая",
      "1 ч.л. лепестков розы",
      "2 ягоды личи",
      "150 мл воды (80°C)",
      "Мёд розовый"
    ],
    instructions: [
      "Смешайте чай и лепестки розы",
      "Залейте водой 80°C",
      "Добавьте личи",
      "Настаивайте 5 минут",
      "Процедите",
      "Подсластите розовым мёдом"
    ],
    tips: [
      "Используйте пищевые лепестки роз",
      "Красиво смотрится в стеклянной чашке",
      "Романтичный напиток для свидания"
    ],
    category: "author"
  },
  "tropical-escape": {
    id: "tropical-escape",
    title: "Тропический побег",
    description: "Экзотический чёрный чай с тропическими фруктами",
    time: "10 минут",
    difficulty: "Средне",
    servings: "1 порция",
    ingredients: [
      "3 г чёрного чая",
      "30 г манго",
      "1 ч.л. кокосовой стружки",
      "Щепотка ванили",
      "200 мл воды (95°C)",
      "Кокосовое молоко 50 мл"
    ],
    instructions: [
      "Нарежьте манго кубиками",
      "Заварите чёрный чай",
      "Добавьте манго, кокос, ваниль",
      "Настаивайте 5 минут",
      "Добавьте кокосовое молоко",
      "Процедите в чашку"
    ],
    tips: [
      "Можно подавать холодным со льдом",
      "Транспортирует на тропический пляж",
      "Десертный чай - заменит сладкое"
    ],
    category: "author"
  }
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = id ? recipes[id] : null;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Рецепт не найден</h1>
            <Link to="/">
              <Button>На главную</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-amber-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to={recipe.category === 'classic' ? '/classic-recipes' : '/author-recipes'}
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Вернуться к рецептам</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">{recipe.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{recipe.description}</p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Время</div>
                  <div className="font-semibold">{recipe.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ChefHat" size={24} className="text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Сложность</div>
                  <div className="font-semibold">{recipe.difficulty}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={24} className="text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Порций</div>
                  <div className="font-semibold">{recipe.servings}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Icon name="ShoppingBasket" size={24} />
                    Ингредиенты
                  </h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} />
                    Полезные советы
                  </h2>
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Star" size={20} className="text-primary mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Пошаговый рецепт
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to={recipe.category === 'classic' ? '/classic-recipes' : '/author-recipes'}>
              <Button size="lg">
                <Icon name="ArrowLeft" size={20} />
                Все {recipe.category === 'classic' ? 'классические' : 'авторские'} рецепты
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
