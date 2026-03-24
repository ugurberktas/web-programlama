import { Project } from '../types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch('/data/projects.json');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
  }
  
  const data: Project[] = await response.json();
  return data;
};
