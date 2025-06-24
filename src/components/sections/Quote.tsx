import { useTranslations } from 'next-intl';

export default function Quote() {
  const t = useTranslations('pages.home.quote');

  return (
    <figure className="quote">
      <blockquote className="quote__text">{t('text')}</blockquote>
      <figcaption className="quote__author">{t('author')}</figcaption>
    </figure>
  );
}