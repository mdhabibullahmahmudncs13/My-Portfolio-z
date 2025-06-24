'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import MediaIcon from './MediaIcon';
import Logo from './Logo';

const paths = ['/', '/projects', '/about-me'];

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="header">
      <input 
        className="hamburger" 
        type="checkbox" 
        aria-label="Menu"
        checked={isMenuOpen}
        onChange={(e) => setIsMenuOpen(e.target.checked)}
      />

      <div className="media-header">
        <span className="media-header__line"></span>
        <div className="media-header__links">
          {["discord", "github", "email"].map((name) => (
            <MediaIcon key={name} name={name} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="header__inner">
          <Logo />
          
          <div className="header__links">
            {paths.map((path) => (
              <Link 
                key={path}
                href={`/${locale}${path}`} 
                className={`header__link ${
                  currentPath === path ? 'header__link_active' : ''
                }`}
              >
                {t(path === '/' ? 'home' : path.slice(1).replace('-', ''))}
              </Link>
            ))}
          </div>

          <div className="dropdown">
            <span className="dropdown__label">{locale}</span>
            <div className="dropdown__list">
              {['en', 'ru', 'ua'].filter(l => l !== locale).map((l) => (
                <div 
                  key={l}
                  className="dropdown__option"
                  onClick={() => handleLocaleChange(l)}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}