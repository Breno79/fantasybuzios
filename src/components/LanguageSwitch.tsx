import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languages = {
  pt: 'PT',
  en: 'EN', 
  es: 'ES'
};

interface LanguageSwitchProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSwitch = ({ currentLang, onLanguageChange }: LanguageSwitchProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-foreground hover:bg-primary-foreground/10 transition-elegant"
      >
        <Globe className="w-4 h-4 mr-2" />
        {languages[currentLang as keyof typeof languages]}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border rounded-lg shadow-villa p-1 z-50">
          {Object.entries(languages).map(([code, label]) => (
            <Button
              key={code}
              variant="ghost"
              size="sm"
              onClick={() => {
                onLanguageChange(code);
                setIsOpen(false);
              }}
              className={`w-full justify-start ${
                currentLang === code ? 'bg-accent' : ''
              }`}
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};