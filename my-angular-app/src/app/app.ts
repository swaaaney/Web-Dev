import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Akku";

  languages = [
    "Java", 
    "C++",
    "Python",
    "JavaScript"
  ];

  showGreeting = false;
  toggleGreeting() {
    this.showGreeting = !this.showGreeting;
  }

  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
