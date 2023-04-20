import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

import { TerrainComponent } from './admin/terrain/terrain.component';
import { PackeComponent } from './admin/packe/packe.component';
import { PhotoComponent } from './admin/photo/photo.component';
import { AbonnementComponent } from './admin/abonnement/abonnement.component';


const routes: Routes = [{
  path:'', component:HomeComponent,
  children:[
    {path:'terrain',component:TerrainComponent},
    {path:'packe',component:PackeComponent},
    {path:'photo',component:PhotoComponent},
    {path:'abonnement',component:AbonnementComponent}
  ] 
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
