import Project from './Project';
import { Project as ProjectType } from '@/types';

interface ProjectListProps {
  title?: string;
  projects: ProjectType[];
}

export default function ProjectList({ title, projects }: ProjectListProps) {
  const sortedProjects = [...projects]
    .sort((a, b) => (a.hasImage ? 0 : 1) - (b.hasImage ? 0 : 1));

  return (
    <div>
      {title && <h2 className="h2">{title}</h2>}
      <div className="project-list">
        {sortedProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}