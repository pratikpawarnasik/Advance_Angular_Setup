import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data.component';
import { DataEffects } from '../store/effects/data.effects';
import { dataReducer } from '../store/reducers/data.reducer';
import { ViewPostComponent } from './viewPost.component';
import { RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
@NgModule({
    declarations: [DataComponent, ViewPostComponent, 
      // HeaderComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      StoreModule.forFeature('postsMasterData', dataReducer),
      EffectsModule.forFeature([DataEffects]),
      RouterModule.forRoot([
        {path: '', component: DataComponent},
        {path: 'home', component: DataComponent},
        {path: 'view-post/:id', component: ViewPostComponent},
      ]),
    ],
    exports: [DataComponent]
  })
  export class DataModule {}
  