import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingFormComponent } from './parking-form.component';
import { SharedModule } from '../../shared-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// due to unusual behaviour of the hosting site, components that were declared in shared module for reuseablity, also had to import in this file

const routes: Routes = [
  {
    path: '**',
    component: ParkingFormComponent
  }
];

@NgModule( {
    declarations: [ParkingFormComponent ],
    imports: [
      SharedModule,
      RouterModule.forChild(routes),
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class ParkingFormModule {}