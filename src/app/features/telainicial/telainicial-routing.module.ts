import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInicialComponent } from './telainicial.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
    data: {
        title: 'Tela Inicial', urls: [{title: 'Home'}]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaInicialRoutingModule { }