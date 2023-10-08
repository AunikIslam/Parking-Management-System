import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ParkingVehicle } from '../../dto/parking-vehicle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parkingVehicles: ParkingVehicle[] = [];
  totalParkedVehicles = 0;
  typesOfVehicleParked: any;
  parkedVehicleChart: any;
  private _unsubscribeAll: Subject<any>;
  
  constructor() { 
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    if(localStorage.getItem('parkingVehicles') != null){
      this.parkingVehicles = JSON.parse(localStorage.getItem('parkingVehicles') || '[]');
    }
    this.loadTotalParkedVehicles();
    this.loadTypesOfVehicleParked();
    this.loadParkedVehicleChart();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(0);
    this._unsubscribeAll.complete();
  }

  loadTotalParkedVehicles(): void {
    this.totalParkedVehicles = this.parkingVehicles.length;
  }

  loadTypesOfVehicleParked(): void {
    function countVehiclesByType(vehicles: ParkingVehicle[]): any {
      const counts: any = {};
    
      for (const vehicle of vehicles) {
        const { VehicleType } = vehicle;
    
        if (counts[VehicleType]) {
          counts[VehicleType]++;
        } else {
          counts[VehicleType] = 1;
        }
      }
      const result = Object.keys(counts).map((VehicleType) => ({
        VehicleType,
        Count: counts[VehicleType],
      }));
      return result;
    }
    this.typesOfVehicleParked = countVehiclesByType(this.parkingVehicles);
  }

  loadParkedVehicleChart(): void {
    const array = [];
    const typesOfVehicle = [];
    for(let i = 0; i < this.typesOfVehicleParked.length; i++){
      array.push(this.typesOfVehicleParked[i].Count);
      typesOfVehicle.push(this.typesOfVehicleParked[i].VehicleType)
    }
    this.parkedVehicleChart = {
      series: array,
      colors: ['#00C1A2', '#383838', '#FF5F5F'],
      chart: {
          type: 'pie',
          width: '200px'
      },
      labels: typesOfVehicle,
      legend: {
          show: false
      },
      responsive: [
          {
              breakpoint: 480,
              options: {
                  chart: {
                      width: 100
                  }
              }
          }
      ],
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          pie: {
              expandOnClick: false,
              donut: {
                  size: '75%',
                  labels: {
                      show: false,
                      name: {
                          show: true,
                          offsetY: -25
                      },
                      value: {
                          show: false,
                          fontSize: '45px',
                          fontWeight: 'bold',
                          fontFamily: 'Muli, Helvetica, Arial, sans-serif',
                          offsetY: 10,
                          color: '#373d3f'
                      }
                  }
              }
          }
      }
  };

  }

}