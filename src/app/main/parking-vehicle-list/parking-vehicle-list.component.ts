import { Component, OnInit } from '@angular/core';
import { ParkingVehicle } from '../../dto/parking-vehicle';

@Component({
  selector: 'app-parking-vehicle-list',
  templateUrl: './parking-vehicle-list.component.html',
  styleUrls: ['./parking-vehicle-list.component.scss']
})
export class ParkingVehicleListComponent implements OnInit {
  parkingVehicles: ParkingVehicle[] = [];
  displayedColumns: string[] = ['OwnerName', 'VehicleType', 'LicenseNo', 'EntryTime', 'ExitTime', 'Status', 'Action']

  constructor() { 
    if(localStorage.getItem('parkingVehicles') != null){
      this.parkingVehicles = JSON.parse(localStorage.getItem('parkingVehicles') || '[]');
    }
  }

  ngOnInit() {
  }

}