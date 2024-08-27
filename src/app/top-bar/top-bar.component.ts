import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: true,
  providers: [DatePipe]  // Provide DatePipe
})
export class TopBarComponent {
  time: string | undefined;

  constructor(private datePipe: DatePipe) {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.time = this.datePipe.transform(new Date(), 'mediumTime') || '';
  }

  openSettings(): void {
    alert('User settings clicked!');
  }
}
