"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, Mail, User } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./../app/Images/Aura Logo-01.png";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkBackground(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const target = document.querySelector("#dark-background-trigger");
    if (target) observer.observe(target);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (target) observer.unobserve(target);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home, external: false },
    { name: "About", href: "/About", icon: Info, external: true },
    { name: "Solutions", href: "/Solutions", icon: User, external: false },
    { name: "Contact", href: "/Contact", icon: Mail, external: true },
  ];

  const linkColor = isDarkBackground
    ? "text-white hover:text-white"
    : "text-black hover:text-black";

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <div
        className={`transition-all duration-700 ease-out rounded-2xl ${
          isScrolled
            ? "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/20"
            : "bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg shadow-black/10"
        }`}
      >
        <div className="px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="inline-block">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="h-8 w-auto transition-opacity duration-300 hover:opacity-80"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) =>
                  item.external ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${linkColor}`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon size={16} />
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${linkColor}`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon size={16} />
                        {item.name}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="transition-all duration-300 hover:scale-105 bg-slate-700 text-white hover:bg-slate-800">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${linkColor}`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden rounded-b-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/10 backdrop-blur-2xl border-t border-white/20"
                : "bg-white/20 backdrop-blur-lg border-t border-white/30"
            }`}
          >
            <div className="px-6 pt-2 pb-4 space-y-1">
              {navItems.map((item) =>
                item.external ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${linkColor}`}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${linkColor}`}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </a>
                )
              )}
              <div className="px-3 py-2 cursor-pointer">
                <Link
                  href="https://wa.me/94754745359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
