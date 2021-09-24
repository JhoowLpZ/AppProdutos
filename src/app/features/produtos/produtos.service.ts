import { Injectable } from '@angular/core';

import { PRODUTOS } from 'src/app/shared/mocks/mock-produtos';

@Injectable()
export class ProdutosService {

  obterProdutos() {
    return Promise.resolve(PRODUTOS);
  }
}