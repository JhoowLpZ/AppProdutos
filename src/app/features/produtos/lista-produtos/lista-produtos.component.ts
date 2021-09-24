import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProdutosService } from "../produtos.service";

import { Produto } from "src/app/shared/models/produtos.model";

import { ProdutosComponent } from "../produtos.component";

@Component({
    selector: 'app-lista-produtos',
    templateUrl: './lista-produtos.component.html'
})

export class ListaProdutosComponent implements OnInit{

    public produtos: Produto[] = [];

    constructor(
        private router: Router,
        private produtosService: ProdutosService,
        private parentComponent: ProdutosComponent){}

    ngOnInit(): void {
        this.produtosService.obterProdutos().then(produtos => this.produtos = produtos);
    }

    incluirProduto(){
        this.router.navigate(['produtos/incluir']);
    }

    editarProduto(produtoSelecionado: Produto, visualizar: boolean){
        this.parentComponent.produtoSelecionado = produtoSelecionado;
        this.parentComponent.visualizar = visualizar;

        this.router.navigate(['produtos/editar']);
    }

    excluirProduto(){}
}