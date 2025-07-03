import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SkillsComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
