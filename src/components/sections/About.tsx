import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function About() {
  const t = useTranslations('pages.home.about');
  const locale = useLocale();

  return (
    <section className="about">
      <div className="about__content">
        <h2 className="h2">{t('title')}</h2>
        <div className="about__text">
          {t.raw('description').map((text: string, index: number) => (
            <p key={index} className="about__description">{text}</p>
          ))}
        </div>
        <Link href={`/${locale}/about-me`} className="button">
          {t('button')} -&gt;
        </Link>
      </div>
      
      <img 
        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=340&h=400&fit=crop" 
        alt="" 
        className="about__image"
      />
    </section>
  );
}