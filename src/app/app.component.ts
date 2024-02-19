import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showPosts = false;
  title = 'generic-http-client-with-base-route-interceptor';

  switchview(): void {
    this.showPosts = !this.showPosts;
  }
}
