import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { EagerLoadingComponent } from './eager-loading/eager-loading.component';
import { DependencyInjectionsComponent } from './dependency-injections/dependency-injections.component';

const routes: Routes = [
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading-routing.module').then(m => m.LazyLoadingRoutingModule)},
  {path: 'eager-loading', component: EagerLoadingComponent},
  {path: 'dependency-injections', component: DependencyInjectionsComponent},
  {path: '', redirectTo: '/lazy-loading', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
