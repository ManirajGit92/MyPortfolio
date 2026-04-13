import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() revealClass = 'reveal';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    const revealClasses = this.revealClass
      .split(/\s+/)
      .map(className => className.trim())
      .filter(Boolean);

    if (revealClasses.length > 0) {
      element.classList.add(...revealClasses);
    }

    if (this.revealDelay > 0) {
      element.style.transitionDelay = `${this.revealDelay}s`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.classList.add('visible');
            observer.unobserve(element);
          }
        });
      },
      { threshold: this.revealThreshold }
    );

    observer.observe(element);
  }
}
