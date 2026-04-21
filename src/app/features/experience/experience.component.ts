import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { ExperienceItem } from '../../core/models/site-content.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly siteContent = inject(SiteContentService);

  get experiences(): ExperienceItem[] {
    return this.siteContent.content().experience.experiences;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}

