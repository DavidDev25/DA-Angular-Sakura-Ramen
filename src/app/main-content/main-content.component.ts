import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from '../howToOrder/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, OurMenuComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
