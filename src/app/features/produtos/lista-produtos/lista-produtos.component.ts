import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProdutosService } from "../produtos.service";

import { Produto } from "src/app/shared/models/produtos.model";

import { ProdutosComponent } from "../produtos.component";
import Swal from "sweetalert2";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-lista-produtos',
    templateUrl: './lista-produtos.component.html'
})

export class ListaProdutosComponent implements OnInit{

    public produtos: Produto[] = [];

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private produtosService: ProdutosService,
        private parentComponent: ProdutosComponent){}

    ngOnInit(): void {
        this.produtosService.obterProdutos().subscribe(produtos => { 
            this.produtos = produtos, 
            this.parentComponent.todosProdutos = produtos;
        });
    }

    public filtroForm = this.fb.group({
        codigo: [''],
        categoria: ['TODAS'],
    });

    filtrar(){    
        if(this.filtroForm.value.categoria == 'TODAS' && this.filtroForm.value.codigo){
            this.produtos = this.parentComponent.todosProdutos.filter(x => x.id == this.filtroForm.value.codigo);
        }else if(this.filtroForm.value.categoria != 'TODAS' && this.filtroForm.value.codigo){
            this.produtos = this.parentComponent.todosProdutos.filter(x => 
                x.id == this.filtroForm.value.codigo && 
                x.categoria == this.filtroForm.value.categoria
            );
        }else if(this.filtroForm.value.categoria != 'TODAS' && !this.filtroForm.value.codigo){
            this.produtos = this.parentComponent.todosProdutos.filter(x => x.categoria == this.filtroForm.value.categoria); 
        }else{
            this.produtos = this.parentComponent.todosProdutos;
        }
    }

    incluirProduto(): void{
        this.router.navigate(['produtos/incluir']);
    }

    editarProduto(produtoSelecionado: Produto, visualizar: boolean): void{
        this.parentComponent.produtoSelecionado = produtoSelecionado;
        this.parentComponent.visualizar = visualizar;

        this.router.navigate(['produtos/editar']);
    }

    perguntarRemoverProduto(produto: Produto): void{
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