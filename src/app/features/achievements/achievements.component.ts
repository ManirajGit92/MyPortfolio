import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  achievements = [
    { icon: 'ri-trophy-line', color: '#f59e0b', title: 'Frontend Team Lead', description: 'Successfully led frontend modules serving thousands of enterprise users across Canada and India.' },
    { icon: 'ri-layout-masonry-line', color: '#6366f1', title: 'Reusable Architecture Builder', description: 'Built shared Angular component libraries adopted as the standard across multiple enterprise projects.' },
    { icon: 'ri-code-s-slash-line', color: '#06b6d4', title: 'Angular Expert', description: 'Deep expertise in the complete Angular ecosystem — from AngularJS to latest Angular 17+ standalone components.' },
    { icon: 'ri-presentation-line', color: '#a855f7', title: 'Tech Conference Participant', description: 'Attended major technology conferences in Delhi and Chennai, expanding domain knowledge and networking.' },
    { icon: 'ri-brain-line', color: '#22c55e', title: 'AI & DevOps Enthusiast', description: 'Actively pursuing knowledge in AI (TensorFlow), DevOps practices, and automation to stay ahead of the curve.' },
    { icon: 'ri-book-open-line', color: '#f97316', title: 'Continuous Learner', description: '365-day learning mindset — consistently upskilling through projects, tutorials, and personal experimentation.' },
    { icon: 'ri-git-merge-line', color: '#ec4899', title: 'Git Mastery', description: 'Advanced Git workflow expertise including branching strategies, code reviews, and CI/CD collaboration.' },
    { icon: 'ri-youtube-line', color: '#ef4444', title: 'Knowledge Sharer', description: 'Passionate about sharing Angular knowledge through technical blogging, YouTube content, and peer mentoring.' },
  ];
}
