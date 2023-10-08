import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ParkingVehicleListComponent } from './parking-vehicle-list.component';

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
      MatTableModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class ParkingVehicleList {}