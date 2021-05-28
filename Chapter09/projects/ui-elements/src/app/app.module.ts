import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UiControlsModule, CopyButtonComponent } from 'ui-controls';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    UiControlsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CopyButtonComponent, { injector: this.injector });
    customElements.define('copy-button', el);
  }
}
