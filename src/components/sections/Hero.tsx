'use client';

import { useTranslations } from 'next-intl';
import Dots from '../Dots';

export default function Hero() {
  const t = useTranslations('pages.home.hero');

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 
          className="hero__title"
          dangerouslySetInnerHTML={{ __html: t('title') }}
        />
        <div className="hero__description">{t('description')}</div>
        <a className="button button__primary" href="#contacts">
          {t('button')} =>
        </a>
      </div>
      
      <div className="hero__illustrations">
        <img 
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
          alt="" 
          className="hero__logo"
        />
        <img 
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
          alt="Elias" 
          className="hero__image"
        />
        <div className="hero__status">{t('status')}</div>
        <Dots />
      </div>
    </section>
  );
}