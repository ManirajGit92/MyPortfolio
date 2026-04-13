import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;
  submitted = signal(false);
  sending = signal(false);

  contactLinks = [
    { icon: 'ri-mail-send-line', label: 'Email', value: 'maniraj@email.com', href: 'mailto:maniraj@email.com', color: '#6366f1' },
    { icon: 'ri-linkedin-fill', label: 'LinkedIn', value: 'linkedin.com/in/maniraj', href: 'https://linkedin.com/in/maniraj', color: '#0077b5' },
    { icon: 'ri-github-fill', label: 'GitHub', value: 'github.com/maniraj', href: 'https://github.com/maniraj', color: '#6e777e' },
    { icon: 'ri-map-pin-line', label: 'Location', value: 'India (Open to Remote & Relocation)', href: '#', color: '#06b6d4' },
  ];

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
