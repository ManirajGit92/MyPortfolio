import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  tech: string[];
  icon: string;
  color: string;
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  searchQuery = signal('');
  activeFilter = signal('all');

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'tools', label: 'Tools' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Personal Life Tracking Dashboard',
      description: 'An intelligent Angular app that visualizes personal life data from Google Sheets. Features analytics cards, interactive charts for fitness, skills, mindfulness, and relationship tracking — all in a beautiful responsive dashboard.',
      category: ['frontend', 'data'],
      tech: ['Angular', 'TypeScript', 'Google Sheets API', 'Chart.js', 'RxJS'],
      icon: 'ri-dashboard-3-line',
      color: '#6366f1',
      featured: true,
      githubUrl: 'https://github.com/maniraj',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Angular Reusable UI Library',
      description: 'A production-ready shared component library featuring configurable data tables, modal dialogs, form utilities, and custom directives. Used as the foundation across multiple enterprise projects for consistent UI delivery.',
      category: ['frontend', 'tools'],
      tech: ['Angular', 'TypeScript', 'SCSS', 'Storybook', 'npm'],
      icon: 'ri-layout-masonry-line',
      color: '#06b6d4',
      featured: true,
      githubUrl: 'https://github.com/maniraj',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Git Command Visualization App',
      description: 'An interactive graphical tool for learning Git through visual flow diagrams. Shows branches, commits, merges, and command relationships in real-time, perfect for developers at any level to master version control.',
      category: ['frontend', 'tools'],
      tech: ['Angular', 'TypeScript', 'D3.js', 'SCSS'],
      icon: 'ri-git-branch-line',
      color: '#f05032',
      featured: false,
      githubUrl: 'https://github.com/maniraj',
      demoUrl: '#'
    },
    {
      id: 4,
      title: 'Company AI Chatbot',
      description: 'An AI-powered chatbot designed to handle company-specific and application-related queries. Enables employees to quickly find answers about company policies, tools, and internal systems through natural language interaction.',
      category: ['ai', 'fullstack'],
      tech: ['Angular', 'Python', 'OpenAI API', 'Firebase', 'NLP'],
      icon: 'ri-robot-2-line',
      color: '#a855f7',
      featured: true,
      githubUrl: 'https://github.com/maniraj',
      demoUrl: '#'
    },
    {
      id: 5,
      title: 'IT Training Institute Website',
      description: 'Full-featured training institution web platform with course catalog, student enrollment, batch management, inquiry system, and admin dashboard. Built with Angular and Firebase as a complete business solution.',
      category: ['fullstack', 'frontend'],
      tech: ['Angular', 'Firebase', 'TypeScript', 'SCSS', 'Cloud Firestore'],
      icon: 'ri-graduation-cap-line',
      color: '#22c55e',
      featured: false,
      githubUrl: 'https://github.com/maniraj',
      demoUrl: '#'
    }
  ];

  get filteredProjects(): Project[] {
    let result = this.projects;
    const q = this.searchQuery().toLowerCase();

    if (this.activeFilter() !== 'all') {
      result = result.filter(p => p.category.includes(this.activeFilter()));
    }

    if (q) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }

  setFilter(f: string): void { this.activeFilter.set(f); }
  onSearch(q: string): void  { this.searchQuery.set(q); }
}
