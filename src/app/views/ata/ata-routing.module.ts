import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtaComponent } from './ata.component';

const routes: Routes = [{path:'', component: AtaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtaRoutingModule { }
