import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

export default function History() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-amber-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">История чая</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Путешествие длиной в 5000 лет от императорского двора древнего Китая до каждого дома в мире
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Sparkles" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">2737 год до н.э. - Легендарное открытие</h3>
                          <p className="text-sm text-muted-foreground mb-4">Древний Китай</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Согласно легенде, император Шэнь Нун случайно открыл чай, когда листья чайного куста упали 
                        в его кипящую воду. Поражённый ароматом и вкусом, он начал изучать свойства растения и 
                        обнаружил его целебные качества.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="BookOpen" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">760-780 гг. н.э. - Первая книга о чае</h3>
                          <p className="text-sm text-muted-foreground mb-4">Династия Тан, Китай</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Лу Юй написал «Чайный канон» (茶经) - первый в мире трактат о чае. В книге описаны 
                        история чая, способы выращивания, сбора, приготовления и правила чаепития. Этот труд 
                        заложил основы чайной культуры.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Ship" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">IX век - Путешествие на восток</h3>
                          <p className="text-sm text-muted-foreground mb-4">Япония</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Буддийские монахи привезли чай из Китая в Японию. Постепенно в Японии сформировалась 
                        уникальная чайная церемония (тя-но ю), ставшая духовной практикой дзен-буддизма.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Compass" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">XVII век - Великий шёлковый путь</h3>
                          <p className="text-sm text-muted-foreground mb-4">Европа</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Голландские и португальские торговцы начали импорт чая в Европу. Сначала чай был доступен 
                        только аристократии из-за высокой цены. В 1610 году чай впервые попал в Голландию, 
                        а затем распространился по всей Европе.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Crown" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">1662 год - Британская традиция</h3>
                          <p className="text-sm text-muted-foreground mb-4">Англия</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Португальская принцесса Екатерина Браганская, выйдя замуж за английского короля Карла II, 
                        привезла в Англию традицию пить чай. Так началась знаменитая британская чайная культура, 
                        включая традицию «five o'clock tea».
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Leaf" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">1823 год - Индийский чай</h3>
                          <p className="text-sm text-muted-foreground mb-4">Ассам, Индия</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Британцы обнаружили дикие чайные деревья в индийском регионе Ассам. Это положило начало 
                        массовому выращиванию чая в Индии и Цейлоне (Шри-Ланка), что сделало чай доступным 
                        напитком для всех слоёв общества.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Coffee" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">1904 год - Чай в пакетиках</h3>
                          <p className="text-sm text-muted-foreground mb-4">США</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Американский торговец чаем Томас Салливан случайно изобрёл чайные пакетики, отправив 
                        образцы чая клиентам в маленьких шёлковых мешочках. Это революционизировало способ 
                        заваривания чая и сделало его ещё более доступным.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative md:pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>
                  <Card className="border-2 border-primary">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Icon name="Globe" className="text-primary flex-shrink-0" size={32} />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">XXI век - Мировой напиток</h3>
                          <p className="text-sm text-muted-foreground mb-4">Весь мир</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Сегодня чай является вторым по популярности напитком в мире после воды. Ежедневно 
                        выпивается более 3 миллиардов чашек чая. Чайная культура продолжает развиваться, 
                        сочетая древние традиции с современными инновациями.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
