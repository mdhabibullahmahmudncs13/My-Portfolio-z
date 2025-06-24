'use client';

import { useTranslations } from 'next-intl';
import Dots from '../Dots';
import SkillBlock from '../SkillBlock';
import { skills } from '@/data/skills';

export default function Skills() {
  const t = useTranslations('pages.home.skills');

  return (
    <section className="skills">
      <h2 className="h2">{t('title')}</h2>
      <div className="skills__content">
        <div className="skills__illustrations illustrations">
          <img 
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
            alt="" 
            className="illustrations__logo"
          />
          <Dots width={4} height={4} />
          <Dots width={6} height={6} />
        </div>
        
        <div className="skills__list">
          {Object.keys(skills)
            .filter(id => id !== "tool")
            .map((id) => (
              <SkillBlock key={id} id={id} />
            ))}
        </div>
      </div>
    </section>
  );
}