import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { Achievement } from '../../core/models/site-content.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  private readonly siteContent = inject(SiteContentService);

  get achievements(): Achievement[] {
    return this.siteContent.content().achievements.achievements;
  }
}

