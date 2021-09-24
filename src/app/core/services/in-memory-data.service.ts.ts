import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Produto } from 'src/app/shared/models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
    createDb() {
        const PRODUTOS: Produto[] = [
            { id: 1, nomeProduto: 'AMACIANTE CONCENTRADO CONFORT ', categoria: 'VAREJO' },
            { id: 2, nomeProduto: 'CHOCOLATE KIT KAT - PACOTE 20UN', categoria: 'ATACADO' },
            { id: 3, nomeProduto: 'CAMISETA CALVIN KLEIN', categoria: 'INTERNACIONAL' }
        ];
        return {PRODUTOS};
    }
}