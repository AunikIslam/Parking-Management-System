import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ParkingVehicle } from '../../dto/parking-vehicle';

@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.scss']
})
export class ParkingFormComponent implements OnInit {
  parkingVehicle = new ParkingVehicle();
  parkingVehicles: ParkingVehicle[] = [];
  private _unsubscribeAll: Subject<any>;

  constructor() { 
    this._unsubscribeAll = new Subject();
    if(localStorage.getItem('parkingVehicles') != null){
      // this.parkingVehicles = JSON.parse(localStorage.getItem('parkingVehicles'));
    }
    

  }

  ngOnInit() {
  }

  submitParkedVehicleInfo(): void{
    this.parkingVehicles.push(this.parkingVehicle);
    localStorage.setItem('parkingVehicles', JSON.stringify(this.parkingVehicles))
  }

}