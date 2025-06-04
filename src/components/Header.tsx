import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const menuItems = ["Оборудование", "Услуги", "О компании", "Контакты"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/89cc56b1-0744-4e7f-9cb0-a319ccfba946.jpg"
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
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
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
