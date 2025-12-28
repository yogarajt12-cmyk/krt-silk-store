import { Component } from '@angular/core';

@Component({
  selector: 'app-support-widget',
  standalone: false,
  templateUrl: './support-widget.html',
  styleUrl: './support-widget.css',
})
export class SupportWidget {
  open = false;

  openWidget() {
    this.open = true;
  }

  closeWidget() {
    this.open = false;
  }
}
