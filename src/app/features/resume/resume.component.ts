import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
<section id="resume" class="section section-bg">
  <div class="container">
    <div class="section-header" appScrollReveal>
      <div class="section-tag">Resume</div>
      <h2>My <span>Curriculum Vitae</span></h2>
      <p>A comprehensive overview of my career, skills, and contributions to the software industry.</p>
    </div>

    <div class="resume-wrapper" appScrollReveal>
      <!-- Resume Preview Card -->
      <div class="resume-card card card-lg">
        <div class="resume-card__left">
          <div class="resume-preview">
            <div class="resume-preview__header">
              <div class="preview-line preview-line--title"></div>
              <div class="preview-line preview-line--sub"></div>
            </div>
            <div class="resume-preview__section">
              <div class="preview-line preview-line--sm"></div>
              <div class="preview-line preview-line--md"></div>
              <div class="preview-line preview-line--lg"></div>
              <div class="preview-line preview-line--md"></div>
            </div>
            <div class="resume-preview__section">
              <div class="preview-line preview-line--sm"></div>
              <div class="preview-line preview-line--lg"></div>
              <div class="preview-line preview-line--md"></div>
            </div>
            <div class="resume-pdf-icon">
              <i class="ri-file-pdf-2-line"></i>
            </div>
          </div>
        </div>

        <div class="resume-card__right">
          <div class="resume-card__info">
            <h3>Maniraj</h3>
            <p class="resume-title">Senior Angular Developer | Frontend Engineer</p>
            <p class="resume-desc">
              My resume details 5+ years of frontend engineering experience, showcasing
              Angular expertise, enterprise project deliveries, leadership, and a
              deep passion for clean, scalable architecture.
            </p>

            <div class="resume-highlights">
              <div class="resume-highlight">
                <i class="ri-check-line"></i>
                <span>5+ years of Angular development</span>
              </div>
              <div class="resume-highlight">
                <i class="ri-check-line"></i>
                <span>Enterprise & product company experience</span>
              </div>
              <div class="resume-highlight">
                <i class="ri-check-line"></i>
                <span>Frontend Architecture & Team Leadership</span>
              </div>
              <div class="resume-highlight">
                <i class="ri-check-line"></i>
                <span>Available for global opportunities</span>
              </div>
            </div>

            <div class="resume-actions">
              <a class="btn btn-primary btn-lg" id="resume-download" href="/assets/resume/maniraj-resume.pdf" download="Maniraj-Resume.pdf">
                <i class="ri-download-2-line"></i> Download Resume
              </a>
              <a class="btn btn-outline" id="resume-linkedin" href="https://linkedin.com/in/maniraj" target="_blank" rel="noopener">
                <i class="ri-linkedin-fill"></i> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .resume-wrapper { max-width: 900px; margin: 0 auto; }

    .resume-card {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 40px;
      align-items: center;

      @include breakpoint(lg) { grid-template-columns: 1fr; }
    }

    .resume-card__left { display: flex; justify-content: center; }

    .resume-preview {
      width: 200px;
      background: var(--bg-secondary);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);
      padding: 20px;
      position: relative;
      box-shadow: var(--shadow-md);

      &__header { margin-bottom: 16px; }
      &__section { margin-bottom: 16px; }
    }

    .preview-line {
      height: 8px;
      border-radius: 99px;
      background: var(--border-color);
      margin-bottom: 6px;

      &--title { width: 70%; height: 12px; background: var(--gradient-primary); }
      &--sub    { width: 50%; }
      &--sm     { width: 35%; background: rgba(99,102,241,0.3); }
      &--md     { width: 80%; }
      &--lg     { width: 100%; }
    }

    .resume-pdf-icon {
      position: absolute;
      bottom: -12px;
      right: -12px;
      width: 44px;
      height: 44px;
      background: #ef4444;
      border-radius: var(--radius-md);
      @include flex;
      color: #fff;
      font-size: 1.3rem;
      box-shadow: var(--shadow-md);
    }

    .resume-card__right h3 { font-size: 1.6rem; margin-bottom: 6px; }
    .resume-title { color: var(--color-primary-light); font-weight: 600; margin-bottom: 14px; }
    .resume-desc { font-size: 0.92rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px; }

    .resume-highlights {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 28px;
    }

    .resume-highlight {
      @include flex(row, center, flex-start);
      gap: 8px;
      font-size: 0.88rem;
      color: var(--text-secondary);

      i { color: var(--color-secondary); }
    }

    .resume-actions {
      @include flex(row, center, flex-start);
      gap: 12px;
      flex-wrap: wrap;
    }
  `]
})
export class ResumeComponent {}
