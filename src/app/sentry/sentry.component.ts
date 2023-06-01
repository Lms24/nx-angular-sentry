import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-nx-webpack-plugin-sentry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sentry.component.html',
  styleUrls: ['./sentry.component.css'],
})
export class SentryComponent {
  public error() {
    throw new Error('Sentry Nx+Angular Error');
  }
}
