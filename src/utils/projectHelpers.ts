import { Project, Category, FilterState, SortField, SortOrder } from '../types/project';

export const filterBySearch = (projects: Project[], search: string): Project[] => {
  if (!search || search.trim() === '') {
    return projects;
  }
  const lowerSearch = search.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerSearch) ||
    project.description.toLowerCase().includes(lowerSearch) ||
    project.tech.some(t => t.toLowerCase().includes(lowerSearch))
  );
};

export const filterByCategory = (projects: Project[], category: Category | 'all'): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

export const sortProjects = (projects: Project[], sortField: SortField, sortOrder: SortOrder): Project[] => {
  return [...projects].sort((a, b) => {
    let comparison = 0;
    
    if (sortField === 'year') {
      comparison = a.year - b.year;
    } else if (sortField === 'title') {
      comparison = a.title.localeCompare(b.title);
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

export const applyFilters = (projects: Project[], filters: FilterState): Project[] => {
  let result = filterBySearch(projects, filters.search);
  result = filterByCategory(result, filters.category);
  result = sortProjects(result, filters.sortField, filters.sortOrder);
  return result;
};
