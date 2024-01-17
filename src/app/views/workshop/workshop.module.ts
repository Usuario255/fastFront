import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopComponent } from './workshop.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WorkshopComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    ReactiveFormsModule
  ]
})
export class WorkshopModule { }
