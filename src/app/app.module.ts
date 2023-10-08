import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: 'dashboard',
  loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'parking-form',
  loadChildren: () => import('./main/parking-form/parking-form.module').then(m => m.ParkingFormModule)
  },
  {
    path: 'parking-vehicle-list',
  loadChildren: () => import('./main/parking-vehicle-list/parking-vehicle-list.module').then(m => m.ParkingVehicleList)
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    NgApexchartsModule,
    SharedModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    NgApexchartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }