import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

import { TerrainComponent } from './admin/terrain/terrain.component';
import { PackeComponent } from './admin/packe/packe.component';
import { PhotoComponent } from './admin/photo/photo.component';
import { AbonnementComponent } from './admin/abonnement/abonnement.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { ClubComponent } from './admin/club/club.component';
import { VilleComponent } from './admin/ville/ville.component';
import { ZoneComponent } from './admin/zone/zone.component';


const routes: Routes = [{
  path:'', component:HomeComponent,
  children:[
    {path:'terrain',component:TerrainComponent},
    {path:'packe',component:PackeComponent},
    {path:'photo',component:PhotoComponent},
    {path:'abonnement',component:AbonnementComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'club',component:ClubComponent},
    {path:'ville',component:VilleComponent},
    {path:'zone',component:ZoneComponent}
  ] 
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
