import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
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
  index = -1;
  private _unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this._unsubscribeAll = new Subject();
  
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(localStorage.getItem('parkingVehicles') != null){
        this.parkingVehicles = JSON.parse(localStorage.getItem('parkingVehicles') || '[]');
      }
      if(params.index){
        this.index = parseInt(params.index, 10)
        this.parkingVehicle = this.parkingVehicles[this.index];
      }
    });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(0);
    this._unsubscribeAll.complete();
  }

  vehicleTypeChangeListener(pEvent: MatSelectChange): void {
    if(pEvent.value == 'Car'){
      this.parkingVehicle.ParkingCharge = 60;
    } else if(pEvent.value == 'Microbus'){
      this.parkingVehicle.ParkingCharge = 80;
    } else if(pEvent.value == 'Truck'){
      this.parkingVehicle.ParkingCharge = 100;
    }
  }

  submitParkedVehicleInfo(): void{
    if(this.index != -1){
      this.parkingVehicles[this.index] = this.parkingVehicle;
    } else {
      this.parkingVehicles.push(this.parkingVehicle);
    }
    localStorage.setItem('parkingVehicles', JSON.stringify(this.parkingVehicles));
    this.router.navigate(['parking-vehicle-list']);
  }

}