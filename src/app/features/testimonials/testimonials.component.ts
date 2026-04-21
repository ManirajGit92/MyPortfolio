import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { Testimonial } from '../../core/models/site-content.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private readonly siteContent = inject(SiteContentService);
  current = signal(0);

  get testimonials(): Testimonial[] {
    return this.siteContent.content().testimonials.testimonials;
  }

  prev(): void {
    this.current.update(c => (c - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next(): void {
    this.current.update(c => (c + 1) % this.testimonials.length);
  }

  goTo(i: number): void {
    this.current.set(i);
  }
}

