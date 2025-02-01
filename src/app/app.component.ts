import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('AD.com - Angular Portfolio');
    this.metaService.addTags([
      { name: 'description', content: 'Showcase your projects with my Angular portfolio website.' },
      { name: 'keywords', content: 'portfolio, Software Engineering, web development, projects' }
    ]);
  }
}
