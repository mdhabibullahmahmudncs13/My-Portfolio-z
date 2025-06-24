import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import ProjectList from '../ProjectList';
import { projects } from '@/data/projects';

export default function Projects() {
  const t = useTranslations('pages.home.projects');
  const locale = useLocale();

  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="h2">{t('title')}</h2>
        <Link className="projects__link" href={`/${locale}/projects`}>
          {t('button')} ~~&gt;
        </Link>
      </div>
      <ProjectList projects={projects.slice(0, 3)} />
    </section>
  );
}