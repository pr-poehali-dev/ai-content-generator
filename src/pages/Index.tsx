import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('реализм')
  const [generatedImage, setGeneratedImage] = useState('')

  const styles = [
    { id: 'реализм', name: 'Реализм', icon: 'Camera', color: 'bg-purple' },
    { id: 'мультфильм', name: 'Мультфильм', icon: 'Palette', color: 'bg-vibrant' },
    { id: '3d-pixar', name: '3D Pixar', icon: 'Box', color: 'bg-green' },
    { id: 'аниме', name: 'Аниме', icon: 'Heart', color: 'bg-purple' }
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '0₽',
      period: 'навсегда',
      features: ['10 изображений в месяц', '1 видео в месяц', 'Базовые стили', 'Стандартное качество'],
      button: 'Начать бесплатно',
      popular: false
    },
    {
      name: 'Premium',
      price: '1990₽',
      period: 'в месяц',
      features: ['Безлимитные изображения', 'Безлимитные видео', 'Все стили и пресеты', 'HD качество', 'API доступ', 'Приоритетная генерация'],
      button: 'Попробовать Premium',
      popular: true
    }
  ]

  const artistProfiles = [
    {
      name: 'Анна Иванова',
      avatar: '/img/0087a2b8-7201-401d-ad77-ad612130cee0.jpg',
      specialty: 'Цифровая живопись',
      works: 124,
      followers: '2.1k',
      style: 'реализм'
    },
    {
      name: 'Максим Петров',
      avatar: '/img/0087a2b8-7201-401d-ad77-ad612130cee0.jpg',
      specialty: '3D моделирование',
      works: 89,
      followers: '1.8k',
      style: '3d-pixar'
    },
    {
      name: 'София Козлова',
      avatar: '/img/0087a2b8-7201-401d-ad77-ad612130cee0.jpg',
      specialty: 'Анимация',
      works: 156,
      followers: '3.2k',
      style: 'аниме'
    }
  ]

  const galleryWorks = [
    {
      id: 1,
      title: 'Космический пейзаж',
      artist: 'Анна Иванова',
      style: 'реализм',
      likes: 342,
      image: '/img/58e49f7a-b8db-4766-b113-189b4be6e065.jpg'
    },
    {
      id: 2,
      title: 'Абстрактная композиция',
      artist: 'Максим Петров',
      style: 'мультфильм',
      likes: 278,
      image: '/img/58e49f7a-b8db-4766-b113-189b4be6e065.jpg'
    },
    {
      id: 3,
      title: 'Портрет в стиле аниме',
      artist: 'София Козлова',
      style: 'аниме',
      likes: 456,
      image: '/img/58e49f7a-b8db-4766-b113-189b4be6e065.jpg'
    }
  ]

  const handleGenerate = () => {
    // Симуляция генерации
    setGeneratedImage('/img/58e49f7a-b8db-4766-b113-189b4be6e065.jpg')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-vibrant-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-vibrant to-purple p-2 rounded-xl">
                <Icon name="Sparkles" className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-vibrant to-purple bg-clip-text text-transparent">
                AI Creative Studio
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="hover:text-purple">Главная</Button>
              <Button variant="ghost" className="hover:text-purple">Генератор</Button>
              <Button variant="ghost" className="hover:text-purple">Галерея</Button>
              <Button variant="ghost" className="hover:text-purple">Тарифы</Button>
              <Button className="bg-gradient-to-r from-vibrant to-purple hover:opacity-90">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-vibrant via-purple to-green bg-clip-text text-transparent">
              Создавайте искусство с помощью ИИ
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная платформа для генерации изображений и видео. 
              Превратите ваши идеи в потрясающие визуальные произведения с помощью передовых AI-технологий.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-vibrant to-purple hover:opacity-90">
                <Icon name="Zap" className="mr-2 h-5 w-5" />
                Начать создавать
              </Button>
              <Button size="lg" variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Generator Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Генератор AI-контента</h3>
            <p className="text-muted-foreground">Опишите свою идею и получите уникальное изображение или видео</p>
          </div>

    <div className="max-w-4xl mx-auto">
      <Card className="border-2 border-purple/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Sparkles" className="h-5 w-5 text-purple" />
            <span>AI Генератор</span>
          </CardTitle>
          <CardDescription>
            Создайте изображение или видео из текстового описания
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Описание изображения</label>
            <Textarea
              placeholder="Например: Космический пейзаж с яркими звездами и туманностями в стиле реализм..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Стиль изображения</label>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style) => (
                  <Button
                    key={style.id}
                    variant={selectedStyle === style.id ? "default" : "outline"}
                    className={`justify-start h-auto p-3 ${
                      selectedStyle === style.id 
                        ? 'bg-gradient-to-r from-vibrant to-purple text-white' 
                        : 'hover:border-purple'
                    }`}
                    onClick={() => setSelectedStyle(style.id)}
                  >
                    <Icon name={style.icon as any} className="mr-2 h-4 w-4" />
                    <span className="text-sm">{style.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Тип контента</label>
              <Select defaultValue="image">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">
                    <div className="flex items-center">
                      <Icon name="Image" className="mr-2 h-4 w-4" />
                      Изображение
                    </div>
                  </SelectItem>
                  <SelectItem value="video">
                    <div className="flex items-center">
                      <Icon name="Video" className="mr-2 h-4 w-4" />
                      Видео (60 сек)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-vibrant to-purple hover:opacity-90"
            size="lg"
          >
            <Icon name="Wand2" className="mr-2 h-5 w-5" />
            Сгенерировать изображение
          </Button>

          {generatedImage && (
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden border">
                <img 
                  src={generatedImage} 
                  alt="Generated artwork" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Icon name="Download" className="mr-2 h-4 w-4" />
                    Скачать
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="Share2" className="mr-2 h-4 w-4" />
                    Поделиться
                  </Button>
                </div>
                <Badge variant="secondary" className="bg-green/10 text-green">
                  Готово
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Галерея работ</h3>
              <p className="text-muted-foreground">Вдохновляйтесь работами талантливых художников</p>
            </div>
            <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white">
              Все работы
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryWorks.map((work) => (
              <Card key={work.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-purple border-0">
                      {work.style}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">{work.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">от {work.artist}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Icon name="Heart" className="h-4 w-4" />
                      <span>{work.likes}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="hover:text-purple">
                      <Icon name="Eye" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Artist Profiles */}
          <div className="bg-white/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Популярные художники</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artistProfiles.map((artist, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={artist.avatar} alt={artist.name} />
                      <AvatarFallback>{artist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h5 className="font-semibold mb-1">{artist.name}</h5>
                    <p className="text-sm text-muted-foreground mb-3">{artist.specialty}</p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <div>
                        <div className="font-semibold">{artist.works}</div>
                        <div className="text-muted-foreground">работ</div>
                      </div>
                      <div>
                        <div className="font-semibold">{artist.followers}</div>
                        <div className="text-muted-foreground">подписчиков</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="mt-4 border-purple text-purple hover:bg-purple hover:text-white">
                      Подписаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Тарифные планы</h3>
            <p className="text-muted-foreground">Выберите подходящий план для ваших творческих потребностей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-vibrant to-purple text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple mb-2">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="h-4 w-4 text-green mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-vibrant to-purple hover:opacity-90' 
                        : 'variant-outline border-purple text-purple hover:bg-purple hover:text-white'
                    }`}
                  >
                    {plan.button}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Dashboard Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Личный кабинет</h3>
            <p className="text-muted-foreground">Управляйте своими проектами и отслеживайте прогресс</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-purple/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/img/0087a2b8-7201-401d-ad77-ad612130cee0.jpg" />
                      <AvatarFallback>ИП</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-xl font-semibold">Иван Петров</h4>
                      <p className="text-muted-foreground">Premium аккаунт</p>
                    </div>
                  </div>
                  <Badge className="bg-green/10 text-green">Активен</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stats" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="stats">Статистика</TabsTrigger>
                    <TabsTrigger value="projects">Проекты</TabsTrigger>
                    <TabsTrigger value="settings">Настройки</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stats" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-purple">142</div>
                          <div className="text-sm text-muted-foreground">Изображений создано</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-vibrant">23</div>
                          <div className="text-sm text-muted-foreground">Видео создано</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-green">89%</div>
                          <div className="text-sm text-muted-foreground">Успешных генераций</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Использование лимита (текущий месяц)</h5>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Изображения</span>
                            <span>45/∞</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Видео</span>
                            <span>12/∞</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="projects" className="mt-6">
                    <div className="text-center py-8">
                      <Icon name="FolderOpen" className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h5 className="font-semibold mb-2">Ваши проекты появятся здесь</h5>
                      <p className="text-muted-foreground mb-4">Создайте свой первый проект, чтобы начать</p>
                      <Button className="bg-gradient-to-r from-vibrant to-purple hover:opacity-90">
                        <Icon name="Plus" className="mr-2 h-4 w-4" />
                        Новый проект
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold mb-3">Настройки профиля</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-1 block">Имя</label>
                            <Input defaultValue="Иван Петров" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1 block">Email</label>
                            <Input defaultValue="ivan@example.com" />
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h5 className="font-semibold mb-3">Предпочтения генерации</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Стиль по умолчанию</label>
                            <Select defaultValue="реализм">
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {styles.map((style) => (
                                  <SelectItem key={style.id} value={style.id}>
                                    {style.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-vibrant to-purple p-2 rounded-xl">
                  <Icon name="Sparkles" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">AI Creative Studio</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Революционная платформа для создания визуального контента с помощью искусственного интеллекта.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Генератор изображений</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Генератор видео</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мобильное приложение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Руководства</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Icon name="Twitter" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Icon name="Github" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 AI Creative Studio. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index