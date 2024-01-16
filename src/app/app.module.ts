import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { EagerLoadingComponent } from './eager-loading/eager-loading.component';
import { DependencyInjectionsComponent } from './dependency-injections/dependency-injections.component';
import { MyService } from './dependency-injections/my.service';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadingComponent,
    EagerLoadingComponent,
    DependencyInjectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
