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
  skills: AccordionModel[] = [
    {
    id:1,
    name: "Angular",
    logo: "./assets/angular-logo.png",
    attrText: "panelsStayOpen-collapseOne",
    links: ["input", "output", "property binding"],
    main: [
      {
      topic: "Input",
      updated: "",
      description: "",
      officialDocs: "",
      images: ["url", "url"],
    },
  ]
  },
  {
    id:2,
    name: "JavaScript",
    logo: "./assets/js-logo.jpg",
    attrText: "panelsStayOpen-collapseTwo",
    links: ["map", "reduce", "async await"],
    main: [
      {
      topic: "Input",
      updated: "",
      description: "",
      officialDocs: "",
      images: ["url", "url"],
    },
  ]

  },
  

]
}