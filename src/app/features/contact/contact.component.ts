import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { SiteContentService } from '../../core/services/site-content.service';
import type { ContactLink } from '../../core/models/site-content.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly siteContent = inject(SiteContentService);
  form: FormGroup;
  submitted = signal(false);
  sending = signal(false);

  get contactLinks(): ContactLink[] {
    return this.siteContent.content().contact.contactLinks;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    // Simulate async send
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1800);
  }

  resetForm(): void {
    this.submitted.set(false);
    this.form.reset();
  }
}
