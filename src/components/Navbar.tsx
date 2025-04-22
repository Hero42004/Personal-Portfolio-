import { useState, useEffect } from "react";

const navItems = [{
  name: "Home",
  href: "#home"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Tools",
  href: "#tools"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Contact",
  href: "#contact"
}];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? "bg-dark/95 shadow-lg backdrop-blur-sm py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-2xl md:text-3xl font-bold text-teal mr-6 transition-all duration-300 hover:scale-105 hover:text-teal/80"
            >
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href.substring(1));
          }} className={`text-sm font-medium transition-colors hover:text-teal ${activeSection === item.href.substring(1) ? "text-teal" : "text-light"}`}>
                {item.name}
              </a>)}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-light hover:text-teal focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="md:hidden bg-gray-900 shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
          e.preventDefault();
          scrollToSection(item.href.substring(1));
        }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.href.substring(1) ? "text-teal bg-gray-800" : "text-light hover:text-teal hover:bg-gray-800"}`}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </nav>
  );
};

export default Navbar;
