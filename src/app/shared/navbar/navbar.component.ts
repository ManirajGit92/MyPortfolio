import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  isScrolled = false;
  isMobileOpen = false;
  activeSection = 'hero';

  navLinks = [
    { id: 'about',        label: 'About' },
    { id: 'skills',       label: 'Skills' },
    { id: 'experience',   label: 'Experience' },
    { id: 'projects',     label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'resume',       label: 'Resume' },
    { id: 'blog',         label: 'Blog' },
    { id: 'contact',      label: 'Contact' },
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.setupScrollSpy();
  }

  private onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  private setupScrollSpy(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.activeSection = e.target.id;
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    ['hero', ...this.navLinks.map(l => l.id)].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileOpen = false;
    }
  }

  toggleMobile(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/resume/maniraj-resume.pdf';
    link.download = 'Maniraj-Resume.pdf';
    link.click();
  }
}
