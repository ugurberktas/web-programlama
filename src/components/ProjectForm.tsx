import { useState } from 'react';
import type { FormEvent, ChangeEvent, FC } from 'react';
import type { Category, Project } from '../types/project';
import Input from './Input';
import Button from './Button';

export interface ProjectFormData extends Omit<Project, 'id' | 'tech' | 'featured' | 'image'> {}

interface ProjectFormProps {
  onAddProject: (project: ProjectFormData) => void;
}

const ProjectForm: FC<ProjectFormProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<Category>('frontend');
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!title.trim() || !description.trim() || !year) return;

    onAddProject({
      title,
      description,
      category,
      year
    });

    // Reset fields
    setTitle('');
    setDescription('');
    setCategory('frontend');
    setYear(new Date().getFullYear());
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-10 border border-gray-100 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Yeni Proje Ekle</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input 
            id="title"
            label="Proje Başlığı"
            placeholder="Örn: E-Ticaret Uygulaması"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required
          />
          
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="year" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Yıl
            </label>
            <input 
              type="number"
              id="year"
              className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors"
              value={year}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(Number(e.target.value))}
              min={1990}
              max={2100}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Açıklama
          </label>
          <textarea 
            id="description"
            className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors bg-transparent min-h-[100px] resize-y placeholder:text-gray-400"
            placeholder="Projenin detaylarını ve amacını buraya yazın..."
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Kategori
          </label>
          <select 
            id="category"
            className="flex w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-900 transition-colors"
            value={category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}
            required
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </div>

        <div className="pt-2 flex justify-end">
          <Button type="submit">
            Projeyi Ekle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
