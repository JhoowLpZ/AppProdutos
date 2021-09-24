import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    canActivate: [],
    children: [
      { path: '', loadChildren: () => import('./features/telainicial/telainicial.module').then(m => m.TelaInicialModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
