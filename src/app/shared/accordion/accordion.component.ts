import { Component, inject } from '@angular/core';
import { SkillModel } from '../../models/skill-model';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  skills!: SkillModel[];
  dataService: DataService = inject(DataService);

  constructor() {
    this.dataService.fetchData()    
    .subscribe({
      next: (result) => {
        this.skills = result;
      },
      error: () => {
        console.log('fetching error');
      },
      complete: () => {
        console.log('fetching finished');
      },
    });
  }
}
