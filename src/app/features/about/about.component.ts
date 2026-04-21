import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly siteContent = inject(SiteContentService);

  get profileImage(): string {
    return this.siteContent.content().about.profileImage;
  }

  get stats() {
    return this.siteContent.content().about.stats;
  }

  get interests() {
    return this.siteContent.content().about.interests;
  }
}
