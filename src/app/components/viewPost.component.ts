import { Actions } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchData, fetchDataById } from '../store/actions/data.actions';
import {  selectLoading, selectError, selectSinglePost } from '../store/selectors/data.selectors';
import { Post } from '../store/models/data.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-view-post',
  template: `
  
<div *ngIf="(loading$ | async)" class="alert alert-success" role="alert">
    Loading... (Loading added for testing purpose only...)
</div>

<div *ngIf="error$ | async as error" class="alert alert-danger" role="alert">
    <div>{{ error }}</div>
</div>

<div *ngIf="post$ | async as item" class="jumbotron">
    <h1 class="display-4">{{ item.title }}</h1>
    <p class="lead">{{ item.body }}</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>

    <div class="list-group">
        <button *ngFor="let tag of item.tags" type="button" class="list-group-item list-group-item-action ">
            {{tag | titlecase}}
        </button>
    </div>
</div>
  `,
})

export class ViewPostComponent implements OnInit {
  post$!: Observable<Post | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private router: Router) {
    this.post$ = this.store.select(selectSinglePost);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.store.dispatch(fetchDataById({ id }));
    this.post$.subscribe(postData => {
      console.log('View Post:', postData);
    });
  }

  ngOnInit() {
   
    this.store.select(selectSinglePost).subscribe(selectedData => {
      if (selectedData) {
        const tags = selectedData.tags;
        console.log('Tags:', tags);
      }
    });
    // Dispatch the fetchDataById action to fetch data by ID
    
    
  }
}