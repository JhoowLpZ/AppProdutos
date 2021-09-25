import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Produto } from "src/app/shared/models/produtos.model";
import Swal from "sweetalert2";

import { ProdutosComponent } from "../produtos.component";
import { ProdutosService } from "../produtos.service";

@Component({
    selector: 'app-editar-produtos',
    templateUrl: './editar-produtos.component.html'
})

export class EditarProdutosComponent implements OnInit{

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private produtosService: ProdutosService,
        public parentComponent: ProdutosComponent){}

    public produtoForm = this.fb.group({
        id: [null, Validators.required],
        nomeProduto: [null, Validators.required],
        categoria: [null, Validators.required]
    });

    ngOnInit(): void {
        this.preencherFormulario(this.parentComponent.produtoSelecionado);
    }

    preencherFormulario(produto: Produto) : void{
        if(this.parentComponent.visualizar)
            this.produtoForm.disable();

        this.produtoForm.patchValue({
            id: produto.id,
            nomeProduto: produto.nomeProduto,
            categoria: produto.categoria
        });
    }

    atualizarProduto() : void{
        let prop : Produto = Object.assign({} as Produto, this.produtoForm.getRawValue());

        if(this.produtoForm.invalid){
            Swal.fire('Ops! Formulário Incorreto!', 'Preencha todos os campos obrigatórios!', 'error');
            return;
        } 
        
        this.produtosService.editarProduto(prop).subscribe(() => this.voltar());
    }

    voltar(): void{
        this.router.navigate(['produtos/']);
    }
}