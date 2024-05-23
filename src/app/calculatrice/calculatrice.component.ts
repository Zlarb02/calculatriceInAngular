import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  public randomNum1: number = 0;
  public randomNum2: number = 0;
  public result: number = 0;

  public randomize1() {
    this.randomNum1 = Math.random() * 1001;
  }
  public randomize2() {
    this.randomNum2 = Math.random() * 1001;
  }
  public add() {
    this.result = this.randomNum1 + this.randomNum2
  }
  public sub() {
    this.result = this.randomNum1 - this.randomNum2
  }
  public mul() {
    this.result = this.randomNum1 * this.randomNum2
  }
  public div() {
    this.result = this.randomNum1 / this.randomNum2
  }
  public reset() {
    this.randomNum1 = 0;
    this.randomNum2 = 0;
  }
}
