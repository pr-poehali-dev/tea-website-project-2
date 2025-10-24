import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface TeaVariety {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  origin: string;
  image: string;
  description: string;
  taste: string;
  aroma: string;
  brewing: {
    temp: string;
    time: string;
    ratio: string;
  };
  benefits: string[];
  price: string;
}

const teaVarieties: TeaVariety[] = [
  {
    id: 1,
    name: "Лунцзин (Колодец Дракона)",
    nameEn: "Longjing",
    category: "Зелёный",
    origin: "Китай, Чжэцзян",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/0f4c01ac-4810-4e7d-a338-55192e2fae7d.jpg",
    description: "Один из самых знаменитых китайских чаёв с плоскими листьями. Императорский чай с богатой историей.",
    taste: "Мягкий, сладковатый, с ореховыми нотами",
    aroma: "Свежий, с оттенками каштана",
    brewing: { temp: "75-80°C", time: "2-3 мин", ratio: "3 г / 200 мл" },
    benefits: ["Антиоксиданты", "Улучшает концентрацию", "Снижает давление"],
    price: "от 800₽ / 50г"
  },
  {
    id: 2,
    name: "Те Гуаньинь (Железная Богиня)",
    nameEn: "Tie Guan Yin",
    category: "Улун",
    origin: "Китай, Фуцзянь",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/34e2f3be-f5ab-4bc1-8c3b-ddc4e28fd54f.jpg",
    description: "Легендарный улун с плотно скрученными листьями. Может завариваться до 7 раз, раскрывая новые оттенки.",
    taste: "Цветочный, с медовыми нотами и лёгкой терпкостью",
    aroma: "Орхидея, сирень, весенние цветы",
    brewing: { temp: "90-95°C", time: "3-4 мин", ratio: "5 г / 150 мл" },
    benefits: ["Ускоряет метаболизм", "Снижает холестерин", "Улучшает пищеварение"],
    price: "от 1200₽ / 50г"
  },
  {
    id: 3,
    name: "Дарджилинг Первый сбор",
    nameEn: "Darjeeling First Flush",
    category: "Чёрный",
    origin: "Индия, Дарджилинг",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/7a6d21c0-af05-4910-b23d-d2bc177f1fbb.jpg",
    description: "Шампанское среди чаёв. Весенний сбор с нежными золотистыми типсами и изысканным вкусом.",
    taste: "Лёгкий, цветочный, с мускатными нотами",
    aroma: "Цветочный букет с фруктовыми оттенками",
    brewing: { temp: "85-90°C", time: "3-4 мин", ratio: "2 г / 200 мл" },
    benefits: ["Бодрит", "Антиоксиданты", "Улучшает настроение"],
    price: "от 1500₽ / 50г"
  },
  {
    id: 4,
    name: "Бай Хао Инь Чжень (Серебряные иглы)",
    nameEn: "Silver Needle",
    category: "Белый",
    origin: "Китай, Фуцзянь",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/560691aa-7a58-4551-b018-b447fb35f966.jpg",
    description: "Самый изысканный белый чай из почек, покрытых серебристым ворсом. Собирается всего 2 дня в году.",
    taste: "Нежнейший, сладковатый, с медовыми нотами",
    aroma: "Цветочный, с оттенками дыни и мёда",
    brewing: { temp: "65-70°C", time: "4-5 мин", ratio: "4 г / 200 мл" },
    benefits: ["Максимум антиоксидантов", "Омолаживает", "Укрепляет иммунитет"],
    price: "от 2000₽ / 50г"
  },
  {
    id: 5,
    name: "Матча церемониальная",
    nameEn: "Ceremonial Matcha",
    category: "Зелёный",
    origin: "Япония, Уджи",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/1fa49c30-6b95-4e33-ad92-f31f7af5cca4.jpg",
    description: "Измельченный в порошок зелёный чай для традиционной японской церемонии. Яркий зелёный цвет и кремовая пена.",
    taste: "Умами, сладковатый, с лёгкой терпкостью",
    aroma: "Свежескошенная трава, морские водоросли",
    brewing: { temp: "70-80°C", time: "Взбить", ratio: "2 г / 100 мл" },
    benefits: ["Энергия без нервозности", "Детокс", "Концентрация"],
    price: "от 1800₽ / 30г"
  },
  {
    id: 6,
    name: "Шу Пуэр выдержанный 10 лет",
    nameEn: "Aged Shu Pu-erh",
    category: "Пуэр",
    origin: "Китай, Юньнань",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/eb3a6c52-7114-4acb-8e64-b8346011aa66.jpg",
    description: "Постферментированный тёмный чай, который с годами становится только лучше. Глубокий, бархатистый вкус.",
    taste: "Землистый, с нотами орехов и древесины",
    aroma: "Влажная земля, старое дерево, осенний лес",
    brewing: { temp: "95-100°C", time: "1-2 мин", ratio: "5 г / 150 мл" },
    benefits: ["Пищеварение", "Снижает холестерин", "Бодрит"],
    price: "от 1600₽ / 50г"
  },
  {
    id: 7,
    name: "Сенча премиум",
    nameEn: "Premium Sencha",
    category: "Зелёный",
    origin: "Япония, Сидзуока",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/0f4c01ac-4810-4e7d-a338-55192e2fae7d.jpg",
    description: "Самый популярный японский чай с игольчатыми листьями. Свежий и освежающий вкус.",
    taste: "Травянистый, освежающий, с морскими нотами",
    aroma: "Свежая трава, океанский бриз",
    brewing: { temp: "70-80°C", time: "1-2 мин", ratio: "3 г / 200 мл" },
    benefits: ["Витамины", "Антиоксиданты", "Тонизирует"],
    price: "от 900₽ / 50г"
  },
  {
    id: 8,
    name: "Ассам золотой",
    nameEn: "Golden Assam",
    category: "Чёрный",
    origin: "Индия, Ассам",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/7a6d21c0-af05-4910-b23d-d2bc177f1fbb.jpg",
    description: "Крепкий, солодовый чай с золотыми типсами. Идеален для завтрака с молоком.",
    taste: "Солодовый, насыщенный, слегка сладкий",
    aroma: "Солод, карамель, пряности",
    brewing: { temp: "95-100°C", time: "3-5 мин", ratio: "2.5 г / 200 мл" },
    benefits: ["Бодрость", "Энергия", "Согревает"],
    price: "от 600₽ / 50г"
  },
  {
    id: 9,
    name: "Дахунпао (Большой Красный Халат)",
    nameEn: "Da Hong Pao",
    category: "Улун",
    origin: "Китай, Уи",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/34e2f3be-f5ab-4bc1-8c3b-ddc4e28fd54f.jpg",
    description: "Легендарный скальный улун, один из самых дорогих чаёв в мире. Сложный минеральный профиль.",
    taste: "Жареный, минеральный, с нотами какао",
    aroma: "Жареные орехи, тёмный шоколад, минералы",
    brewing: { temp: "95-100°C", time: "2-3 мин", ratio: "5 г / 150 мл" },
    benefits: ["Согревает", "Пищеварение", "Антистресс"],
    price: "от 2500₽ / 50г"
  },
  {
    id: 10,
    name: "Бай Му Дань (Белый Пион)",
    nameEn: "White Peony",
    category: "Белый",
    origin: "Китай, Фуцзянь",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/560691aa-7a58-4551-b018-b447fb35f966.jpg",
    description: "Белый чай из почек и молодых листьев. Более насыщенный, чем Серебряные иглы.",
    taste: "Цветочный, фруктовый, слегка сладкий",
    aroma: "Пион, персик, свежее сено",
    brewing: { temp: "70-75°C", time: "4-5 мин", ratio: "3 г / 200 мл" },
    benefits: ["Антиоксиданты", "Молодость кожи", "Успокаивает"],
    price: "от 1000₽ / 50г"
  },
  {
    id: 11,
    name: "Гёкуро (Драгоценная роса)",
    nameEn: "Gyokuro",
    category: "Зелёный",
    origin: "Япония, Ямэ",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/0f4c01ac-4810-4e7d-a338-55192e2fae7d.jpg",
    description: "Элитный японский чай, выращенный в тени. Яркий зелёный цвет и богатый вкус умами.",
    taste: "Умами, сладкий, без горечи",
    aroma: "Морские водоросли, сладкая трава",
    brewing: { temp: "50-60°C", time: "2-3 мин", ratio: "4 г / 100 мл" },
    benefits: ["Л-теанин для спокойствия", "Концентрация", "Антиоксиданты"],
    price: "от 2200₽ / 50г"
  },
  {
    id: 12,
    name: "Кимун (Цимэнь)",
    nameEn: "Keemun",
    category: "Чёрный",
    origin: "Китай, Аньхой",
    image: "https://cdn.poehali.dev/projects/d86a05a6-e97f-4e30-9eeb-162aea996d9e/files/7a6d21c0-af05-4910-b23d-d2bc177f1fbb.jpg",
    description: "Изысканный китайский чёрный чай с винными нотами. Без горечи и терпкости.",
    taste: "Фруктовый, с нотами вина и орхидеи",
    aroma: "Роза, сосна, фруктовое вино",
    brewing: { temp: "90-95°C", time: "3-4 мин", ratio: "3 г / 200 мл" },
    benefits: ["Согревает", "Улучшает кровообращение", "Тонизирует"],
    price: "от 1100₽ / 50г"
  }
];

export default function Catalog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const categories = ["Все", "Зелёный", "Чёрный", "Белый", "Улун", "Пуэр"];

  const filteredTeas = selectedCategory === "Все" 
    ? teaVarieties 
    : teaVarieties.filter(tea => tea.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🍵 Чайная Культура</h1>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                Главная
              </Button>
              <Button variant="default">
                Каталог
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Каталог сортов чая
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Коллекция избранных сортов со всего мира — от классики до раритетов
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeas.map((tea) => (
              <Card key={tea.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tea.image} 
                    alt={tea.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {tea.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{tea.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{tea.nameEn}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{tea.origin}</span>
                  </div>

                  <p className="text-sm leading-relaxed">{tea.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Coffee" size={16} className="text-primary mt-0.5" />
                      <span><strong>Вкус:</strong> {tea.taste}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Flower" size={16} className="text-primary mt-0.5" />
                      <span><strong>Аромат:</strong> {tea.aroma}</span>
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Icon name="Droplet" size={16} className="text-primary" />
                      Заваривание
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Температура</p>
                        <p className="font-semibold">{tea.brewing.temp}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Время</p>
                        <p className="font-semibold">{tea.brewing.time}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Пропорции</p>
                        <p className="font-semibold">{tea.brewing.ratio}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Icon name="Heart" size={16} className="text-primary" />
                      Польза
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tea.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{tea.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <button onClick={() => navigate("/")} className="hover:underline">Главная</button>
            <button className="hover:underline">Каталог</button>
          </div>
          <div className="mt-8 text-xs text-primary-foreground/60">
            © 2025 Чайная Культура. Сделано с любовью к чаю
          </div>
        </div>
      </footer>
    </div>
  );
}
