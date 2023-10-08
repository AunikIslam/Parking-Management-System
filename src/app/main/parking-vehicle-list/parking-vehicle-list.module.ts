import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ParkingVehicleListComponent } from './parking-vehicle-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// due to unusual behaviour of the hosting site, components that were declared in shared module for reuseablity, also had to import in this file

const routes: Routes = [
  {
    path: '**',
    component: ParkingVehicleListComponent
  }
];

@NgModule( {
    declarations: [ParkingVehicleListComponent ],
    imports: [
      SharedModule,
      RouterModule.forChild(routes),
      FlexLayoutModule,
      MatTableModule,
      MatButtonModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class ParkingVehicleList {}