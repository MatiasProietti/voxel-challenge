import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowCardModule } from '../../components/show-card/show-card.module';
import { ShowHomePageRoutingModule } from './show-home-routing.module';
import { ShowHomePage } from './show-home.page';

@NgModule({
  imports: [CommonModule, ShowHomePageRoutingModule, NgxPaginationModule, ShowCardModule],
  declarations: [ShowHomePage],
})
export class ShowHomePageModule {}
