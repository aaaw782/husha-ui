import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { ElementsComponent } from './elements/elements.component';
const routes: Routes = <Routes>[
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  }
];
export const routing = RouterModule.forChild(routes);
