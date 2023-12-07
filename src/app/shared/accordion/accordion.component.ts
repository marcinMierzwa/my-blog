import { Component } from '@angular/core';
import { AccordionModel } from '../../models/accordion-model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  areaText = "panelsStayOpen-collapseTwo";
  skills:AccordionModel[] = [
    {
    id:1,
    name: "Angular",
    logo: "./assets/angular-favicon.ico",
    attrText: "panelsStayOpen-collapseOne",
    links: ["input", "output", "property binding"]
  },
  {
    id:2,
    name: "JavaScript",
    logo: "./assets/js-logo.jpg",
    attrText: "panelsStayOpen-collapseTwo",
    links: ["map", "reduce", "async await"]
  },

]
}