import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const menuItems = ["Оборудование", "Услуги", "О компании", "Контакты"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Main header - made narrower */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://cdn.poehali.dev/files/95e28b32-bc73-4c82-ae4a-a7dd4b294934.png"
                alt="ГК Энергия"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Menu with location and WhatsApp */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Location and WhatsApp moved here */}
              <div className="flex items-center space-x-6 pl-6 border-l border-slate-600">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-slate-400" />
                  <span className="text-slate-300 text-sm">г. Воронеж</span>
                </div>
                <a
                  href="https://wa.me/78003500295"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="MessageCircle" size={16} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
