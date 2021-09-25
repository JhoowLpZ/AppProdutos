import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosService } from './produtos.service';

import { ProdutosComponent } from './produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { IncluirProdutosComponent } from './incluir-produtos/incluir-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    ProdutosRoutingModule,
    SharedModule
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