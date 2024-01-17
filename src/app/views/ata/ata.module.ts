import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtaRoutingModule } from './ata-routing.module';
import { AtaComponent } from './ata.component';


@NgModule({
  declarations: [
    AtaComponent
  ],
  imports: [
    CommonModule,
    AtaRoutingModule
  ]
})
export class AtaModule { }
