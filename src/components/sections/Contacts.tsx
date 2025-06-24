import { useTranslations } from 'next-intl';
import MediaIcon from '../MediaIcon';
import { media } from '@/data/media';

const contacts = [
  {
    name: "discord",
    text: media.discordTag,
  },
  {
    name: "email",
    text: media.emailRaw,
  }
];

export default function Contacts() {
  const t = useTranslations('pages.home.contacts');

  return (
    <section className="contacts" id="contacts">
      <h2 className="h2">{t('title')}</h2>
      <div className="contacts__content">
        <p className="contacts__description">{t('text')}</p>
        
        <div className="contacts__media">
          <h3 className="contacts__title">{t('media')}</h3>
          <div className="contacts__list">
            {contacts.map((contact) => (
              <a key={contact.name} className="contact" href={media[contact.name as keyof typeof media]}>
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop" 
                  alt={contact.name}
                />
                <div className="contact__name">{contact.text}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}