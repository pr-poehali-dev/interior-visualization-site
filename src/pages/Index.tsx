import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Cube" size={32} className="text-slate-700" />
              <h1 className="text-2xl font-bold text-slate-900">InteriorViz</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contacts"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button>Заказать проект</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональная 3D-визуализация интерьеров
              </h2>
              <p className="text-xl mb-8 text-slate-300">
                Создаём фотореалистичные изображения ваших будущих интерьеров.
                Посмотрите, как будет выглядеть ваша квартира до начала ремонта.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  Посмотреть портфолио
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/29e55fa0-f1cd-4ebf-ba5a-4ab17ad88497.jpg"
                alt="3D визуализация гостиной"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Каждый проект — это уникальное решение, созданное с учётом ваших
              пожеланий и особенностей помещения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/29e55fa0-f1cd-4ebf-ba5a-4ab17ad88497.jpg"
                alt="Гостиная"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Современная гостиная</CardTitle>
                <CardDescription>
                  Минималистичный дизайн с акцентом на комфорт
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/d201eaaf-8073-45ed-86a5-abbf183df2a1.jpg"
                alt="Кухня"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Кухня премиум-класса</CardTitle>
                <CardDescription>
                  Элегантность и функциональность
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/9cef275b-d5a5-4dba-9f77-ad595a2a98d7.jpg"
                alt="Спальня"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Спальня в стиле лофт</CardTitle>
                <CardDescription>Уют и стиль в каждой детали</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600">
              Профессиональная 3D-визуализация интерьеров квартир
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Icon
                  name="Home"
                  size={48}
                  className="text-slate-700 mx-auto"
                />
              </div>
              <CardHeader>
                <CardTitle>Визуализация гостиной</CardTitle>
                <CardDescription>
                  Создаём фотореалистичные изображения вашей будущей гостиной с
                  детальной проработкой каждого элемента
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Icon
                  name="ChefHat"
                  size={48}
                  className="text-slate-700 mx-auto"
                />
              </div>
              <CardHeader>
                <CardTitle>Визуализация кухни</CardTitle>
                <CardDescription>
                  Показываем, как будет выглядеть ваша кухня с выбранной мебелью
                  и техникой
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Icon name="Bed" size={48} className="text-slate-700 mx-auto" />
              </div>
              <CardHeader>
                <CardTitle>Визуализация спальни</CardTitle>
                <CardDescription>
                  Создаём атмосферу уюта и комфорта в вашей будущей спальне
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Цены</h2>
            <p className="text-xl text-slate-600">
              Выберите подходящий пакет услуг
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  ₽15,000
                </div>
                <CardDescription>за комнату</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    2 ракурса
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Базовое освещение
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Срок 5-7 дней
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Заказать
                </Button>
              </CardContent>
            </Card>
            <Card className="p-8 border-2 border-slate-900 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-sm">
                Популярный
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандартный</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  ₽25,000
                </div>
                <CardDescription>за комнату</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    4 ракурса
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Реалистичное освещение
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Детализация текстур
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Срок 3-5 дней
                  </li>
                </ul>
                <Button className="w-full mt-6">Заказать</Button>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  ₽40,000
                </div>
                <CardDescription>за комнату</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    6 ракурсов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Студийное освещение
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Максимальная детализация
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Панорамный вид 360°
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    Срок 2-3 дня
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-slate-300">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Phone"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-slate-300">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-slate-300">info@interiorviz.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8 text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-slate-300 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-slate-300">
                  г. Москва, ул. Дизайнерская, 15
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Cube" size={24} className="text-slate-400" />
            <span className="text-lg font-semibold">InteriorViz</span>
          </div>
          <p className="text-slate-400">
            &copy; 2024 InteriorViz. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
