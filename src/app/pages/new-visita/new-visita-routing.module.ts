import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVisitaPage } from './new-visita.page';

const routes: Routes = [
  {
    path: '',
    component: NewVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewVisitaPageRoutingModule {}
