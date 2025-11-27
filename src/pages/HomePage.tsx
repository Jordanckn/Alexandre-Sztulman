import { Language } from '../types';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';

interface HomePageProps {
  language: Language;
  onContactClick: () => void;
}

export function HomePage({ language, onContactClick }: HomePageProps) {
  return (
    <>
      <Hero language={language} onContactClick={onContactClick} />
      <About language={language} />
      <Expertise language={language} />
    </>
  );
}
