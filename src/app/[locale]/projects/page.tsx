import { useTranslations } from 'next-intl';
import Path from '@/components/Path';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const t = useTranslations('pages.projects');

  return (
    <>
      <Path description={t('description')} />
      <ProjectList 
        title={t('decent')} 
        projects={projects.filter(p => !p.isSmall)} 
      />
      <ProjectList 
        title={t('small')} 
        projects={projects.filter(p => p.isSmall && !p.isInProgress)} 
      />
    </>
  );
}