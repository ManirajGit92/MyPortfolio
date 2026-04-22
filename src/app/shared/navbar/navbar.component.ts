import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  private readonly siteContent = inject(SiteContentService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  isScrolled = false;
  isMobileOpen = false;
  activeSection = 'hero';
  readonly isAdminRoute = signal(false);

  private observer?: IntersectionObserver;

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

  get brandName(): string {
    return this.siteContent.content().navbar.brandName;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.isAdminRoute.set(this.router.url.startsWith('/admin'));
    if (!this.isAdminRoute()) setTimeout(() => this.setupScrollSpy(), 0);

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.isAdminRoute.set(this.router.url.startsWith('/admin'));
        this.isMobileOpen = false;

        if (this.isAdminRoute()) {
          this.observer?.disconnect();
          this.observer = undefined;
          return;
        }

        // Re-bind scroll spy after route renders the sections
        setTimeout(() => this.setupScrollSpy(), 0);
      });
  }

  private onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  private setupScrollSpy(): void {
    this.observer?.disconnect();
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

    this.observer = observer;
  }

  scrollTo(id: string): void {
    if (this.isAdminRoute()) {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollIntoView(id), 50);
      });
      return;
    }
    this.scrollIntoView(id);
  }

  private scrollIntoView(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isMobileOpen = false;
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

  goHome(): void {
    this.router.navigateByUrl('/');
    this.isMobileOpen = false;
  }
}
