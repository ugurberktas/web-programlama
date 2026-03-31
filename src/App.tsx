import { useState, useEffect, useMemo } from 'react';
import type { FC, ChangeEvent } from 'react';
import type { Project, Category, SortField, SortOrder } from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

import Input from './components/Input';
import Button from './components/Button';
import Alert from './components/Alert';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import type { ProjectFormData } from './components/ProjectForm';

const categories: (Category | 'all')[] = ['all', 'frontend', 'backend', 'fullstack'];

const App: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');
  const [sortOption, setSortOption] = useState<string>('year-desc');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Bilinmeyen bir hata oluştu.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleAddProject = (formData: ProjectFormData) => {
    const newProject: Project = {
      ...formData,
      id: Date.now(),
      tech: [],
      featured: false,
      image: ''
    };
    
    // Add new project to the beginning of the list
    setProjects(prev => [newProject, ...prev]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p className="text-xl font-medium">Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-4xl mx-auto min-h-screen">
        <Alert variant="error">{error}</Alert>
      </div>
    );
  }

  const filteredProjects = useMemo(() => {
    const [field, order] = sortOption.split('-') as [SortField, SortOrder];
    return applyFilters(projects, {
      search: searchQuery,
      category: categoryFilter,
      sortField: field,
      sortOrder: order
    });
  }, [projects, searchQuery, categoryFilter, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
          Projelerimiz
        </h1>
        
        <ProjectForm onAddProject={handleAddProject} />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5 justify-end">
              <Input 
                id="search-input"
                label="Proje Ara" 
                placeholder="Başlık, açıklama veya teknoloji..." 
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col gap-1.5 flex-1 md:col-span-2">
              <label htmlFor="sort-option-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sıralama Seçenekleri
              </label>
              <select 
                id="sort-option-select"
                className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors"
                value={sortOption}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortOption(e.target.value)}
              >
                <option value="year-desc">Yıla Göre (Yeni - Eski)</option>
                <option value="year-asc">Yıla Göre (Eski - Yeni)</option>
                <option value="title-asc">Başlığa Göre (A - Z)</option>
                <option value="title-desc">Başlığa Göre (Z - A)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
              Kategoriler
            </label>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <Button 
                   key={cat}
                   variant={categoryFilter === cat ? 'primary' : 'secondary'}
                   onClick={() => setCategoryFilter(cat)}
                   size="sm"
                   className={categoryFilter !== cat ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 outline-none' : ''}
                 >
                   {cat === 'all' ? 'Tümü' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                 </Button>
              ))}
            </div>
          </div>
        </div>

        <ProjectList projects={filteredProjects} />
        
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Kayıt Bulunamadı</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Arama kriterlerinize uygun hiçbir proje bulunmuyor.</p>
            <Button 
              className="mt-6"
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
                setSortOption('year-desc');
              }}
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
