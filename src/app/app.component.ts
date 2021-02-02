import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iastest';

  constructor(public router: Router) {

  }

  goServices() {
    this.router.navigate(['/services']);
  }

  goConsult() {
    this.router.navigate(['/consult']);
  }
}
