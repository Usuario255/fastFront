import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtaRoutingModule } from './ata-routing.module';
import { AtaComponent } from './ata.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtaComponent
  ],
  imports: [
    CommonModule,
    AtaRoutingModule,
    ReactiveFormsModule
  ]
})
export class AtaModule { }
