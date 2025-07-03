import { Component } from '@angular/core';
import { LetterPipe } from '../letter.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LetterPipe, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
