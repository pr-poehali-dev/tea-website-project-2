import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ClassicRecipes = () => {
  const recipes = [
    {
      id: "classic-green-tea",
      title: "Классический зелёный чай",
      description: "Традиционный способ заваривания зелёного чая",
      time: "5 минут",
      difficulty: "Легко",
      icon: "Leaf"
    },
    {
      id: "english-breakfast",
      title: "Английский завтрак",
      description: "Крепкий чёрный чай с молоком",
      time: "7 минут",
      difficulty: "Легко",
      icon: "Coffee"
    },
    {
      id: "moroccan-mint-tea",
      title: "Марокканский мятный чай",
      description: "Освежающий зелёный чай с мятой и сахаром",
      time: "10 минут",
      difficulty: "Средне",
      icon: "Sparkles"
    },
    {
      id: "masala-chai",
      title: "Масала чай",
      description: "Индийский пряный чай со специями и молоком",
      time: "15 минут",
      difficulty: "Средне",
      icon: "Flame"
    },
    {
      id: "iced-tea",
      title: "Холодный чай",
      description: "Освежающий холодный чай с лимоном",
      time: "20 минут",
      difficulty: "Легко",
      icon: "Snowflake"
    },
    {
      id: "matcha-latte",
      title: "Матча латте",
      description: "Японский зелёный чай матча с молоком",
      time: "5 минут",
      difficulty: "Средне",
      icon: "Droplet"
    }
  ];

  return (
    <Layout>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Классические рецепты
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Проверенные временем способы приготовления чая со всего мира
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
    </Layout>
  );
};

export default ClassicRecipes;