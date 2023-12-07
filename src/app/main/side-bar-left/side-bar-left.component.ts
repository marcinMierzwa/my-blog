import { Component } from '@angular/core';
import { AccordionComponent } from "../../shared/accordion/accordion.component";

@Component({
    selector: 'app-side-bar-left',
    standalone: true,
    templateUrl: './side-bar-left.component.html',
    styleUrl: './side-bar-left.component.scss',
    imports: [AccordionComponent]
})
export class SideBarLeftComponent {

}
