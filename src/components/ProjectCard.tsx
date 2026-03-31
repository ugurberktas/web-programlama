import type { FC } from 'react';
import type { Project } from '../types/project';
import Card from './Card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 group">
      <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">Görsel Yok</div>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
            Öne Çıkan
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h2 className="text-xl font-bold leading-tight">{project.title}</h2>
          <span className="text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 px-2.5 py-1 rounded-full whitespace-nowrap">
            {project.year}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, index) => (
              <span 
                key={index} 
                className="text-[11px] font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2.5 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
