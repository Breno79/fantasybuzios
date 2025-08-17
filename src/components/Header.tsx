import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitch } from './LanguageSwitch';
import { Menu, X } from 'lucide-react';
const translations = {
  pt: {
    home: 'Home',
    pousada: 'Pousada',
    quartos: 'Quartos',
    cidade: 'Cidade',
    contato: 'Contato'
  },
  en: {
    home: 'Home',
    pousada: 'Inn',
    quartos: 'Rooms',
    cidade: 'City',
    contato: 'Contact'
  },
  es: {
    home: 'Inicio',
    pousada: 'Posada',
    quartos: 'Habitaciones',
    cidade: 'Ciudad',
    contato: 'Contacto'
  }
};
interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}
export const Header = ({
  currentLang,
  onLanguageChange
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className="fixed top-0 w-full bg-[#3e5650] z-50 shadow-villa">
      <div className="container mx-auto px-4 bg-[#3e5650]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/3d0de395-82ac-4f80-a743-c071bbd6370e.png" alt="Fantasy Búzios Guesthouse" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[{
            key: 'home',
            id: 'hero'
          }, {
            key: 'pousada',
            id: 'pousada'
          }, {
            key: 'quartos',
            id: 'quartos'
          }, {
            key: 'cidade',
            id: 'cidade'
          }, {
            key: 'contato',
            id: 'contato'
          }].map(({
            key,
            id
          }) => <button key={key} onClick={() => scrollToSection(id)} className="text-primary-foreground hover:text-secondary transition-elegant font-medium">
                {t[key as keyof typeof t]}
              </button>)}
          </nav>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitch currentLang={currentLang} onLanguageChange={onLanguageChange} />
            
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-primary-foreground hover:bg-primary-foreground/10">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <nav className="py-4 space-y-2">
              {[{
            key: 'home',
            id: 'hero'
          }, {
            key: 'pousada',
            id: 'pousada'
          }, {
            key: 'quartos',
            id: 'quartos'
          }, {
            key: 'cidade',
            id: 'cidade'
          }, {
            key: 'contato',
            id: 'contato'
          }].map(({
            key,
            id
          }) => <button key={key} onClick={() => scrollToSection(id)} className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10 transition-elegant">
                  {t[key as keyof typeof t]}
                </button>)}
            </nav>
          </div>}
      </div>
    </header>;
};