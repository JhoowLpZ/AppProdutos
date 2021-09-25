import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ProdutosService } from "../produtos.service";

import { Produto } from "src/app/shared/models/produtos.model";

import { ProdutosComponent } from "../produtos.component";
import Swal from "sweetalert2";

@Component({
    selector: 'app-incluir-produtos',
    templateUrl: './incluir-produtos.component.html'
})

export class IncluirProdutosComponent implements OnInit{

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private produtosService: ProdutosService,
        private parentComponent: ProdutosComponent){}

    public produtoForm = this.fb.group({
        id: [null, Validators.required],
        nomeProduto: [null, Validators.required],
        categoria: [null, Validators.required]
    });

    ngOnInit(): void {}

    adicionarProduto(): void{
        let prop : Produto = Object.assign({} as Produto, this.produtoForm.getRawValue());

        if(this.produtoForm.invalid){
            Swal.fire('Ops! Formulário Incorreto!', 'Preencha todos os campos obrigatórios!', 'error');
            return;
        } 
            
        if(!this.parentComponent.todosProdutos.every(x => x.id != prop.id)){
            Swal.fire('Ops! Não é possível adicionar', 'O código digitado já existe, por gentileza escolha outro número!', 'error');
            return;
        }

        this.produtosService.incluirProduto(prop).subscribe(() => this.voltar());
    }

    voltar(): void{
        this.router.navigate(['produtos/']);
    }
}