import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
