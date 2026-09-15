import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  standalone: false,
  styleUrl: './my-first-component.css',
  templateUrl: './my-first-component.html',
})
export class MyFirstComponent {
  title: string = 'This is my First Component';
}
