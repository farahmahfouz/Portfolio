import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideUpAnimation } from '../animations';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [slideUpAnimation]
})
export class SkillsComponent implements OnInit {

  animationState = 'hidden';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
