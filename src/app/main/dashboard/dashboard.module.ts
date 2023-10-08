import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared-module';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule( {
    declarations: [DashboardComponent],
    imports: [
      SharedModule,
      RouterModule.forChild(routes), 
      MatInputModule,
      MatButtonModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class DashboardModule {}