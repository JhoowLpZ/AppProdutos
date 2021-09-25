import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { IncluirProdutosComponent } from './incluir-produtos/incluir-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [{
        path: '', 
        component: ListaProdutosComponent, 
        data: {
            title: 'Produtos', 
            urls: [{title: 'Home', url: '/'},{title: 'Lista de Produtos'}]
        }
    },{
        path: 'incluir', 
        component: IncluirProdutosComponent, 
        data: {
            title: 'Produtos', 
            urls: [{title: 'Home', url: '/'},{title: 'Lista', url: '/produtos'},{title: 'Incluir Produto'}]
        }
    },{
        path: 'editar', 
        component: EditarProdutosComponent, 
        data: {
            title: 'Produtos', 
            urls: [{title: 'Home', url: '/'},{title: 'Lista', url: '/produtos'},{title: 'Editar Produto'}]
        }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }