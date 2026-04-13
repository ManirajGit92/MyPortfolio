import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="back-to-top"
      [class.visible]="isVisible"
      (click)="scrollTop()"
      aria-label="Scroll back to top"
      id="back-to-top-btn"
    >
      <i class="ri-arrow-up-line"></i>
    </button>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .back-to-top {
      position: fixed;
      bottom: 32px;
      right: 32px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--gradient-primary);
      color: #fff;
      border: none;
      @include flex;
      font-size: 1.3rem;
      cursor: pointer;
      z-index: 500;
      opacity: 0;
      transform: translateY(20px);
      transition: all var(--transition-base);
      box-shadow: var(--shadow-md), var(--shadow-glow);

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg), var(--shadow-glow);
      }

      @include breakpoint(md) { bottom: 20px; right: 20px; width: 42px; height: 42px; }
    }
  `]
})
export class BackToTopComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isVisible = window.scrollY > 400;
    });
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
