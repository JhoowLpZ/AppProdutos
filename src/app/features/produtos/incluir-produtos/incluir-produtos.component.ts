import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-incluir-produtos',
    templateUrl: './incluir-produtos.component.html'
})

export class IncluirProdutosComponent implements OnInit{

    constructor(
        private router: Router,
        private fb: FormBuilder){}

    public produtoForm = this.fb.group({
        codigo: [null],
        nomeProduto: [null],
        categoria: [null]
    });

    ngOnInit(): void {}

    adicionarProduto(){}

    voltar(){
        this.router.navigate(['produtos/']);
    }
}