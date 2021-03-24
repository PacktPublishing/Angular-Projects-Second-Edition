import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    RouterModule.forChild([
      { path: '', component: VisitorComponent }
    ])
  ],
  declarations: [VisitorComponent],
})
export class VisitorModule {}
