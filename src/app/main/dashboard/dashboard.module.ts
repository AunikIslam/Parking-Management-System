import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared-module';
import { DashboardComponent } from './dashboard.component';

// due to unusual behaviour of the hosting site, components that were declared in shared module for reuseablity, also had to import in this file
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
      CommonModule,
      RouterModule.forChild(routes), 
      MatCardModule,
      MatButtonModule,
      FlexLayoutModule,
      NgApexchartsModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class DashboardModule {}