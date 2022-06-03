import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuVisitaPage } from './actu-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ActuVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuVisitaPageRoutingModule {}
