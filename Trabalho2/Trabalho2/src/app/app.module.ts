import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberDisplayComponentComponent } from './number-display-component/number-display-component.component';
import { RandomNumberComponentComponent } from './random-number-component/random-number-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberDisplayComponentComponent,
    RandomNumberComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
