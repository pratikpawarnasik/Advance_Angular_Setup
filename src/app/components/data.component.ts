import { Actions } from '@ngrx/effects';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { fetchData } from '../store/actions/data.actions';
import { selectPosts, selectLoading, selectError } from '../store/selectors/data.selectors';
import { Post } from '../store/models/data.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import colors from '../json/colors.json';
@Component({
  selector: 'app-data',
  templateUrl: 'data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  posts$!: Observable<Post[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  colorObject: any = colors;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit() {

    this.posts$ = this.store.select(selectPosts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    // Dispatch the fetchData action to fetch all data
    this.store.dispatch(fetchData());

    this.posts$.subscribe(postsTempData => {
      console.log('posts:::', postsTempData);
    });
    this.cdr.detectChanges();

    this.posts$ = this.store.select(selectPosts).pipe(
      map(posts => {
        return posts.map(post => {
          const colorIndex = Math.floor(Math.random() * this.colorObject.length);
          const mergedPost = Object.assign({}, post, this.colorObject[colorIndex]);
          return mergedPost;
        });
      })
    );

    // Subscribe to the merged posts
    this.posts$.subscribe(posts => {
      console.log('Merged Posts:', posts);
    });
  }


  viewMore(val: any) {
    this.router.navigate(['/view-post/' + val]);
  }

}   
