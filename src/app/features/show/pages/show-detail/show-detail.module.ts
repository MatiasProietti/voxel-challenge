import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowDetailPageRoutingModule } from './show-detail-routing.module';
import { ShowDetailPage } from './show-detail.page';

@NgModule({
  imports: [CommonModule, ShowDetailPageRoutingModule, MatCardModule, MatButtonModule, MatIconModule, NgbRatingModule],
  declarations: [ShowDetailPage],
})
export class ShowDetailPageModule {}
