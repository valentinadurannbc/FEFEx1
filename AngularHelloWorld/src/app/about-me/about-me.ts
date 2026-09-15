import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: false,
  styleUrl: './about-me.css',
  templateUrl: './about-me.html',
})
export class AboutMe {
   title:string = "About Me";
   details:string = "My name is Valentina and I am studying Software Developmnet at NBCC.I plan on graduating on "; 
   graduationDate:Date = new Date(2027,5,1); //year, month, day  / month are 0 based
  }
