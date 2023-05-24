import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
    <ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active button" routerLink="/home">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link button" routerLink="/view-post/12">Sample Post</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
    </li>
</ul>
  `
})



export class HeaderComponent implements OnInit {
 

  constructor() {
  }

  ngOnInit(): void {
  }

}
