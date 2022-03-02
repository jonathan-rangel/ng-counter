import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Contador';
  number_main: number = 8;

  operation( operator: string) {
    switch (operator) {
      case 'x':
        this.number_main *= 2;
        break;
      
      case '/':
        this.number_main /= 2;
        break;
    
      case '+':
        this.number_main += 2;
        break;

      case '-':
      this.number_main -= 2;
      break;
        
      default:
        break;
    }
  }  

}
