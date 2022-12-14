import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowDetailPageRoutingModule } from './show-detail-routing.module';
import { ShowDetailPage } from './show-detail.page';

@NgModule({
  imports: [CommonModule, ShowDetailPageRoutingModule],
  declarations: [ShowDetailPage],
})
export class ShowDetailPageModule {}
