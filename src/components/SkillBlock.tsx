'use client';

import { useTranslations } from 'next-intl';
import { skills, techs } from '@/data/skills';

interface SkillBlockProps {
  id: string;
}

export default function SkillBlock({ id }: SkillBlockProps) {
  const t = useTranslations('skills');

  return (
    <div className="skill-block">
      <div className="skill-block__name">{t(id)}</div>
      <ul className="skill-block__list">
        {skills[id]?.map((techIndex) => (
          <li key={techIndex} className="skill-block__skill">
            {techs[techIndex] || techIndex}
          </li>
        ))}
      </ul>
    </div>
  );
}