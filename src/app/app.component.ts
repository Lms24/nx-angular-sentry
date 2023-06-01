import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SentryComponent } from './sentry/sentry.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SentryComponent],
  selector: 'angular-nx-webpack-plugin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-nx-webpack-plugin';
}
