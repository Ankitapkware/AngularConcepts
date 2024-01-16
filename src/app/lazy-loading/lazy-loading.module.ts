import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LazyLoadingComponent}
]

@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyLoadingModule { }
