import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { TerrainServiceService } from './services/terrain-service.service';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TerrainComponent } from './admin/terrain/terrain.component';
import { TerrainAddComponent } from './admin/terrain/terrain-add/terrain-add.component';
import { TerrainUpdateComponent } from './admin/terrain/terrain-update/terrain-update.component';
import { PackeComponent } from './admin/packe/packe.component';
import { AddPackeComponent } from './admin/packe/add-packe/add-packe.component';
import { UpdatePackeComponent } from './admin/packe/update-packe/update-packe.component';
import { PhotoComponent } from './admin/photo/photo.component';
import { AddPhotoComponent } from './admin/photo/add-photo/add-photo.component';
import { UpdatePhotoComponent } from './admin/photo/update-photo/update-photo.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { AbonnementComponent } from './admin/abonnement/abonnement.component';
import { AddAbonnementComponent } from './admin/abonnement/add-abonnement/add-abonnement.component';
import { UpdateAbonnementComponent } from './admin/abonnement/update-abonnement/update-abonnement.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { AddReservationComponent } from './admin/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './admin/reservation/update-reservation/update-reservation.component';
import { ClubComponent } from './admin/club/club.component';
import { AddClubComponent } from './admin/club/add-club/add-club.component';
import { UpdateClubComponent } from './admin/club/update-club/update-club.component';
import { VilleComponent } from './admin/ville/ville.component';
import { UpdateVilleComponent } from './admin/ville/update-ville/update-ville.component';
import { AddVilleComponent } from './admin/ville/add-ville/add-ville.component';
import { ZoneComponent } from './admin/zone/zone.component';
import { AddZoneComponent } from './admin/zone/add-zone/add-zone.component';
import { UpdateZoneComponent } from './admin/zone/update-zone/update-zone.component';
import { OccupationComponent } from './admin/occupation/occupation.component';
import { AddOccupationComponent } from './admin/occupation/add-occupation/add-occupation.component';
import { UpdateOccupationComponent } from './admin/occupation/update-occupation/update-occupation.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { PagesNotFoundComponent } from './partials/pages-not-found/pages-not-found.component';
import { JwtInterceptorInterceptor } from './services/JwtInterceptor/jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    TerrainAddComponent,
    TerrainUpdateComponent,
    HomeComponent,
    SidebarComponent,
    PackeComponent,
    AddPackeComponent,
    UpdatePackeComponent,
    PhotoComponent,
    AddPhotoComponent,
    UpdatePhotoComponent,
    AbonnementComponent,
    AddAbonnementComponent,
    UpdateAbonnementComponent,
    ReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    ClubComponent,
    AddClubComponent,
    UpdateClubComponent,
    VilleComponent,
    AddVilleComponent,
    UpdateVilleComponent,
    ZoneComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    OccupationComponent,
    AddOccupationComponent,
    UpdateOccupationComponent,
    LoginComponent,
    NavbarComponent,
    PagesNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorInterceptor ,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
