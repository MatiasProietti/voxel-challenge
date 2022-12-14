import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show.component';

const routes: Routes = [
  {
    path: '',
    component: ShowComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/show-home/show-home.module').then((m) => m.ShowHomePageModule),
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./pages/show-detail/show-detail.module').then((m) => m.ShowDetailPageModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutingModule {}
