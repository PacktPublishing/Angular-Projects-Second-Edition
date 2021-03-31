import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@packt/poi';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ]),
    PoiModule,
    ChartsModule
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
