import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  articles = [
    {
      title: 'Mastering Angular Standalone Components in 2024',
      excerpt: 'A deep dive into Angular\'s standalone component architecture — how to structure, lazy-load, and optimize your app without NgModules.',
      category: 'Angular',
      categoryColor: '#dd0031',
      date: 'March 2024',
      readTime: '8 min read',
      icon: 'ri-article-line',
      url: '#'
    },
    {
      title: 'RxJS Operators Every Angular Developer Must Know',
      excerpt: 'From switchMap to combineLatest — a practical guide on RxJS operators that will make your reactive Angular code cleaner and more predictable.',
      category: 'RxJS',
      categoryColor: '#b7178c',
      date: 'February 2024',
      readTime: '6 min read',
      icon: 'ri-flashlight-line',
      url: '#'
    },
    {
      title: 'Building a Reusable Angular Component Library',
      excerpt: 'Step-by-step walkthrough of designing, building, and publishing a shared Angular component library for enterprise applications.',
      category: 'Architecture',
      categoryColor: '#6366f1',
      date: 'January 2024',
      readTime: '10 min read',
      icon: 'ri-layout-masonry-line',
      url: '#'
    },
    {
      title: 'Git Strategies for Frontend Teams',
      excerpt: 'From GitFlow to trunk-based development — a practical guide on choosing and implementing the right Git branching strategy for your team.',
      category: 'DevOps',
      categoryColor: '#f05032',
      date: 'December 2023',
      readTime: '7 min read',
      icon: 'ri-git-branch-line',
      url: '#'
    },
    {
      title: 'Integrating AI into Angular Applications',
      excerpt: 'Practical patterns for adding AI-powered features — chatbots, smart search, and recommendation engines — into Angular web applications.',
      category: 'AI',
      categoryColor: '#a855f7',
      date: 'November 2023',
      readTime: '9 min read',
      icon: 'ri-brain-line',
      url: '#'
    },
    {
      title: 'Performance Optimization in Angular: The Complete Guide',
      excerpt: 'Everything you need to know about making Angular apps blazing fast — lazy loading, change detection strategy, bundle optimization, and more.',
      category: 'Performance',
      categoryColor: '#06b6d4',
      date: 'October 2023',
      readTime: '12 min read',
      icon: 'ri-speed-line',
      url: '#'
    }
  ];
}
