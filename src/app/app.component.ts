import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { 
    if(window.location.href.includes('home')){
      this.router.navigate(['home']);
    }
    
  }

  ngOnInit() {
    
  }

}