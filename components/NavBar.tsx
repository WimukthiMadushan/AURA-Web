'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import Logo from "./../app/Images/Aura Logo-01.png"
import Image from 'next/image';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navItems = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'About', href: '#about', icon: Info },
        { name: 'Services', href: '#services', icon: User },
        { name: 'Contact', href: '#contact', icon: Mail },
      ];

      return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-5xl">
          <div 
            className={`transition-all duration-700 ease-out rounded-2xl ${
              isScrolled
                ? 'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/20'
                : 'bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg shadow-black/10'
            }`}
          >
            <div className="px-6 sm:px-8">
              <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-navbar-text' : 'text-slate-800'
                }`}>
                  <Image src={Logo} alt="Logo" className="h-8 w-auto" />
                </h1>
              </div>
    
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        isScrolled
                          ? 'text-navbar-text hover:text-navbar-text-hover hover:bg-white/10'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-white/20'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon size={16} />
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
    
              {/* CTA Button */}
              <div className="hidden md:block">
                <Button
                  className={`transition-all duration-300 hover:scale-105 bg-slate-700 text-white hover:bg-slate-800 hover:text-white`}
                  >
                  Get Started
                </Button>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`${
                    isScrolled ? 'text-navbar-text hover:text-navbar-text-hover' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className={`md:hidden rounded-b-2xl transition-all duration-300 ${
                isScrolled
                  ? 'bg-white/10 backdrop-blur-2xl border-t border-white/20'
                  : 'bg-white/20 backdrop-blur-lg border-t border-white/30'
              }`}>
                <div className="px-6 pt-2 pb-4 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                        isScrolled
                          ? 'text-white hover:text-white hover:bg-white/10'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-white/30'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </a>
                  ))}
                  <div className="px-3 py-2">
                    <Button className="w-full bg-gradient-primary text-white hover:opacity-90 rounded-lg">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
}

export default NavBar