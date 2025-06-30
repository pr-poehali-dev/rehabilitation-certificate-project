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
  const steps = [
    {
      number: "1",
      title: "Подача заявления",
      description: "Подача заявления, документов и заполнение анкеты-опросника",
    },
    {
      number: "2",
      title: "Звонок оператора",
      description: "Звонок оператора для уточнения потребностей в услугах",
    },
    {
      number: "3",
      title: "Выдача сертификата",
      description: "Выдача сертификата",
    },
    {
      number: "4",
      title: "Получение услуги",
      description: "Получение услуги",
    },
  ];

  const categories = [
    "Военнослужащие",
    "Лица, заключившие контракт о добровольном содействии в выполнении задач",
    "Лица, проходящие службу в войсках национальной гвардии",
    "Военнослужащие органов федеральной службы безопасности",
    "Лица, заключившие контракт с организациями (ЧВК)",
    "Лица, принимавшие участие в боевых действиях на территории РФ",
  ];

  const services = [
    "Социально-медицинская реабилитация",
    "Стоматологическая помощь (зубопротезирование)",
    "Социальное обслуживание",
    "Предоставление в прокат технических средств реабилитации",
    "Профессиональное обучение и дополнительное профессиональное образование",
    "Содействие в трудоустройстве",
    "Физкультурно-оздоровительные мероприятия",
    "Культурно-досуговые мероприятия",
    "Содействие в установлении инвалидности",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-russian-blue/5 to-russian-red/5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-russian-blue to-russian-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Shield" className="mr-3" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold">
              РЕАБИЛИТАЦИОННЫЙ СЕРТИФИКАТ
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            ДЛЯ УЧАСТНИКОВ СПЕЦИАЛЬНОЙ ВОЕННОЙ ОПЕРАЦИИ
          </p>
          <p className="text-lg mb-8 opacity-80">
            Получивших ранения (травмы, увечья, контузии)
          </p>
          <Button
            size="lg"
            className="bg-white text-russian-blue hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Icon name="FileText" className="mr-2" size={20} />
            Подать заявку на получение сертификата
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Steps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-russian-blue">
            Пошаговая инструкция получения сертификата
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-russian-blue/20 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-russian-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg text-russian-blue">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Who Can Get Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-russian-blue">
            Кто может получить реабилитационный сертификат
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-russian-red/20 hover:border-russian-red/40 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      className="text-russian-red mt-1 flex-shrink-0"
                      size={16}
                    />
                    <p className="text-sm">{category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-russian-red/10 to-russian-blue/10 border-russian-blue/30">
            <CardHeader>
              <CardTitle className="text-2xl text-russian-blue flex items-center">
                <Icon name="AlertCircle" className="mr-3" size={24} />
                Обязательные условия для получения сертификата
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon
                    name="MapPin"
                    className="mx-auto mb-3 text-russian-red"
                    size={32}
                  />
                  <h3 className="font-semibold mb-2">Полученное увечье</h3>
                  <p className="text-sm text-gray-600">
                    В ходе проведения СВО с 24 февраля 2022 года
                  </p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Home"
                    className="mx-auto mb-3 text-russian-red"
                    size={32}
                  />
                  <h3 className="font-semibold mb-2">Проживание</h3>
                  <p className="text-sm text-gray-600">
                    На территории Новосибирской области
                  </p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Flag"
                    className="mx-auto mb-3 text-russian-red"
                    size={32}
                  />
                  <h3 className="font-semibold mb-2">Гражданство</h3>
                  <p className="text-sm text-gray-600">Российской Федерации</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-russian-blue">
            Состав реабилитационного сертификата
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-3 text-center text-sm border-russian-blue/30 hover:bg-russian-blue/10 transition-colors"
              >
                {service}
              </Badge>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-russian-blue to-russian-red text-white">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Куда подать заявление
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Icon name="Building" className="mx-auto mb-3" size={32} />
                  <h3 className="font-semibold mb-2">
                    Министерство труда и социального развития
                  </h3>
                  <p className="text-sm opacity-90">
                    г. Новосибирск, ул. Серебренниковская, 6
                  </p>
                  <p className="text-sm opacity-90">Телефон: (383) 238-75-10</p>
                </div>
                <div>
                  <Icon name="Globe" className="mx-auto mb-3" size={32} />
                  <h3 className="font-semibold mb-2">
                    МФЦ и другие организации
                  </h3>
                  <p className="text-sm opacity-90">
                    Отделы социального обслуживания населения
                  </p>
                  <p className="text-sm opacity-90">
                    Фонд "Защитники Отечества"
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-white text-russian-blue hover:bg-gray-100"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Подать заявку онлайн
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
