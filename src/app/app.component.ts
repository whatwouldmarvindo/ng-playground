import { Component, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-playground';

  from = signal(0);
  constructor() {
    interval(1000).subscribe(() => this.updateValue());
  }

  updateValue() {
    console.log('helo');
    this.from.update((v) => {
      return v + 1;
    });
  }
}
