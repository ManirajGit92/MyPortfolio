import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { FIREBASE_OPTIONS } from './firebase.options';

export function isFirebaseConfigured(): boolean {
  return Boolean(FIREBASE_OPTIONS.apiKey && FIREBASE_OPTIONS.projectId && FIREBASE_OPTIONS.appId);
}

export function getFirebaseApp() {
  if (!isFirebaseConfigured()) return null;
  return getApps().length ? getApp() : initializeApp(FIREBASE_OPTIONS);
}

export function getFirestoreDb() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

