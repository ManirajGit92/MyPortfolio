import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly profileImage = 'assets/images/Maniraj.png';

  stats = [
    { value: '5+', label: 'Years Experience', icon: 'ri-briefcase-line' },
    { value: '15+', label: 'Projects Delivered', icon: 'ri-code-box-line' },
    { value: '10+', label: 'Technologies', icon: 'ri-stack-line' },
    { value: '3+', label: 'Enterprise Clients', icon: 'ri-building-line' },
  ];

  interests = [
    { icon: 'ri-brain-line', label: 'Artificial Intelligence' },
    { icon: 'ri-git-branch-line', label: 'DevOps & Git' },
    { icon: 'ri-layout-masonry-line', label: 'UI Architecture' },
    { icon: 'ri-rocket-line', label: 'Scalable Systems' },
    { icon: 'ri-youtube-line', label: 'Tech Content' },
    { icon: 'ri-open-source-line', label: 'Open Source' },
  ];
}
