import { Component } from '@angular/core';
import { IconsComponent } from './icons/icons.component';

@Component({
  selector: 'app-header-bottom',
  standalone: true,
  templateUrl: './header-bottom.component.html',
  styleUrl: './header-bottom.component.scss',
  imports: [IconsComponent],
})
export class HeaderBottomComponent {}
