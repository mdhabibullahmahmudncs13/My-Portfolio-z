import { useTranslations } from 'next-intl';
import MediaIcon from './MediaIcon';
import Logo from './Logo';
import { media } from '@/data/media';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__header">
              <Logo />
              <a className="footer__email" href={media.email}>
                {media.emailRaw}
              </a>
            </div>
            <p className="footer__description">{t('description')}</p>
          </div>
          
          <div className="footer__media">
            <div className="footer__title">{t('media')}</div>
            <div className="footer__list">
              {["figma", "github", "discord"].map((name) => (
                <MediaIcon key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer__copyright">© {t('copyright')}</div>
      </div>
    </footer>
  );
}