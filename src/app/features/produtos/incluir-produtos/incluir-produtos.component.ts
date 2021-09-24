import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Produto } from "src/app/shared/models/produtos.model";
import Swal from "sweetalert2";
import { ProdutosService } from "../produtos.service";

@Component({
    selector: 'app-incluir-produtos',
    templateUrl: './incluir-produtos.component.html'
})

export class IncluirProdutosComponent implements OnInit{

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private produtosService: ProdutosService){}

    public produtoForm = this.fb.group({
        id: [null],
        nomeProduto: [null],
        categoria: [null]
    });

    ngOnInit(): void {}

    adicionarProduto(){
        let prop : Produto = Object.assign({} as Produto, this.produtoForm.getRawValue());

        this.produtosService.incluirProduto(prop).subscribe(() => this.voltar());
    }

    voltar(){
        this.router.navigate(['produtos/']);
    }
}