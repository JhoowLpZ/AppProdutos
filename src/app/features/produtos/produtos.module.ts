import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosService } from './produtos.service';

import { ProdutosComponent } from './produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { IncluirProdutosComponent } from './incluir-produtos/incluir-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutosRoutingModule,
  ],
  declarations: [
    ProdutosComponent,
    ListaProdutosComponent,
    IncluirProdutosComponent,
    EditarProdutosComponent
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }