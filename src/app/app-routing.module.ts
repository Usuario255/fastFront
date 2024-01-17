import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from './views/workshop/workshop.component';
import { ColaboradoresComponent } from './views/colaboradores/colaboradores.component';

const routes: Routes = [
  { path: 'colaboradores',loadChildren: () => import('./views/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule) },
  { path: 'ata', loadChildren: () => import('./views/ata/ata.module').then(m => m.AtaModule) },
  { path: 'workshop', loadChildren: () => import('./views/workshop/workshop.module').then(m => m.WorkshopModule) },
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: '**', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
