import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SiteContentService } from '../../core/services/site-content.service';
import type { SiteContentKey } from '../../core/models/site-content.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  private readonly siteContent = inject(SiteContentService);

  keys: SiteContentKey[] = this.siteContent.keys();
  selectedKey: SiteContentKey = 'about';
  editorText = '';
  status: { type: 'idle' | 'ok' | 'error'; message: string } = { type: 'idle', message: '' };

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
  }
}
