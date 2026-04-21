import { Injectable, signal } from '@angular/core';

import { DEFAULT_SITE_CONTENT } from '../content/default-site-content';
import type { SiteContent, SiteContentKey } from '../models/site-content.model';

const STORAGE_KEY = 'portfolio.siteContent.v1';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  readonly content = signal<SiteContent>(DEFAULT_SITE_CONTENT);

  constructor() {
    this.loadFromStorage();
  }

  keys(): SiteContentKey[] {
    return Object.keys(DEFAULT_SITE_CONTENT) as SiteContentKey[];
  }

  getSection<K extends SiteContentKey>(key: K): SiteContent[K] {
    return this.content()[key];
  }

  setSection<K extends SiteContentKey>(key: K, value: SiteContent[K]): void {
    const next: SiteContent = { ...this.content(), [key]: value } as SiteContent;
    this.content.set(next);
    this.persist();
  }

  resetSection(key: SiteContentKey): void {
    this.setSection(key, DEFAULT_SITE_CONTENT[key]);
  }

  resetAll(): void {
    this.content.set(DEFAULT_SITE_CONTENT);
    this.removeStorage();
  }

  exportAllJson(): string {
    return JSON.stringify(this.content(), null, 2);
  }

  importAllJson(text: string): void {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON: expected an object');

    const next = this.mergeWithDefaults(parsed as Partial<SiteContent>);
    this.content.set(next);
    this.persist();
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return;
      this.content.set(this.mergeWithDefaults(parsed as Partial<SiteContent>));
    } catch {
      // ignore corrupted storage
    }
  }

  private persist(): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.content()));
    } catch {
      // ignore storage write errors (quota, disabled, etc.)
    }
  }

  private removeStorage(): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  private mergeWithDefaults(override: Partial<SiteContent>): SiteContent {
    return {
      about: { ...DEFAULT_SITE_CONTENT.about, ...(override.about ?? {}) },
      skills: { ...DEFAULT_SITE_CONTENT.skills, ...(override.skills ?? {}) },
      experience: { ...DEFAULT_SITE_CONTENT.experience, ...(override.experience ?? {}) },
      projects: { ...DEFAULT_SITE_CONTENT.projects, ...(override.projects ?? {}) },
      achievements: { ...DEFAULT_SITE_CONTENT.achievements, ...(override.achievements ?? {}) },
      testimonials: { ...DEFAULT_SITE_CONTENT.testimonials, ...(override.testimonials ?? {}) },
      blog: { ...DEFAULT_SITE_CONTENT.blog, ...(override.blog ?? {}) },
      contact: { ...DEFAULT_SITE_CONTENT.contact, ...(override.contact ?? {}) },
    };
  }
}

