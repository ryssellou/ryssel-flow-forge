import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const videoEl = document.getElementById("video-section");
    if (!videoEl) return;

    // Hide navbar while video section is visible; show for all other sections
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-3xl ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full px-5 py-2 border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        >
          <img
            src="/favicon-portfolio.png"
            alt="Ry Calaor Logo"
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:bg-gray-100 rounded-full"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
