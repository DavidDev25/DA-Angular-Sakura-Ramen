import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import '@fontsource/raleway'; // Defaults to weight 400
import '@fontsource/raleway/400.css'; // Specify weight
import '@fontsource/raleway/400-italic.css'; // Specify weight and style

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sakura-Rahmen';
}
