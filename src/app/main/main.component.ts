import { Component } from '@angular/core';
import { SideBarLeftComponent } from "./side-bar-left/side-bar-left.component";
import { SideBarRightComponent } from "./side-bar-right/side-bar-right.component";
import { ContentMainComponent } from "./content-main/content-main.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [SideBarLeftComponent, SideBarRightComponent, ContentMainComponent]
})
export class MainComponent {

}
