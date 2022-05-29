import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVisitaPageRoutingModule } from './new-visita-routing.module';

import { NewVisitaPage } from './new-visita.page';

import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewVisitaPageRoutingModule
  ],
  declarations: [NewVisitaPage]
})
export class NewVisitaPageModule {}
