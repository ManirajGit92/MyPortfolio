import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  theme = signal<Theme>(this.loadTheme());

  private loadTheme(): Theme {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme;
    return saved || 'dark';
  }

  init(): void {
    this.applyTheme(this.theme());
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
    localStorage.setItem(this.STORAGE_KEY, next);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }
}
