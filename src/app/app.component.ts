import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `

<app-header></app-header>
<hr>
  <router-outlet></router-outlet>
  <!-- <app-data></app-data> -->
  `
})



export class AppComponent implements OnInit {
 

  constructor() {
   
   
  }

  ngOnInit(): void {
    
  }

}

function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

