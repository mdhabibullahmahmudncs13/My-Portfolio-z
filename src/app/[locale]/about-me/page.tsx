import { useTranslations } from 'next-intl';
import Path from '@/components/Path';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Facts from '@/components/sections/Facts';

export default function AboutPage() {
  const t = useTranslations('pages.about');

  return (
    <>
      <Path description={t('description')} />
      <AboutSection />
      <SkillsSection />
      <Facts />
    </>
  );
}