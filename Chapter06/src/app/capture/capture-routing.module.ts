import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturePage } from './capture.page';

const routes: Routes = [
  {
    path: '',
    component: CapturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturePageRoutingModule {}
