import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-screen" [class.fade-out]="fadeOut" [class.hidden]="hidden" aria-hidden="true">
      <div class="loading-content">
        <div class="loading-logo">
          <span class="bracket">&lt;</span>
          <span class="name">M</span>
          <span class="bracket">/&gt;</span>
        </div>
        <div class="loading-bar">
          <div class="loading-bar__fill"></div>
        </div>
        <p class="loading-text">Building experience...</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-screen {
      position: fixed;
      inset: 0;
      background: var(--bg-primary);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.6s ease;

      &.fade-out { opacity: 0; pointer-events: none; }
      &.hidden   { display: none; }
    }

    .loading-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .loading-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 3rem;
      font-weight: 800;
      animation: pulse 1.2s ease infinite;

      .bracket { background: linear-gradient(135deg,#6366f1,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .name     { color: var(--text-primary); margin: 0 4px; }
    }

    .loading-bar {
      width: 200px;
      height: 3px;
      background: var(--border-color);
      border-radius: 99px;
      overflow: hidden;
    }

    .loading-bar__fill {
      height: 100%;
      background: linear-gradient(135deg, #6366f1, #06b6d4);
      border-radius: 99px;
      animation: loadingProgress 1.8s ease forwards;
    }

    .loading-text {
      font-size: 0.85rem;
      color: var(--text-muted);
      letter-spacing: 1px;
    }
  `]
})
export class LoadingScreenComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();
  fadeOut = false;
  hidden = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.hidden = true;
        this.loaded.emit();
      }, 600);
    }, 2000);
  }
}
