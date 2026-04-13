import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About',        id: 'about' },
    { label: 'Skills',       id: 'skills' },
    { label: 'Experience',   id: 'experience' },
    { label: 'Projects',     id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Blog',         id: 'blog' },
    { label: 'Contact',      id: 'contact' },
  ];

  socials = [
    { icon: 'ri-linkedin-fill',  label: 'LinkedIn', href: 'https://linkedin.com/in/maniraj' },
    { icon: 'ri-github-fill',    label: 'GitHub',   href: 'https://github.com/maniraj' },
    { icon: 'ri-youtube-fill',   label: 'YouTube',  href: 'https://youtube.com' },
    { icon: 'ri-mail-fill',      label: 'Email',    href: 'mailto:maniraj@email.com' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
