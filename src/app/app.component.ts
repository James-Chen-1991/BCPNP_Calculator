import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bcpnp-calculator';
  points: number = -1;

  getPoints($event: number) {
    this.points = $event;
    console.log("Final Points: " + this.points);
  }

  reFreshForm() {
    this.points = -1;
  }
}
