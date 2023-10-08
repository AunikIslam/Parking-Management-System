import { Component, OnInit } from '@angular/core';
import { ParkingVehicle } from '../../dto/parking-vehicle';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parking-vehicle-list',
  templateUrl: './parking-vehicle-list.component.html',
  styleUrls: ['./parking-vehicle-list.component.scss']
})
export class ParkingVehicleListComponent implements OnInit {
  parkingVehicles: ParkingVehicle[] = [];
  displayedColumns: string[] = ['OwnerName', 'VehicleType', 'LicenseNo', 'EntryTime', 'ExitTime', 'Status', 'Action'];

  private _unsubscribeAll: Subject<any>;

  constructor() { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    if(localStorage.getItem('parkingVehicles') != null){
      this.parkingVehicles = JSON.parse(localStorage.getItem('parkingVehicles') || '[]');
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(0);
    this._unsubscribeAll.complete();
  }

}