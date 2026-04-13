import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

interface Skill { name: string; icon: string; level: number; color?: string; }
interface SkillCategory { id: string; label: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  activeTab = signal('frontend');

  categories: SkillCategory[] = [
    {
      id: 'frontend', label: 'Frontend', icon: 'ri-layout-2-line',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain', level: 95, color: '#dd0031' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 92, color: '#3178c6' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 90, color: '#f7df1e' },
        { name: 'RxJS', icon: 'ri-flashlight-line', level: 88, color: '#b7178c' },
        { name: 'HTML5', icon: 'devicon-html5-plain', level: 95, color: '#e34f26' },
        { name: 'CSS3 / SCSS', icon: 'devicon-css3-plain', level: 90, color: '#264de4' },
        { name: 'Responsive Design', icon: 'ri-smartphone-line', level: 92, color: '#06b6d4' },
      ]
    },
    {
      id: 'backend', label: 'Backend & DB', icon: 'ri-server-line',
      skills: [
        { name: 'C#', icon: 'devicon-csharp-plain', level: 78, color: '#9b4f96' },
        { name: 'ASP.NET', icon: 'devicon-dot-net-plain', level: 72, color: '#512bd4' },
        { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', level: 80, color: '#cc2927' },
        { name: 'Oracle DB', icon: 'devicon-oracle-original', level: 70, color: '#f80000' },
        { name: 'Firebase', icon: 'devicon-firebase-plain', level: 75, color: '#ffca28' },
      ]
    },
    {
      id: 'tools', label: 'Tools & DevOps', icon: 'ri-tools-line',
      skills: [
        { name: 'Git & GitHub', icon: 'devicon-git-plain', level: 90, color: '#f05032' },
        { name: 'VS Code', icon: 'devicon-vscode-plain', level: 95, color: '#007acc' },
        { name: 'Postman', icon: 'devicon-postman-plain', level: 85, color: '#ff6c37' },
        { name: 'Talend ETL', icon: 'ri-database-2-line', level: 72, color: '#6366f1' },
        { name: 'npm / Node', icon: 'devicon-npm-original-wordmark', level: 82, color: '#cb3837' },
      ]
    },
    {
      id: 'other', label: 'Other', icon: 'ri-lightbulb-line',
      skills: [
        { name: 'AI Concepts', icon: 'ri-brain-line', level: 65, color: '#a855f7' },
        { name: 'TensorFlow', icon: 'devicon-tensorflow-original', level: 50, color: '#ff6f00' },
        { name: 'Automation', icon: 'ri-robot-line', level: 70, color: '#06b6d4' },
        { name: 'Agile / Scrum', icon: 'ri-team-line', level: 85, color: '#6366f1' },
        { name: 'Component Design', icon: 'ri-layout-masonry-line', level: 92, color: '#22d3ee' },
      ]
    }
  ];

  get activeCategory(): SkillCategory {
    return this.categories.find(c => c.id === this.activeTab())!;
  }

  setTab(id: string): void {
    this.activeTab.set(id);
  }
}
