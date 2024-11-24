import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { HowToOrderComponent } from './howToOrder/how-to-order.component'; // Specify weight and style
import '@fontsource/raleway'; // Defaults to weight 400
import '@fontsource/raleway/400.css'; // Specify weight
import '@fontsource/raleway/400-italic.css';
import { OurMenuComponent } from './our-menu/our-menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    HowToOrderComponent,
    OurMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sakura-Ramen';
}
