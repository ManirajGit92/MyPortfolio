import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteContentService } from '../../core/services/site-content.service';
import type { SocialLink } from '../../core/models/site-content.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly siteContent = inject(SiteContentService);
  displayedText = '';
  private titles: string[] = this.siteContent.content().hero.titles;
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;

  particles: Array<{ x: number; y: number; size: number; delay: number; duration: number }> = [];

  constructor() {
    effect(() => {
      const hero = this.siteContent.content().hero;
      this.titles = hero.titles?.length ? hero.titles : this.titles;
    });
  }

  ngOnInit(): void {
    this.initParticles();
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimer);
  }

  private initParticles(): void {
    this.particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 6,
      duration: Math.random() * 8 + 6
    }));
  }

  private type(): void {
    const current = this.titles[this.currentIndex];
    const speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting) {
      this.displayedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      }
    }

    this.typeTimer = setTimeout(() => this.type(), speed);
  }

  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  get badgeText(): string {
    return this.siteContent.content().hero.badgeText;
  }

  get name(): string {
    return this.siteContent.content().hero.name;
  }

  get tagline(): string {
    return this.siteContent.content().hero.tagline;
  }

  get resumeUrl(): string {
    return this.siteContent.content().hero.resumeUrl;
  }

  get profileImage(): string {
    return this.siteContent.content().hero.profileImage;
  }

  get socialLinks(): SocialLink[] {
    return this.siteContent.content().hero.socialLinks;
  }

  get heroStats(): Array<{ value: string; label: string }> {
    return this.siteContent.content().hero.stats;
  }
}
