import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const menuItems = ["Оборудование", "Услуги", "О компании", "Контакты"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top bar with address and WhatsApp */}
      <div className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-2">
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
              <span className="text-sm hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/95e28b32-bc73-4c82-ae4a-a7dd4b294934.png"
              alt="ГК Энергия"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Phone and CTA */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-3">
              <Icon name="Phone" size={20} className="text-blue-400" />
              <a
                href="tel:+78003500295"
                className="text-white font-medium text-lg hover:text-blue-300 transition-colors"
              >
                +7 800 350-02-95
              </a>
            </div>

            <Button
              variant="ghost"
              className="text-blue-400 hover:bg-blue-400/20 hover:text-blue-300 border border-transparent"
            >
              Связаться
            </Button>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
