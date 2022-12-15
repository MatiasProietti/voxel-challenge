import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ShowCardComponent } from './show-card.component';

@NgModule({
  declarations: [ShowCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ShowCardComponent],
})
export class ShowCardModule {}
