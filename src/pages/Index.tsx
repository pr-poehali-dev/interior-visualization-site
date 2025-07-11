import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Palette" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">
                DesignStudio
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#portfolio"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#services"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button>
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              <Icon name="Sparkles" className="h-3 w-3 mr-1" />
              Премиальный дизайн интерьера
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Создаём пространства
              <span className="block text-primary">вашей мечты</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный дизайн интерьера и 3D-визуализация. Превращаем
              ваши идеи в реальность с помощью современных технологий и
              безупречного вкуса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Palette" className="h-5 w-5 mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Почему выбирают нас?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Экспертность</h3>
                <p className="text-muted-foreground">
                  Более 8 лет опыта в создании уникальных интерьеров
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Zap" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Технологии</h3>
                <p className="text-muted-foreground">
                  Используем передовые 3D-технологии и программы
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Индивидуальность</h3>
                <p className="text-muted-foreground">
                  Каждый проект создаём с учётом ваших пожеланий
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-muted-foreground">
              Портфолио реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Современная гостиная",
                category: "Жилой интерьер",
                image: "/img/bd339ab2-616c-4a9a-8362-16f1ec89bef8.jpg",
              },
              {
                title: "Минималистичная кухня",
                category: "Кухня",
                image: "/img/6eea91d0-fb21-4a6a-851f-ad40d443416b.jpg",
              },
              {
                title: "Спальня в скандинавском стиле",
                category: "Спальня",
                image: "/img/98bfa8b2-b123-4238-b176-50045de389cc.jpg",
              },
              {
                title: "Офисное пространство",
                category: "Коммерческий дизайн",
                image: "/img/bd339ab2-616c-4a9a-8362-16f1ec89bef8.jpg",
              },
              {
                title: "Детская комната",
                category: "Детский интерьер",
                image: "/img/98bfa8b2-b123-4238-b176-50045de389cc.jpg",
              },
              {
                title: "Ванная комната",
                category: "Санузел",
                image: "/img/6eea91d0-fb21-4a6a-851f-ad40d443416b.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг по дизайну интерьера
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Дизайн-проект",
                description:
                  "Полный дизайн-проект с чертежами, планировками и спецификациями",
              },
              {
                icon: "Monitor",
                title: "3D-визуализация",
                description: "Фотореалистичная 3D-визуализация всех помещений",
              },
              {
                icon: "Palette",
                title: "Подбор материалов",
                description: "Помощь в выборе отделочных материалов и мебели",
              },
              {
                icon: "Users",
                title: "Авторский надзор",
                description: "Сопровождение проекта на всех этапах реализации",
              },
              {
                icon: "Lightbulb",
                title: "Светодизайн",
                description:
                  "Профессиональное освещение для создания атмосферы",
              },
              {
                icon: "Sofa",
                title: "Декорирование",
                description:
                  "Подбор декора и аксессуаров для завершения образа",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      className="h-8 w-8 text-primary"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий пакет услуг
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Базовый",
                price: "2 500",
                unit: "за м²",
                description: "Планировочное решение и базовая визуализация",
                features: [
                  "Планировка помещения",
                  "2 варианта дизайна",
                  "Базовая 3D-визуализация",
                  "Консультация дизайнера",
                ],
                popular: false,
              },
              {
                title: "Стандарт",
                price: "3 500",
                unit: "за м²",
                description: "Полный дизайн-проект с детальной проработкой",
                features: [
                  "Планировка и зонирование",
                  "Дизайн-концепция",
                  "Детальная 3D-визуализация",
                  "Чертежи и спецификации",
                  "Подбор материалов",
                ],
                popular: true,
              },
              {
                title: "Премиум",
                price: "5 000",
                unit: "за м²",
                description: "VIP-сервис с авторским надзором",
                features: [
                  "Всё из пакета Стандарт",
                  "Авторский надзор",
                  "Индивидуальный подбор мебели",
                  "Декорирование",
                  "Приоритетная поддержка",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`text-center ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.unit}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-primary mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                  <span>info@designstudio.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                  <span>г. Москва, ул. Тверская, 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                  <span>Пн-Пт: 10:00-19:00</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Опишите ваш проект"
                      rows={4}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Palette" className="h-6 w-6" />
              <span className="text-xl font-bold">DesignStudio</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                © 2024 DesignStudio. Все права защищены.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
