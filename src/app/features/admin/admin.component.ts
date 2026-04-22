import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SiteContentService } from '../../core/services/site-content.service';
import type { SiteContentKey } from '../../core/models/site-content.model';
import { isFirebaseConfigured } from '../../core/firebase/firebase';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  readonly siteContent = inject(SiteContentService);
  readonly firebaseConfigured = isFirebaseConfigured();

  keys: SiteContentKey[] = this.siteContent.keys();
  selectedKey: SiteContentKey = 'about';
  editorText = '';
  status: { type: 'idle' | 'ok' | 'error'; message: string } = { type: 'idle', message: '' };

  navbarControls = { brandName: '' };
  heroControls = {
    badgeText: '',
    name: '',
    titlesText: '',
    tagline: '',
    profileImage: '',
    resumeUrl: '',
  };
  resumeControls = {
    name: '',
    title: '',
    description: '',
    highlightsText: '',
    pdfUrl: '',
    pdfFileName: '',
    linkedinUrl: '',
  };

  constructor() {
    this.loadEditorFromSelectedKey();
  }

  onSelectedKeyChange(key: SiteContentKey): void {
    this.selectedKey = key;
    this.loadEditorFromSelectedKey();
  }

  save(): void {
    const key = this.selectedKey;
    try {
      const parsed = JSON.parse(this.editorText);
      this.siteContent.setSection(key, parsed);
      this.status = { type: 'ok', message: 'Saved. Changes are visible immediately.' };
    } catch (e: any) {
      this.status = { type: 'error', message: e?.message ?? 'Invalid JSON' };
    }
  }

  resetSection(): void {
    const key = this.selectedKey;
    this.siteContent.resetSection(key);
    this.loadEditorFromSelectedKey();
    this.status = { type: 'ok', message: 'Section reset to defaults.' };
  }

  resetAll(): void {
    this.siteContent.resetAll();
    this.loadEditorFromSelectedKey();
    this.status = { type: 'ok', message: 'All content reset to defaults.' };
  }

  exportAll(): void {
    const text = this.siteContent.exportAllJson();
    navigator.clipboard?.writeText(text);
    this.status = { type: 'ok', message: 'Copied full content JSON to clipboard.' };
  }

  importAll(): void {
    try {
      this.siteContent.importAllJson(this.editorText);
      this.loadEditorFromSelectedKey();
      this.status = { type: 'ok', message: 'Imported full content. Site updated.' };
    } catch (e: any) {
      this.status = { type: 'error', message: e?.message ?? 'Import failed' };
    }
  }

  private loadEditorFromSelectedKey(): void {
    const value = this.siteContent.getSection(this.selectedKey);
    this.editorText = JSON.stringify(value, null, 2);
    this.status = { type: 'idle', message: '' };
    this.syncControlsFromSection(value);
  }

  applyControlsToEditor(): void {
    try {
      const current = this.getEditorObject();
      const next = this.mergeSectionWithControls(current);
      this.editorText = JSON.stringify(next, null, 2);
      this.status = { type: 'ok', message: 'Controls applied to editor. Click Save to persist.' };
    } catch (e: any) {
      this.status = { type: 'error', message: e?.message ?? 'Failed to apply controls' };
    }
  }

  private getEditorObject(): any {
    const parsed = JSON.parse(this.editorText || '{}');
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON: expected an object');
    return parsed;
  }

  private syncControlsFromSection(sectionValue: any): void {
    if (!sectionValue || typeof sectionValue !== 'object') return;

    if (this.selectedKey === 'navbar') {
      this.navbarControls.brandName = String(sectionValue.brandName ?? '');
    }

    if (this.selectedKey === 'hero') {
      this.heroControls.badgeText = String(sectionValue.badgeText ?? '');
      this.heroControls.name = String(sectionValue.name ?? '');
      this.heroControls.tagline = String(sectionValue.tagline ?? '');
      this.heroControls.profileImage = String(sectionValue.profileImage ?? '');
      this.heroControls.resumeUrl = String(sectionValue.resumeUrl ?? '');
      const titles = Array.isArray(sectionValue.titles) ? sectionValue.titles : [];
      this.heroControls.titlesText = titles.join('\n');
    }

    if (this.selectedKey === 'resume') {
      this.resumeControls.name = String(sectionValue.name ?? '');
      this.resumeControls.title = String(sectionValue.title ?? '');
      this.resumeControls.description = String(sectionValue.description ?? '');
      this.resumeControls.pdfUrl = String(sectionValue.pdfUrl ?? '');
      this.resumeControls.pdfFileName = String(sectionValue.pdfFileName ?? '');
      this.resumeControls.linkedinUrl = String(sectionValue.linkedinUrl ?? '');
      const highlights = Array.isArray(sectionValue.highlights) ? sectionValue.highlights : [];
      this.resumeControls.highlightsText = highlights.join('\n');
    }
  }

  private mergeSectionWithControls(sectionValue: any): any {
    if (!sectionValue || typeof sectionValue !== 'object') return sectionValue;

    if (this.selectedKey === 'navbar') {
      return {
        ...sectionValue,
        brandName: this.navbarControls.brandName,
      };
    }

    if (this.selectedKey === 'hero') {
      const titles = this.splitLines(this.heroControls.titlesText);
      return {
        ...sectionValue,
        badgeText: this.heroControls.badgeText,
        name: this.heroControls.name,
        titles,
        tagline: this.heroControls.tagline,
        profileImage: this.heroControls.profileImage,
        resumeUrl: this.heroControls.resumeUrl,
      };
    }

    if (this.selectedKey === 'resume') {
      const highlights = this.splitLines(this.resumeControls.highlightsText);
      return {
        ...sectionValue,
        name: this.resumeControls.name,
        title: this.resumeControls.title,
        description: this.resumeControls.description,
        highlights,
        pdfUrl: this.resumeControls.pdfUrl,
        pdfFileName: this.resumeControls.pdfFileName,
        linkedinUrl: this.resumeControls.linkedinUrl,
      };
    }

    return sectionValue;
  }

  private splitLines(text: string): string[] {
    return (text || '')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);
  }
}
