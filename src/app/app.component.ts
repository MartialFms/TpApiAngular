import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-angular';

  displayModal: boolean = false;

  showLoginModal() {
      this.displayModal = true;
  }
}
