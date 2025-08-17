import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PousadaSection } from '@/components/PousadaSection';
import { QuartosSection } from '@/components/QuartosSection';
import { CidadeSection } from '@/components/CidadeSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [currentLang, setCurrentLang] = useState('pt');

  return (
    <div className="min-h-screen">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
      />
      <HeroSection currentLang={currentLang} />
      <PousadaSection currentLang={currentLang} />
      <QuartosSection currentLang={currentLang} />
      <CidadeSection currentLang={currentLang} />
      <ContatoSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
