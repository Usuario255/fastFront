import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ColaboradoresComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColaboradoresRoutingModule,
  ]
})
export class ColaboradoresModule { }
