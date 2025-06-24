import { useTranslations } from 'next-intl';
import { Project as ProjectType } from '@/types';
import { techs } from '@/data/skills';
import { media } from '@/data/media';

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  const t = useTranslations('projects');
  const { id, hasImage, techs: projectTechs, links } = project;

  const mapLinks = (links: ProjectType['links']) => {
    return Object.entries(links).map(([key, value]) => {
      let href = '';
      
      if (key === 'live') {
        href = `https://${value}`;
      } else if (key === 'figma') {
        href = `https://figma.com/community/file/${value}`;
      } else if (key === 'github') {
        href = value.startsWith('/') ? `${media.github}${value}` : `https://${value}`;
      }

      const className = key === 'cached' ? 'button__secondary' : '';
      const name = key.charAt(0).toUpperCase() + key.slice(1);

      return (
        <a key={key} href={href} className={`button ${className}`}>
          {name} =&gt;
        </a>
      );
    });
  };

  return (
    <div className="project">
      {hasImage && (
        <img 
          src={`https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop`}
          alt={t(`${id}.name`)} 
          className="project__image"
        />
      )}
      
      <ul className="project__techs">
        {projectTechs.map((tech) => (
          <li key={tech} className="project__tech">
            {techs[tech] || tech}
          </li>
        ))}
      </ul>

      <div className="project__content">
        <div className="project__name">{t(`${id}.name`)}</div>
        <div className="project__description">{t(`${id}.description`)}</div>
        <div className="project__links">{mapLinks(links)}</div>
      </div>
    </div>
  );
}