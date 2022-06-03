import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuVisitaPageRoutingModule } from './actu-visita-routing.module';

import { ActuVisitaPage } from './actu-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuVisitaPageRoutingModule
  ],
  declarations: [ActuVisitaPage]
})
export class ActuVisitaPageModule {}
