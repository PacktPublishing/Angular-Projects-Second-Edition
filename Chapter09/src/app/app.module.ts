import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiControlsModule } from 'ui-controls';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
