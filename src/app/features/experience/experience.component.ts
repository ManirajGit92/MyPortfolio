import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Frontend Software Developer',
      company: 'Matchguide (Canada)',
      period: '2022 – Present',
      type: 'Full-Time',
      icon: 'ri-code-s-slash-line',
      color: '#6366f1',
      description: 'Led frontend development for Matchguide, a cutting-edge staffing business platform serving Canadian markets. Architected scalable Angular solutions with reusable component systems, enhancing product quality and team velocity.',
      highlights: [
        'Migrated legacy Angular modules to latest Angular with standalone components',
        'Built configurable, reusable UI component library shared across 5+ modules',
        'Implemented performance optimizations reducing load time by 40%',
        'Collaborated with product and backend teams in Agile sprint cycles',
        'Established frontend coding standards and PR review processes',
      ],
      tech: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs', 'Git']
    },
    {
      role: 'Frontend Lead Developer',
      company: 'SI Systems',
      period: '2020 – 2022',
      type: 'Full-Time',
      icon: 'ri-team-line',
      color: '#06b6d4',
      description: 'Led a frontend team across multiple enterprise application modules. Owned UI architecture decisions, mentored junior developers, and built the generic component library that became the foundation of the entire application.',
      highlights: [
        'Led team of 4 developers across CRM and reporting modules',
        'Designed and implemented generic reusable table, dialog, and form components',
        'Reduced development time by 35% through shared component architecture',
        'Integrated complex data visualization with charts and dashboards',
        'Coordinated with offshore and onshore teams for timely delivery',
      ],
      tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'SQL', 'C#']
    },
    {
      role: 'Full-Stack Developer – Logistics Systems',
      company: 'Logistics Enterprise',
      period: '2018 – 2020',
      type: 'Full-Time',
      icon: 'ri-truck-line',
      color: '#a855f7',
      description: 'Developed and maintained internal and external logistics web applications. Worked across the full stack with ETL pipelines, database management, and frontend dashboards for real-time logistics tracking.',
      highlights: [
        'Built AngularJS dashboards for logistics tracking and reporting',
        'Developed Talend ETL jobs for large-scale data integration pipelines',
        'Maintained Oracle database stored procedures and performance tuning',
        'Implemented Groovy/Grails REST services for backend integration',
        'Delivered customer-facing portal for shipment tracking',
      ],
      tech: ['AngularJS', 'Groovy', 'Grails', 'Talend ETL', 'Oracle', 'JavaScript']
    }
  ];
}
