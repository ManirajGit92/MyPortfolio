import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared
import { FooterComponent } from '../../shared/footer/footer.component';
import { BackToTopComponent } from '../../shared/back-to-top/back-to-top.component';

// Features
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { ResumeComponent } from '../resume/resume.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    BackToTopComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    ResumeComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

