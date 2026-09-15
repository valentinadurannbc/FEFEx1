import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  myNumbers: number[] = [10,20,30,40,50];
  moreNumber: number[] = [10.234,20.777,30.444,50,.235];

}
