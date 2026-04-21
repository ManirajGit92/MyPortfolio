import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { Project, ProjectFilter } from '../../core/models/site-content.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly siteContent = inject(SiteContentService);

  searchQuery = signal('');
  activeFilter = signal('all');

  get filters(): ProjectFilter[] {
    return this.siteContent.content().projects.filters;
  }

  get projects(): Project[] {
    return this.siteContent.content().projects.projects;
  }

  get filteredProjects(): Project[] {
    let result = this.projects;
    const q = this.searchQuery().toLowerCase();

    if (this.activeFilter() !== 'all') {
      result = result.filter(p => p.category.includes(this.activeFilter()));
    }

    if (q) {
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }

  setFilter(f: string): void {
    this.activeFilter.set(f);
  }

  onSearch(q: string): void {
    this.searchQuery.set(q);
  }
}

