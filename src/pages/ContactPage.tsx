import { Contact } from '../components/Contact';
import { Language } from '../types';

interface ContactPageProps {
  language: Language;
}

export function ContactPage({ language }: ContactPageProps) {
  return (
    <div className="pt-20">
      <Contact language={language} />
    </div>
  );
}
