import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { HeaderTopComponent } from '../header-top/header-top.component';
import { HeaderBottomComponent } from '../header-bottom/header-bottom.component';
// import { MainContentComponent } from './main-content/main-content.component';
import { SideBarRightComponent } from "./side-bar-right/side-bar-right.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        NavbarComponent,
        SideBarLeftComponent,
        HeaderTopComponent,
        HeaderBottomComponent,
        // MainContentComponent,
        SideBarRightComponent
    ]
})
export class AppComponent {
  title = 'my-blog';
}
