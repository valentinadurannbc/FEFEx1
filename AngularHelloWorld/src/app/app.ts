import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  //Public Property
 title:string = "This is my First App";
 myName: string = "My name is John Doe"; // public access modifier is the default 
}
