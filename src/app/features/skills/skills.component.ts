import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { SkillCategory } from '../../core/models/site-content.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly siteContent = inject(SiteContentService);
  activeTab = signal('frontend');

  get categories(): SkillCategory[] {
    return this.siteContent.content().skills.categories;
  }

  get activeCategory(): SkillCategory {
    return this.categories.find(c => c.id === this.activeTab())!;
  }

  setTab(id: string): void {
    this.activeTab.set(id);
  }
}
