import { About } from '../components/About';
import { Language } from '../types';

interface AboutPageProps {
  language: Language;
}

export function AboutPage({ language }: AboutPageProps) {
  return (
    <div className="pt-20">
      <About language={language} />
    </div>
  );
}
