import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { TestComponent } from './main-content/test/test.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Main',
    pathMatch: 'full',
  },
    {
      path: 'test',
      component: TestComponent,
    },

  {
    path: 'Main',
    component: MainContentComponent,
  },
  { path: '**', redirectTo: 'Main' },
];
