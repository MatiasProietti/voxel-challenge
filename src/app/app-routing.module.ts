import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'show', loadChildren: () => import('./features/show/show.module').then((m) => m.ShowModule) },
  { path: '**', redirectTo: 'show' },
];
// Routes names could be moved to a constants file.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
