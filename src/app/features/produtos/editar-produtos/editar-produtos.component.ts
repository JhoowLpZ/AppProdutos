import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { Produto } from "src/app/shared/models/produtos.model";

import { ProdutosComponent } from "../produtos.component";

@Component({
    selector: 'app-editar-produtos',
    templateUrl: './editar-produtos.component.html'
})

export class EditarProdutosComponent implements OnInit{

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private parentComponent: ProdutosComponent){}

    public produtoForm = this.fb.group({
        codigo: [null],
        nomeProduto: [null],
        categoria: [null]
    });

    ngOnInit(): void {
        this.preencherFormulario(this.parentComponent.produtoSelecionado);
    }

    preencherFormulario(produto: Produto){
        if(this.parentComponent.visualizar)
            this.produtoForm.disable();

        this.produtoForm.patchValue({
            codigo: produto.codigo,
            nomeProduto: produto.nomeProduto,
            categoria: produto.categoria
        });
    }

    atualizarProduto(){}

    voltar(){
        this.router.navigate(['produtos/']);
    }
}