import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowHomePageRoutingModule } from './show-home-routing.module';
import { ShowHomePage } from './show-home.page';

@NgModule({
  imports: [CommonModule, ShowHomePageRoutingModule],
  declarations: [ShowHomePage],
})
export class ShowHomePageModule {}
