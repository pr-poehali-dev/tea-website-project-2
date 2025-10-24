import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="relative py-32 bg-gradient-to-br from-green-50 via-background to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
              Искусство Чая
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Погрузитесь в тысячелетнюю культуру чаепития. Откройте для себя разнообразие вкусов, ароматов и традиций чайной церемонии
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/about">
                <Button size="lg" className="text-lg px-8">
                  Узнать больше
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Каталог чая
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Виды чая</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Зелёный чай", icon: "Leaf", color: "text-green-600", link: "/green-tea" },
              { title: "Чёрный чай", icon: "Coffee", color: "text-amber-800", link: "/black-tea" },
              { title: "Белый чай", icon: "CloudSun", color: "text-slate-300", link: "/white-tea" },
              { title: "Улун", icon: "Wind", color: "text-teal-600", link: "/oolong" },
              { title: "Пуэр", icon: "Mountain", color: "text-red-900", link: "/puer" },
            ].map((tea) => (
              <Link key={tea.title} to={tea.link}>
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`${tea.color} flex justify-center`}>
                      <Icon name={tea.icon} size={48} />
                    </div>
                    <h3 className="text-xl font-semibold">{tea.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="text-primary">
                  <Icon name="History" size={40} />
                </div>
                <h3 className="text-2xl font-bold">5000 лет истории</h3>
                <p className="text-muted-foreground">
                  Чай - один из древнейших напитков в мире с богатейшей историей и традициями
                </p>
                <Link to="/history">
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="text-primary">
                  <Icon name="Heart" size={40} />
                </div>
                <h3 className="text-2xl font-bold">Польза для здоровья</h3>
                <p className="text-muted-foreground">
                  Антиоксиданты, витамины и минералы делают чай настоящим эликсиром долголетия
                </p>
                <Link to="/benefits">
                  <Button variant="link" className="p-0">
                    Узнать больше →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="text-primary">
                  <Icon name="Sparkles" size={40} />
                </div>
                <h3 className="text-2xl font-bold">Чайная церемония</h3>
                <p className="text-muted-foreground">
                  Искусство приготовления чая - это медитация, философия и путь к гармонии
                </p>
                <Link to="/ceremony">
                  <Button variant="link" className="p-0">
                    Открыть ритуал →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Начните своё чайное путешествие</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Выберите свой идеальный чай из нашей коллекции премиальных сортов со всего мира
          </p>
          <Link to="/shop">
            <Button size="lg" className="text-lg px-12">
              Перейти в магазин
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
