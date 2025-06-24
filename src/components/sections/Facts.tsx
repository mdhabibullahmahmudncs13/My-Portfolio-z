'use client';

import { useTranslations } from 'next-intl';

export default function Facts() {
  const t = useTranslations('pages.about.facts');

  return (
    <section className="facts">
      <h2 className="h2">{t('title')}</h2>
      <div className="facts__content">
        <ul className="facts__list">
          {t.raw('list').map((fact: string, index: number) => (
            <li key={index} className="fact">{fact}</li>
          ))}
        </ul>
        <div className="facts__illustrations"></div>
      </div>
    </section>
  );
}