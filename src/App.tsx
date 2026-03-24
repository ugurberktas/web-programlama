import React, { useState, useEffect } from 'react';
import { Project, Category, SortField, SortOrder } from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

import Input from './components/Input';
import Button from './components/Button';
import Alert from './components/Alert';
import Card from './components/Card';

const categories: (Category | 'all')[] = ['all', 'frontend', 'backend', 'fullstack'];

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
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

  const filteredProjects = applyFilters(projects, {
    search,
    category,
    sortField,
    sortOrder
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
          Projelerimiz
        </h1>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5 justify-end">
              <Input 
                id="search-input"
                label="Proje Ara" 
                placeholder="Başlık, açıklama veya teknoloji..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col gap-1.5 flex-1">
              <label htmlFor="sort-field-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sırala (Alan)
              </label>
              <select 
                id="sort-field-select"
                className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors"
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
              >
                <option value="year">Yıl</option>
                <option value="title">Başlık</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <label htmlFor="sort-order-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sırala (Yön)
              </label>
              <select 
                id="sort-order-select"
                className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              >
                <option value="desc">Azalan (Yeni/Z-A)</option>
                <option value="asc">Artan (Eski/A-Z)</option>
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
                  variant={category === cat ? 'primary' : 'secondary'}
                  onClick={() => setCategory(cat)}
                  size="sm"
                  className={category !== cat ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 outline-none' : ''}
                >
                  {cat === 'all' ? 'Tümü' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 group">
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
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {project.tech.map((t, index) => (
                    <span 
                      key={index} 
                      className="text-[11px] font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
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
                setSearch('');
                setCategory('all');
                setSortField('year');
                setSortOrder('desc');
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
