import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProdutosService } from "../produtos.service";

import { Produto } from "src/app/shared/models/produtos.model";

import { ProdutosComponent } from "../produtos.component";
import Swal from "sweetalert2";

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
        this.produtosService.obterProdutos().subscribe(produtos => this.produtos = produtos);
    }

    incluirProduto(){
        this.router.navigate(['produtos/incluir']);
    }

    editarProduto(produtoSelecionado: Produto, visualizar: boolean){
        this.parentComponent.produtoSelecionado = produtoSelecionado;
        this.parentComponent.visualizar = visualizar;

        this.router.navigate(['produtos/editar']);
    }

    perguntarRemoverProduto(produto: Produto){
        Swal.fire({
            title: 'Deseja excluir o produto?',
            text: "Você não será capaz de reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#004990',
            cancelButtonText: 'Não',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, desejo excluir!'
          }).then((result) => {
            if (result.isConfirmed) 
                this.produtosService.excluirProduto(produto.id).subscribe(x => {
                    this.produtos.splice(this.produtos.indexOf(produto), 1);
                });
          })
    }
}