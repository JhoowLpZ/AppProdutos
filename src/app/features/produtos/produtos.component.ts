import { Component } from "@angular/core";
import { Produto } from "src/app/shared/models/produtos.model";

@Component({
    template: '<router-outlet></router-outlet>',
})

export class ProdutosComponent {

    produtoSelecionado: Produto = {} as Produto;
    todosProdutos: Produto[] = [];
    visualizar: boolean = false;

}