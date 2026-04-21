import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { BlogArticle } from '../../core/models/site-content.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  private readonly siteContent = inject(SiteContentService);

  get articles(): BlogArticle[] {
    return this.siteContent.content().blog.articles;
  }
}

