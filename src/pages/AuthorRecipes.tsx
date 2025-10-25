import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AuthorRecipes = () => {
  const recipes = [
    {
      id: "lavender-dream",
      title: "Лавандовая мечта",
      description: "Белый чай с лавандой и мёдом",
      time: "8 минут",
      difficulty: "Средне",
      icon: "Flower2"
    },
    {
      id: "citrus-sunrise",
      title: "Цитрусовый восход",
      description: "Зелёный чай с апельсином, лимоном и имбирём",
      time: "10 минут",
      difficulty: "Легко",
      icon: "Sunrise"
    },
    {
      id: "berry-bliss",
      title: "Ягодное наслаждение",
      description: "Улун с малиной, черникой и базиликом",
      time: "12 минут",
      difficulty: "Средне",
      icon: "Cherry"
    },
    {
      id: "spiced-autumn",
      title: "Пряная осень",
      description: "Пуэр с корицей, гвоздикой и яблоком",
      time: "15 минут",
      difficulty: "Сложно",
      icon: "Leaf"
    },
    {
      id: "rose-garden",
      title: "Розовый сад",
      description: "Зелёный чай с лепестками роз и личи",
      time: "7 минут",
      difficulty: "Легко",
      icon: "Heart"
    },
    {
      id: "tropical-escape",
      title: "Тропический побег",
      description: "Чёрный чай с манго, кокосом и ванилью",
      time: "10 минут",
      difficulty: "Средне",
      icon: "Palmtree"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Авторские рецепты
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Уникальные сочетания вкусов и ароматов для настоящих ценителей чая
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={recipe.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{recipe.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {recipe.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="ChefHat" size={16} />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthorRecipes;
