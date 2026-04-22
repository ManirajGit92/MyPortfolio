import { Injectable, signal } from '@angular/core';
import { doc, onSnapshot, setDoc, type Firestore } from 'firebase/firestore';

import { DEFAULT_SITE_CONTENT } from '../content/default-site-content';
import type { SiteContent, SiteContentKey } from '../models/site-content.model';
import { getFirestoreDb, isFirebaseConfigured } from '../firebase/firebase';

const STORAGE_KEY = 'portfolio.siteContent.v1';
const FIRESTORE_DOC_PATH = { collection: 'siteContent', doc: 'default' } as const;

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  readonly content = signal<SiteContent>(DEFAULT_SITE_CONTENT);
  readonly firestoreConnected = signal(false);
  readonly firestoreError = signal<string | null>(null);

  private firestore: Firestore | null = null;

  constructor() {
    this.loadFromStorage();
    this.initFirestore();
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
    this.persistFirestorePartial(key, value);
  }

  resetSection(key: SiteContentKey): void {
    this.setSection(key, DEFAULT_SITE_CONTENT[key]);
  }

  resetAll(): void {
    this.content.set(DEFAULT_SITE_CONTENT);
    this.removeStorage();
    this.persistFirestoreAll(DEFAULT_SITE_CONTENT);
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
    this.persistFirestoreAll(next);
  }

  private initFirestore(): void {
    if (typeof window === 'undefined') return;
    if (!isFirebaseConfigured()) return;

    const db = getFirestoreDb();
    if (!db) return;
    this.firestore = db;

    const ref = doc(this.firestore, FIRESTORE_DOC_PATH.collection, FIRESTORE_DOC_PATH.doc);
    onSnapshot(
      ref,
      (snap) => {
        if (!snap.exists()) {
          this.firestoreConnected.set(true);
          this.firestoreError.set(null);
          return;
        }
        const data = snap.data() as Partial<SiteContent>;
        this.content.set(this.mergeWithDefaults(data));
        this.firestoreConnected.set(true);
        this.firestoreError.set(null);
      },
      (err) => {
        this.firestoreConnected.set(false);
        this.firestoreError.set(err?.message ?? 'Firestore subscription failed');
      }
    );
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

  private persistFirestorePartial<K extends SiteContentKey>(key: K, value: SiteContent[K]): void {
    if (!this.firestore) return;
    const ref = doc(this.firestore, FIRESTORE_DOC_PATH.collection, FIRESTORE_DOC_PATH.doc);
    void setDoc(ref, { [key]: value } as Partial<SiteContent>, { merge: true })
      .then(() => {
        this.firestoreConnected.set(true);
        this.firestoreError.set(null);
      })
      .catch((err) => {
        this.firestoreConnected.set(false);
        this.firestoreError.set(err?.message ?? 'Firestore write failed');
      });
  }

  private persistFirestoreAll(value: SiteContent): void {
    if (!this.firestore) return;
    const ref = doc(this.firestore, FIRESTORE_DOC_PATH.collection, FIRESTORE_DOC_PATH.doc);
    void setDoc(ref, value, { merge: true })
      .then(() => {
        this.firestoreConnected.set(true);
        this.firestoreError.set(null);
      })
      .catch((err) => {
        this.firestoreConnected.set(false);
        this.firestoreError.set(err?.message ?? 'Firestore write failed');
      });
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
      navbar: { ...DEFAULT_SITE_CONTENT.navbar, ...(override.navbar ?? {}) },
      hero: { ...DEFAULT_SITE_CONTENT.hero, ...(override.hero ?? {}) },
      about: { ...DEFAULT_SITE_CONTENT.about, ...(override.about ?? {}) },
      skills: { ...DEFAULT_SITE_CONTENT.skills, ...(override.skills ?? {}) },
      experience: { ...DEFAULT_SITE_CONTENT.experience, ...(override.experience ?? {}) },
      projects: { ...DEFAULT_SITE_CONTENT.projects, ...(override.projects ?? {}) },
      achievements: { ...DEFAULT_SITE_CONTENT.achievements, ...(override.achievements ?? {}) },
      testimonials: { ...DEFAULT_SITE_CONTENT.testimonials, ...(override.testimonials ?? {}) },
      blog: { ...DEFAULT_SITE_CONTENT.blog, ...(override.blog ?? {}) },
      contact: { ...DEFAULT_SITE_CONTENT.contact, ...(override.contact ?? {}) },
      resume: { ...DEFAULT_SITE_CONTENT.resume, ...(override.resume ?? {}) },
    };
  }
}
