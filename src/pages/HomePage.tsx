import { Language } from '../types';
import { Hero } from '../components/Hero';
import { AboutSummary } from '../components/AboutSummary';
import { Expertise } from '../components/Expertise';

interface HomePageProps {
  language: Language;
  onContactClick: () => void;
}

export function HomePage({ language, onContactClick }: HomePageProps) {
  return (
    <>
      <Hero language={language} onContactClick={onContactClick} />
      <AboutSummary language={language} />
      <Expertise language={language} />
    </>
  );
}
