import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  current = signal(0);

  testimonials = [
    {
      name: 'Ravi Sharma',
      role: 'Senior Backend Engineer',
      company: 'SI Systems',
      initials: 'RS',
      color: '#6366f1',
      quote: 'Maniraj is one of the most talented Angular developers I\'ve worked with. His ability to architect reusable component systems saved our team months of development time and significantly improved code consistency across the platform.'
    },
    {
      name: 'Priya Menon',
      role: 'Product Manager',
      company: 'Matchguide',
      initials: 'PM',
      color: '#06b6d4',
      quote: 'Working with Maniraj was an absolute pleasure. He doesn\'t just write code—he thinks deeply about user experience and business impact. He proactively identified performance bottlenecks and resolved them before they became issues.'
    },
    {
      name: 'David Wilson',
      role: 'CTO',
      company: 'Logistics Enterprise',
      initials: 'DW',
      color: '#a855f7',
      quote: 'Maniraj delivered our logistics dashboard well ahead of schedule. His cross-stack skills across AngularJS, Groovy, and Oracle were impressive. He was the glue that kept our technical team moving in the right direction.'
    },
    {
      name: 'Anitha Kumar',
      role: 'Tech Lead',
      company: 'Frontend Team',
      initials: 'AK',
      color: '#22c55e',
      quote: 'Maniraj\'s passion for clean code and best practices is unparalleled. He mentored our junior developers with patience and clarity. His component library became the backbone of our entire frontend development workflow.'
    }
  ];

  prev(): void { this.current.update(c => (c - 1 + this.testimonials.length) % this.testimonials.length); }
  next(): void { this.current.update(c => (c + 1) % this.testimonials.length); }
  goTo(i: number): void { this.current.set(i); }
}
