'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('pages.about.about');

  return (
    <section className="about">
      <div className="about__illustrations">
        <img 
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
          alt="" 
          className="about__image"
        />
      </div>
      
      <div className="about__text">
        {t.raw('description').map((text: string, index: number) => (
          <p key={index} className="about__description">{text}</p>
        ))}
      </div>
    </section>
  );
}