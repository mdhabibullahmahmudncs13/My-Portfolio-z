'use client';

import { useTranslations } from 'next-intl';
import SkillBlock from '../SkillBlock';
import { skills } from '@/data/skills';

export default function SkillsSection() {
  const t = useTranslations('pages.about.skills');

  return (
    <section className="skills">
      <h2 className="h2">{t('title')}</h2>
      <div className="skills__content">
        {Object.keys(skills).map((id) => (
          <SkillBlock key={id} id={id} />
        ))}
      </div>
    </section>
  );
}