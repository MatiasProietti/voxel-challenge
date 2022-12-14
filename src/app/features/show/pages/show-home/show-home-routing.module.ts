import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowHomePage } from './show-home.page';

const routes: Routes = [
  {
    path: '',
    component: ShowHomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowHomePageRoutingModule {}
