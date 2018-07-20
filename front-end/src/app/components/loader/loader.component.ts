import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor() {}

  open(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  close() {
    document.getElementById('overlay').style.display = 'none';
  }
}
