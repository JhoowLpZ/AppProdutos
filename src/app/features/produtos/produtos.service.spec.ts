/*global spyOn*/
import { of, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getTestBed, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ProdutosService } from "./produtos.service";

import { Produto } from "src/app/shared/models/produtos.model";

window.scrollTo = jest.fn();

const PRODUTOS: Produto[] = [
    { id: 1, nomeProduto: 'AMACIANTE CONCENTRADO CONFORT ', categoria: 'VAREJO' }
];

const PROD: Produto = { id: 1, nomeProduto: 'AMACIANTE CONCENTRADO CONFORT ', categoria: 'VAREJO' };

describe('ProdutosService', () => {
    let injector: TestBed;
    let service: ProdutosService;
    let httpClient: HttpClient;
    let httpMock: HttpTestingController;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [],
            providers: [ProdutosService]
        }).compileComponents()
        .then(() => {
            injector = getTestBed();
            httpClient = injector.inject(HttpClient);
            httpMock = injector.inject(HttpTestingController);
            service = injector.inject(ProdutosService);
        });
    }));

    it('Deve criar meu serviço', () => {
        service = new ProdutosService(httpClient);
        expect(service).toBeTruthy();
    });

    it(`Dado o ProdutosService
        Quando o metódo obterProdutos retornar com sucesso
        Deve retornar os produtos`, () => {

        // Arrange
        let produtos;
        jest.spyOn(httpClient, 'get').mockReturnValue(of(PRODUTOS));

        // Action
        service.obterProdutos().subscribe(a => {
            produtos = a;
        });

        // Assert
        expect(produtos).toEqual(PRODUTOS);
        expect(httpClient.get).toHaveBeenCalledWith('api/PRODUTOS');
    });

    it(`Dado o ProdutosService
        Quando o metódo obterProdutos retornar com erro
        Deve retornar undefined`, () => {

        // Arrange
        let retornoErro;
        jest.spyOn(httpClient, 'get').mockReturnValue(throwError(400));

        // Action
        service.obterProdutos().subscribe(() => {}, (error) =>  retornoErro = error);

        // Assert
        expect(retornoErro).toEqual(undefined);
    });

    it(`Dado o ProdutosService
        Quando o metódo incluirProduto retornar com sucesso
        Deve retornar o produto adicionado`, () => {

        // Arrange
        let produtos;
        // let httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        jest.spyOn(httpClient, 'post').mockReturnValue(of(PROD));

        // Action
        service.incluirProduto(PROD).subscribe(a => {
            produtos = a;
        });

        // Assert
        expect(produtos).toEqual(PROD);
        // expect(httpClient.post).toHaveBeenCalledWith('api/PRODUTOS', PROD, httpOptions);
    });

    it(`Dado o ProdutosService
        Quando o metódo incluirProduto retornar com erro
        Deve retornar undefined`, () => {

        // Arrange
        let retornoErro;
        jest.spyOn(httpClient, 'post').mockReturnValue(throwError(400));

        // Action
        service.incluirProduto(PROD).subscribe(() => {}, (error) =>  retornoErro = error);

        // Assert
        expect(retornoErro).toEqual(undefined);
    });
});