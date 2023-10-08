import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { ParkingFormComponent } from './parking-form.component';

const routes: Routes = [
  {
    path: 'parking-form',
    component: ParkingFormComponent
  }
];

@NgModule( {
    declarations: [ ],
    imports: [
    ], 
    exports: [
      RouterModule
    ]
} )
export class ParkingFormModule {}